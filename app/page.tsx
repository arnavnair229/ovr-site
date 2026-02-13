export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-white">

      {/* HERO */}
      <section className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_60%)] pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">
            OVR
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10">
            Engineered for the nights that don’t slow down.
            Wellness meets nightlife.
          </p>

          <button className="px-8 py-3 rounded-full font-semibold border border-gray-500 text-gray-200 hover:bg-white hover:text-black transition-all duration-300">
            Join the Drop
          </button>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="py-32 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Recovery Reimagined</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            OVR is built for the next generation of nightlife.
            Designed with performance ingredients and engineered for smarter mornings,
            OVR helps you stay social without sacrificing wellness.
          </p>
        </div>
      </section>

      {/* STORY + VISUAL */}
      <section className="py-32 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Image Placeholder */}
          <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>

          {/* Story */}
          <div>
            <h2 className="text-4xl font-semibold mb-6">The OVR Story</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              OVR was created for the nights that matter —
              the celebrations, the connections, the memories.
              We believe wellness and nightlife don’t have to conflict.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Designed with intentional ingredients and a community-first mindset,
              OVR supports your social life without compromising your performance.
            </p>
          </div>

        </div>
      </section>



      {/* COMMUNITY */}
      <section id="community" className="py-32 px-6 border-t border-gray-800 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Built for the Community</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From pregame rituals to sunrise recaps,
            OVR is part of the culture.
            This isn’t just recovery — it’s belonging.
          </p>
        </div>
      </section>



      {/* EMAIL CAPTURE */}
      <section className="py-32 px-6 border-t border-gray-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">
            Join the OVR List
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Early access to drops. Community events. Launch updates.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full bg-[#111111] border border-gray-700 text-white focus:outline-none focus:border-gray-400 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
            >
              Join
            </button>
          </form>
        </div>
      </section>

      {/* SHOP PREVIEW */}
      <section id="shop" className="py-32 px-6 border-t border-gray-800 text-center">
        <h2 className="text-4xl font-semibold mb-8">The First Drop</h2>

        <div className="max-w-sm mx-auto bg-[#111111] border border-gray-800 rounded-2xl p-8">
          <div className="h-40 bg-gray-800 rounded-xl mb-6"></div>

          <h3 className="text-xl font-semibold mb-2">OVR Recovery Shot</h3>
          <p className="text-gray-400 text-sm mb-6">
            60mL | Matte Black Edition
          </p>

          <button className="w-full px-6 py-3 rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
            Coming Soon
          </button>
        </div>
      </section>

    </main>
  );
}
