import Link from "next/link";
export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
        <div className="mb-10">
            <Link
                href="/"
                className="
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-full
                bg-[#11111a]
                border border-[#F7CAC9]/40
                hover:scale-105
                hover:border-[#F7CAC9]
                transition
                shadow-[0_0_20px_rgba(247,202,201,0.2)]
                "
            >

                💎 Return to Headquarters

            </Link>

        </div>

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


      <h1 className="text-5xl text-center font-bold">
        🔎 Explore GoSe Episodes
      </h1>

      <p className="text-center text-gray-400 mt-4">
        Welcome to betrayal, games and suspicious behavior 😭
      </p>

    </main>
  );
}