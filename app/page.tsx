import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f1024] via-black to-[#13142e] text-white p-8">

      {/* Title */}
      <section className="text-center">

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          <img
            src="/svt-logo.png"
            className="w-8 h-8 md:w-12 md:h-12" 
          />


          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#F7CAC9] to-[#91A8D0] bg-clip-text text-transparent">
            GoSe Survival Guide
          </h1>

          <img
            src="/svt-logo.png"
            className="w-8 h-8 md:w-12 md:h-12"
          />

        </div>

        <p className="tracking-[0.4em] text-sm text-gray-400 mt-4">
          SEVENTEEN EDITION
        </p>

        <p className="mt-8 text-xl">
          A fan-made attempt to organize thirteen wonderfully
          disorganized humans.
        </p>

      </section>


      {/* Warning Card */}
      <section className="max-w-6xl mx-auto mt-14">

        <div
          className="
          rounded-[30px]
          border
          border-[#F7CAC9]/50
          p-8
          bg-gradient-to-r
          from-[#11111a]
          to-[#0b1224]
          shadow-[0_0_40px_rgba(145,168,208,0.25)]
        "
        >

          <h2 className="text-4xl font-bold text-[#F7CAC9]">
            ⚠ WARNING
          </h2>
          
          <p className="text-sm text-gray-400 mt-2 italic">
            Side effects may include becoming emotionally attached.
          </p>

          <p className="mt-5 text-lg">
            This guide cannot protect you from:
          </p>

          <ul className="mt-6 space-y-5 text-lg">

            <li>💎 unexpected betrayal</li>

            <li>🎮 suspicious game behavior</li>

            <li>🎤 loud screaming</li>

            <li>🎬 secondhand embarrassment</li>

            <li>💗 emotional attachment</li>

          </ul>

        </div>

      </section>


      {/* Button */}

      <div className="flex justify-center mt-12">

        <button
          className="
          px-10
          py-4
          rounded-full
          text-xl
          font-bold
          bg-gradient-to-r
          from-[#F7CAC9]
          to-[#91A8D0]
          text-black
          shadow-[0_0_35px_rgba(145,168,208,0.6)]
          hover:scale-105
          transition
        "
        >
          Enter at your own risk 💎
        </button>

      </div>

      <section className="mt-20 text-center">

        <h2 className="text-4xl font-bold text-[#91A8D0]">
          Choose your survival path
        </h2>

        <p className="text-gray-400 mt-3">
          New fan? Veteran Carat? Choose wisely🧙🔮🥕.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">

          <Link
            href="/members"
            className="px-8 py-5 rounded-[25px] bg-[#11111a] border border-[#F7CAC9]/40 hover:scale-105 transition"
>
              🏷️ First, meet the members
          </Link>

          <button className="px-8 py-5 rounded-[25px] bg-[#11111a] border border-[#91A8D0]/40 hover:scale-105 transition">
            🔎 Explore GoSe episodes
          </button>

          <button className="px-8 py-5 rounded-[25px] bg-[#11111a] border border-purple-400/40 hover:scale-105 transition">
            💥Chaos Zone
          </button>

        </div>

      </section>

      {/* Footer */}

      <footer className="mt-20 border-t border-white/10 pt-8">

        <div className="flex flex-col md:flex-row gap-3 text-center md:text-left justify-between text-gray-500">

          <p>SEVENTEEN</p>

          <p>Say the name, SEVENTEEN</p>

          <p>CARAT APPROVED</p>

        </div>

      </footer>

    </main>
  );
}