export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f1024] via-black to-[#13142e] text-white p-8">

      {/* Title */}
      <section className="text-center">

        <div className="flex items-center justify-center gap-6">

          <img
            src="/svt-logo.png"
            className="w-12 h-12" 
          />


          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#F7CAC9] to-[#91A8D0] bg-clip-text text-transparent">
            GoSe Survival Guide
          </h1>

          <img
            src="/svt-logo.png"
            className="w-12 h-12"
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
          Enter at your own risk ◈
        </button>

      </div>


      {/* Footer */}

      <footer className="mt-20 border-t border-white/10 pt-8">

        <div className="flex justify-between text-gray-500">

          <p>SEVENTEEN</p>

          <p>Say the name, SEVENTEEN</p>

          <p>CARAT APPROVED</p>

        </div>

      </footer>

    </main>
  );
}