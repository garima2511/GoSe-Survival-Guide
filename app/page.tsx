import Link from "next/link";
export default function Home() {
  return (
    <main
      className="
      min-h-screen
      relative
      overflow-hidden
      text-white
      p-8
      bg-gradient-to-br
      from-[#0f1024]
      via-[#15152e]
      to-black
    ">

    {/* Background Effects */}
    
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">

      <div className="
        absolute
        top-[-100px]
        left-[-100px]
        w-[350px]
        h-[350px]
        rounded-full
        bg-[#F7CAC9]/20
        blur-[120px]
      "/>

      <div className="
        absolute
        bottom-[-120px]
        right-[-80px]
        w-[400px]
        h-[400px]
        rounded-full
        bg-[#91A8D0]/20
        blur-[120px]
      "/>

      <div className="
        absolute
        top-[40%]
        left-[45%]
        w-[250px]
        h-[250px]
        rounded-full
        bg-purple-500/10
        blur-[100px]
      "/>

      <div className="absolute top-20 left-10 text-5xl opacity-10">
        💎
      </div>

      <div className="absolute top-[25%] right-[10%] text-6xl opacity-10">
        🍒
      </div>

      <div className="absolute bottom-[25%] left-[15%] text-6xl opacity-10">
        🐯
      </div>

      <div className="absolute bottom-20 right-[20%] text-5xl opacity-10">
        🍊
      </div>

      <div className="absolute top-[70%] left-[50%] text-5xl opacity-10">
        💎
      </div>

    </div>

    <div className="relative z-10">

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
        ">
          Enter at your own risk 💎
        </button>

      </div>

      <section className="mt-20 text-center">
        
        <div className="relative inline-block">
          
          <h2 className="text-4xl font-bold text-[#91A8D0] relative z-10">
            Choose your survival path
          </h2>
          
          <div
          className="
          absolute
          inset-x-0
          -bottom-2
          h-6
          bg-[#91A8D0]/20
          blur-xl
          rounded-full
          "
          />

        </div>

        <p className="text-gray-400 mt-3">
          New fan? Veteran Carat? Choose wisely🧙🔮🥕.
        </p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/*Members Card*/}
          <Link
            href="/members"
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            p-6
            min-h-[260px]
            flex
            flex-col
            justify-center
            items-center
            text-center
            bg-[#11111a]/80
            border border-[#F7CAC9]/30
            backdrop-blur-md
            shadow-[0_0_25px_rgba(247,202,201,0.15)]

            hover:scale-105
            hover:-translate-y-2
            hover:border-[#F7CAC9]

            transition-all
            duration-500
            "
          >

            <div  
            className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
            bg-gradient-to-br
            from-white/5
            to-transparent  
            "/>
          
            <div className="text-5xl mb-4">🏷️</div>

            <h3 className="text-2xl font-bold text-[#F7CAC9]">
              Meet the Members
            </h3>

            <p className="mt-3 text-gray-400">
              Learn the thirteen humans before chaos begins.
            </p>

            <p className="mt-5 text-sm opacity-70">
              Difficulty: ★☆☆
            </p>

            <p
            className="
            mt-5
            text-xs
            text-[#F7CAC9]
            opacity-0
            translate-y-2
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-500
            italic
            "
          >
            ⚠ Warning: Names may take 3-5 business days to memorize.
          </p>

          </Link>

          {/*Episodes Card*/}

          <Link
            href="/episodes"
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            p-6
            min-h-[260px]
            flex
            flex-col
            justify-center
            items-center
            text-center
            bg-[#11111a]/80
            border border-[#F7CAC9]/30
            backdrop-blur-md
            shadow-[0_0_25px_rgba(247,202,201,0.15)]

            hover:scale-105
            hover:-translate-y-2
            hover:border-[#F7CAC9]

            transition-all
            duration-500
            " 
          >
            <div  
            className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
            bg-gradient-to-br
            from-white/5
            to-transparent  
            "/>

            <div className="text-5xl mb-4">🔎</div>

            <h3 className="text-2xl font-bold text-[#91A8D0]">
              Explore GoSe
            </h3>

            <p className="mt-3 text-gray-400">
              Enter variety chaos at your own risk.
            </p>

            <p className="mt-5 text-sm opacity-70">
              Difficulty: ★★★
            </p>

            <p
            className="
            mt-5
            text-xs
            text-[#91A8D0]
            opacity-0
            translate-y-2
            group-hover:opacity-100 
            group-hover:translate-y-0
            transition-all
            duration-500
            italic
            "
          >
            ⚠ Side effect: You may accidentally watch 47 episodes in a day.
          </p>

          </Link>

          {/*Chaos Zone*/}

          <Link
            href="/chaos-zone"
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            p-6
            min-h-[260px]
            flex
            flex-col
            justify-center
            items-center
            text-center
            bg-[#11111a]/80
            border border-[#F7CAC9]/30
            backdrop-blur-md
            shadow-[0_0_25px_rgba(247,202,201,0.15)]

            hover:scale-105
            hover:-translate-y-2
            hover:border-[#F7CAC9]

            transition-all
            duration-500
            "
          >

            <div  
            className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
            bg-gradient-to-br
            from-white/5
            to-transparent  
            "/>

            <div className="text-5xl mb-4">💥</div>

            <h3 className="text-2xl font-bold text-purple-300">
              Chaos Zone
            </h3>

            <p className="mt-3 text-gray-400">
              Survival probability unknown.
            </p>

            <p className="mt-5 text-sm opacity-70">
              Difficulty: ☠️☠️☠️
            </p>

            <p
            className="
            mt-5
            text-xs
            text-purple-300
            opacity-0
            translate-y-2
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-500
            italic
            "
          >
            ☠ Last known survivors: none confirmed.
          </p>

          </Link>

          {/*Music Card*/}

          <Link
            href="/music"
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            p-6
            min-h-[260px]
            flex
            flex-col
            justify-center
            items-center
            text-center
            bg-[#11111a]/80
            border border-[#F7CAC9]/30
            backdrop-blur-md
            shadow-[0_0_25px_rgba(247,202,201,0.15)]

            hover:scale-105
            hover:-translate-y-2
            hover:border-[#F7CAC9]

            transition-all
            duration-500
            "
          >

            <div  
            className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
            bg-gradient-to-br
            from-white/5
            to-transparent  
            "/>

            <div className="text-5xl mb-4">🎵</div>

            <h3 className="text-2xl font-bold text-purple-300">
              Music Survival Guide
            </h3>

            <p className="mt-3 text-gray-400">
              New CARAT? Start emotional damage here.
            </p>

            <p className="mt-5 text-sm opacity-70">
              Difficulty: 💗💗💗
            </p>

            <p
            className="
            mt-5
            text-xs
            text-purple-300
            opacity-0
            translate-y-2
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-500
            italic
            "
          >
            ⚠ You may suddenly develop 17 favorite songs.
          </p>

          </Link>


        </div>

      </section>

      {/* Footer */}

      <footer className="mt-20 border-t border-white/10 pt-8">

        <div className="flex flex-col md:flex-row gap-3 text-center md:text-left justify-between text-gray-500">

          <p>SEVENTEEN</p>

          <p>Say the name, SEVENTEEN</p>

          <p>MISS NEUPANE APPROVED</p>

        </div>

      </footer>
    </div>
    </main>
  );
}