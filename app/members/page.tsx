"use client";
import { useState } from "react";

export default function MembersPage() {

  const [showHelp, setShowHelp] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl text-center font-bold text-[#F7CAC9]">
         🏷️ Meet the Members
      </h1>

      <p className="text-center text-gray-400 mt-4">
        Before entering the chaos, please identify the humans.
      </p>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#91A8D0]">
          Survival Tips for New CARATs
        </h2>

        <p className="text-gray-400 mt-3 italic">
          Read carefully. Your emotional safety is not guaranteed.
        </p>

      </div>

      <div className="mt-10 max-w-3xl mx-auto">
        <div className="rounded-[25px] border border-[#91A8D0]/30 bg-[#11111a] p-6 text-center">
        
          <p className="text-xl font-bold text-[#F7CAC9]">
            💎 Survival Tip #1
          </p>
        
          <p className="mt-4 text-lg">
            Learn names first.
          </p>

         <button
          onClick={() => setShowHelp(!showHelp)}
          className="
          mt-6
          px-6
          py-3
          rounded-full
          bg-[#91A8D0]
          text-black
          font-semibold
          hover:scale-105
          transition
          ">

        Need help? 😭

        </button>

        {showHelp && (
          <div className="mt-6 p-5 rounded-[20px] bg-black/30 border border-[#F7CAC9]/30">
            <p className="font-bold text-[#F7CAC9]">
              ⚠ Beginner Survival Help
            </p>
            
            <p className="mt-4">
              Jeonghan ↔ Joshua 😭
            </p>
            
            <p>
              DK ↔ Wonwoo 😭
            </p>
            
            <p>
              Jun ↔ The8 😭
            </p>

            <p className="italic text-gray-400 mt-4">
              Don't panic. This is a beginner rite of passage.
            </p>

          </div>

        )}

          
        </div>

      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

      {/*Scoups's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🍒
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              S.Coups
            </h2>
            
            <p className="text-gray-400">
              Leader • Hip-Hop Team Leader
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: August 08 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Responsible for managing twelve wonderful humans.
            Success rate still under investigation 🧐
            
            Daily emotional damage expected😭
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              CHOITCHERRY 🐰🍒
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Leader Energy
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Emotional Support Captain
            </span>

          </div>

        </div>

         {/*Jeonghan's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              😇
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Jeonghan
            </h2>
            
            <p className="text-gray-400">
              Vocal Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: October 04 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Looks like an angel.
            Could actually kill you 😭            
          </p>

          <p className="mt-6 text-center">
            #EvilTwin1
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              JJONGTORAM 🐰😇
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Angel Face
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Suspicious Energy
            </span>

          </div>

        </div>

         {/*Joshua's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🦌
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Joshua
            </h2>
            
            <p className="text-gray-400">
              Vocal Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: December 30 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Calm. Gentle. Sweet.
            Hidden chaos may activate unexpectedly 😭
            Never trust him around water.         
          </p>

          <p className="mt-6 text-center">
            #EvilTwin2
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              SHUASUMI 🦌
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Gentleman Mode
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Secret Chaos Energy
            </span>

          </div>

        </div>

        {/*Jun's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🐱
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Jun
            </h2>
            
            <p className="text-gray-400">
              Performance Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: June 10 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Mysterious. Unexpected.
            Nobody truly knows what goes on in his mind 😭            
          </p>

          <p className="mt-6 text-center">
            #ChineLine
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              O.C.L 😺
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              4D Personality
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Mysterious Energy
            </span>

          </div>

        </div>

        {/*Hoshi's Card*/}

         <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🐯
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Hoshi
            </h2>
            
            <p className="text-gray-400">
              Performance Team Leader
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: June 14 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Claims tiger status daily.
            Scientific evidence still under review 😭            
          </p>

          <p className="mt-6 text-center">
            #TigerAgenda
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              TAMTAM 🐯
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Performance Machine
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Tiger Supporter
            </span>

          </div>

        </div>

        {/*Wonwoo's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              👓
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Wonwoo
            </h2>
            
            <p className="text-gray-400">
              Hip-Hop Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: July 17 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Quiet on the outside.
            Internal thoughts remain classified 😭          
          </p>

          <p className="mt-6 text-center">
            #GamingDepartment
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              FOXDUNGEE 🦊👓
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Gamer Energy
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Unexpected Savage
            </span>

          </div>

        </div>

        {/*Woozi's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🍚
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Woozi
            </h2>
            
            <p className="text-gray-400">
              Vocal Team Leader • Producer
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: November 22 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Small in size.
            Massive in musical damage😭            
          </p>

          <p className="mt-6 text-center">
            #ProducerMode
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              PPYOPULI 🍚
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Studio Resident
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Musical Genius
            </span>

          </div>

        </div>

        {/*DK's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
               ⚔️
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Dokyeom/Dk
            </h2>
            
            <p className="text-gray-400">
              Vocal Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: February 18 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Human sunshine detected.
            Volume control still unavailable 😭            
          </p>

          <p className="mt-6 text-center">
            #LoudSinceBirth
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              DOA 🍕
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Sunshine Energy
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Random Singing Mode
            </span>

          </div>

        </div>

        {/*Mingyu's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🐶
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Mingyu
            </h2>
            
            <p className="text-gray-400">
              Hip-Hop Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: April 06 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Can cook. Can clean.
            Still somehow becomes the victim 😭            
          </p>

          <p className="mt-6 text-center">
            #TallButClumsy
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              KIMJA 🥔
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Puppy Energy
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Victim Mode
            </span>

          </div>

        </div>

        {/*The8's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🐸
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              The8
            </h2>
            
            <p className="text-gray-400">
              Performance Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: November 07 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Calm outside.
            Philosophical thoughts may appear unexpectedly 😭            
          </p>

          <p className="mt-6 text-center">
            #ChinaLine
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              THEpalee 🐸
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Art Mode
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Soul Searching
            </span>

          </div>

        </div>

        {/*Seungkwan's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🍊
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Seungkwan
            </h2>
            
            <p className="text-gray-400">
              Vocal Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: January 16 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Human reaction machine detected.
            Silence has never been confirmed 😭            
          </p>

          <p className="mt-6 text-center">
            #VarietyKing
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              BBOOGYULI 🍊
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Reaction Master
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Main Character Energy
            </span>

          </div>

        </div>

        {/*Vernon's Card*/}

         <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🐻‍❄️
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Vernon
            </h2>
            
            <p className="text-gray-400">
              Hip-Hop Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: February 18 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Physically present.
            Mentally buffering somewhere else 😭            
          </p>

          <p className="mt-6 text-center">
            #LoadingThoughts
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              NONVER 👤
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Chill Energy
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Different Dimension
            </span>

          </div>

        </div>

        {/*Dino's Card*/}

        <div className="
          w-full max-w-[360px]
          rounded-[30px]
          p-6
          bg-[#11111a]
          border border-[#F7CAC9]/30
          shadow-[0_0_25px_rgba(247,202,201,0.15)]
        ">
          
          <div className="text-center">
            <div className="text-6xl">
              🦦
            </div>
            
            <h2 className="mt-4 text-4xl font-extrabold">
              Dino
            </h2>
            
            <p className="text-gray-400">
              Performance Team
            </p>
            
            <p className="mt-4 mb-6 text-sm text-[#91A8D0]">
              Birthday: February 11 🎂
            </p>

          </div>

          <p className="mt-6 text-center">
            Youngest member detected.
            Maknae behavior remains optional😭            
          </p>

          <p className="mt-6 text-center">
            #MaknaeOnTopReally??
          </p>

          <div className="mt-6 text-center">
            
            <p className="font-bold text-[#91A8D0]">
              MINITEEN
            </p>

            <p className="mt-2">
              CHANDALEE 🦦
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-3 py-1 rounded-full bg-[#F7CAC9] text-black">
              Future of Kpop
            </span>

            <span className="px-3 py-1 rounded-full bg-[#91A8D0] text-black">
              Maknae Energy
            </span>

          </div>

        </div>


      </div>
      
    </main>
  );
}