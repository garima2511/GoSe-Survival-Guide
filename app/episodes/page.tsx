"use client";

import Link from "next/link";
import { useState } from "react";
import { episodes } from "../data/episodes";

export default function EpisodesPage() {

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [search, setSearch] = useState("");
  
  const filteredEpisodes = episodes.filter((episode) => {
  const matchesGenre =
    selectedGenre === "All" ||
    episode.category === selectedGenre;

  const matchesSearch =
    episode.title
      .toLowerCase()
      .includes(search.toLowerCase());
      
      return matchesGenre && matchesSearch;
  });

  return (
    <main
    className="
    min-h-screen
    relative
    overflow-hidden
    text-white
    p-10
    bg-gradient-to-br
    from-[#0f1024]
    via-[#15152e]
    to-black
    ">

        {/* Return Button */}

        <div className="mb-10 relative z-10">
            <Link
              href="/"
              className="
              inline-block
              mb-8
              px-5
              py-2
              rounded-full
              bg-[#11111a]
              border
              border-[#F7CAC9]/30
              text-[#F7CAC9]
              hover:scale-105
              hover:bg-[#F7CAC9]
              hover:text-black
              transition
              "
            >
              ← Return to Survival HQ
            </Link>

          </div>

        {/* Background Effects */}
    
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">

      <div className="
        absolute
        top-[100px]
        left-[100px]
        w-[350px]
        h-[350px]
        rounded-full
        bg-[#F7CAC9]/20
        blur-[120px]
      "/>

      <div className="
        absolute
        bottom-[120px]
        right-[80px]
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


      <h1 className="text-5xl text-center font-bold">
        🔎 Explore GoSe Episodes
      </h1>

      <p className="text-center text-gray-400 mt-4">
        Welcome to betrayal, games and suspicious behavior 😭
      </p>

      {/* Genre Section */}

      <section className="mt-16 text-center">
        
        <h2 className="text-3xl font-bold text-[#91A8D0]">
          Choose your chaos type
        </h2>
        
        <p className="text-gray-400 mt-3 italic">
          Different missions. Different emotional damage.
        </p>

        {/*Genre Tags*/}
        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-4">
          
          <button
          onClick={() => setSelectedGenre("All")}
          className="rounded-full p-4 bg-[#11111a] border border-white/20 hover:scale-105 transition"
          >
            ✨ All
          </button>
          
          <button
          onClick={() => setSelectedGenre("Strategy")}
          className="rounded-full p-4 bg-[#11111a] border border-[#F7CAC9]/30 hover:scale-105 transition"
          >
            🧠 Strategy
          </button>
          
          <button
          onClick={() => setSelectedGenre("Chaos")}
          className="rounded-full p-4 bg-[#11111a] border border-red-400/30 hover:scale-105 transition"
          >
            🔥 Chaos
          </button>
          
          <button
          onClick={() => setSelectedGenre("Healing")}
          className="rounded-full p-4 bg-[#11111a] border border-green-400/30 hover:scale-105 transition"
          >
            🌿 Healing
          </button>
          
          <button
          onClick={() => setSelectedGenre("Horror")}
          className="rounded-full p-4 bg-[#11111a] border border-purple-400/30 hover:scale-105 transition"
          >
            👁 Horror
          </button>
          
          <button
          onClick={() => setSelectedGenre("Physical")}
          className="rounded-full p-4 bg-[#11111a] border border-blue-400/30 hover:scale-105 transition"
          >
            ⚡ Physical
          </button>
          
        </div>
        
      </section>

      <div className="mt-10 flex justify-center">
        
        <input
        type="text"
        placeholder="Search episodes..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="
        w-full
        max-w-md
        px-6
        py-3
        rounded-full
        bg-[#11111a]
        border
        border-[#91A8D0]/30
        text-white
        outline-none
        focus:border-[#F7CAC9]
        "
        />

      </div>

      <p className="text-center mt-8 text-gray-400">
        Showing {filteredEpisodes.length} survival missions
      </p>

      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {filteredEpisodes.map((episode) => (
          
          <div
          key={episode.title}
          className="
          rounded-[30px]
          p-6
          bg-[#11111a]/80
          border border-[#91A8D0]/20
          hover:scale-105
          hover:border-[#91A8D0]
          hover:shadow-[0_0_30px_rgba(145,168,208,0.25)]
          transition
          duration-300
          "
          >
            
            <div className="text-5xl">
              {episode.emoji}
            </div>

            <h2 className="mt-4 text-2xl font-bold text-[#F7CAC9]">
              {episode.title}
            </h2>

            <p className="text-[#91A8D0] mt-2">
              {episode.category} • {episode.year}
            </p>

            <p className="mt-4 text-gray-400">
              {episode.description}
            </p>

            <p className="mt-5 text-sm text-[#F7CAC9]">
              Survival Level: {episode.difficulty}
            </p>

            <a
              href={episode.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-block
              mt-5
              px-5
              py-2
              rounded-full
              bg-gradient-to-r
              from-[#F7CAC9]
              to-[#91A8D0]
              text-black
              font-semibold
              hover:scale-105
              transition
              "
              >
                ▶ Watch Episode
            </a>

          </div>

        ))}

      </div>
      
      </div>
    </main>
  );
}