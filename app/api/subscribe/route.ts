import { NextResponse } from "next/server";

const LIST_ID = "Y8jDSi";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const response = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIV_KEY}`,
          revision: "2024-10-15",
        },
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              custom_source: "Website",
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: {
                      email,
                      subscriptions: {
                        email: {
                          marketing: {
                            consent: "SUBSCRIBED",
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  type: "list",
                  id: LIST_ID,
                },
              },
            },
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Klaviyo subscribe error:", errorData);
      return NextResponse.json({ error: "Subscribe failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
