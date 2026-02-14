import { NextResponse } from "next/server";

const LIST_ID = "Y8jDSi";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`,
      "revision": "2023-10-15"
    };

    // 1️⃣ Upsert profile
    await fetch("https://a.klaviyo.com/api/profiles/", {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          type: "profile",
          attributes: { email }
        }
      })
    });

    // 2️⃣ Subscribe profile with explicit consent
    await fetch("https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/", {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          type: "profile-subscription-bulk-create-job",
          attributes: {
            profiles: {
              data: [
                {
                  type: "profile",
                  attributes: { email }
                }
              ]
            },
            subscriptions: {
              email: {
                marketing: {
                  consent: "SUBSCRIBED",
                  consented_at: new Date().toISOString(),
                  consent_method: "WEB_FORM"
                }
              }
            }
          }
        }
      })
    });

    // 3️⃣ Fetch profile ID
    const lookupResponse = await fetch(
      `https://a.klaviyo.com/api/profiles/?filter=equals(email,"${email}")`,
      { headers }
    );

    const lookupData = await lookupResponse.json();
    const profileId = lookupData?.data?.[0]?.id;

    if (!profileId) {
      return NextResponse.json({ error: "Profile lookup failed" }, { status: 500 });
    }

    // 4️⃣ Add profile to list
    await fetch(
      `https://a.klaviyo.com/api/lists/${LIST_ID}/relationships/profiles/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          data: [
            {
              type: "profile",
              id: profileId
            }
          ]
        })
      }
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
