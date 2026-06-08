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
    episode.category.toLowerCase() === selectedGenre.toLowerCase()

  const matchesSearch =
    episode.title
      .toLowerCase()
      .includes(search.toLowerCase());
      
    return matchesGenre && matchesSearch;
  });

  const getYoutubeId = (url: string) => {
    try {
      const u = new URL(url);

      if (u.hostname.includes("youtu.be")) {
        return u.pathname.slice(1);
      }

      return u.searchParams.get("v") || "";
    } catch {
      return "";
    }
  };

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


          <h1 className="text-5xl md:text-6xl text-center font-bold">
            🔎 Explore GoSe Episodes
          </h1>

          <p className="text-center text-gray-400 mt-2">
            Welcome to betrayal, games and embarassment 😸
          </p>

          {/* Genre Section */}

          <section className="mt-6 text-center">
        
          <h2 className="text-3xl font-bold text-[#91A8D0]">
            Choose your chaos type 
          </h2>
        
          <p className="text-gray-400 mt-1 italic">
            Different missions. Different emotional damage.
          </p>

          {/*Genre Tags*/}
        
          <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4 px-6 py-3">
          
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

          <div className="mt-4 flex justify-center relative">
            <div className="absolute left-[calc(50%-190px)] top-1/2 -translate-y-1/2 text-gray-500">
             🔍
            </div>
        
            <input
            type="text"
            placeholder="Search episodes, chaos, TTT..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="
            w-full
            max-w-md
            pl-14 pr-6
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

            {search && (
            <button 
            onClick={() => setSearch("")}
            className="
            absolute
            right-[calc(50%-190px)]
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-[#F7CAC9]
            transition
            "
            >
              ✕
            </button>
            )}

          </div>

          <p className="text-center mt-4 text-gray-400">
            Showing {filteredEpisodes.length} survival missions
          </p>

          <p className="text-center mt-2 text-[#F7CAC9] italic">
            Currently viewing: {selectedGenre}
          </p>

          {filteredEpisodes.length === 0 ? (
        
            <div className="text-center mt-14">
          
            <h2 className="text-3xl text-[#F7CAC9]">
              No survival missions found 😭
            </h2>
          
            <p className="text-gray-400 mt-4">
              Try another keyword or chaos type.
            </p>

            </div>

          ) : (

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {filteredEpisodes.map((episode) => (
          
            <Link
              href={`/episodes/${episode.id}`}
              key={episode.id}
            >
            
            <div
              className="
              group
              rounded-[30px]
              p-6
              bg-[#11111a]/80
              border border-[#91A8D0]/20
              hover:border-[#F7CAC9]
              hover:shadow-[0_0_25px_rgba(247,202,201,0.25)]
              hover:scale-[1.03]
              hover:-translate-y-1
              transition-all
              duration-300  
              ease-out
              "
            >
              <div className="overflow-hidden rounded-2xl">
                
                <img
                  src={`https://img.youtube.com/vi/${getYoutubeId(episode.youtube)}/hqdefault.jpg`}
                  alt={episode.title}
                  className="
                  w-full
                  h-48
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  "
                  />
              </div>

              <div className="text-4xl mt-4">
                {episode.emoji}
              </div>

              <h2 className="mt-4 text-2xl font-bold text-[#F7CAC9]">
                {episode.title}
              </h2>

              <p className="mt-2 text-sm text-[#F7CAC9] italic">
                {episode.episodeNo}
              </p>

              <span
                className="
                inline-block
                mt-3
                px-3
                py-1
                rounded-full
                bg-[#F7CAC9]/20
                text-[#F7CAC9]
                text-xs
                "
                >
                  EP #{episode.id}
              </span>

              <p className="text-[#91A8D0] mt-2">
                {episode.category} • {episode.year}
              </p>

              <p className="mt-4 text-gray-400">
                {episode.description}
              </p>

              <p className="mt-5 text-sm text-[#F7CAC9]">
                Survival Level: {episode.difficulty}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Mission ID: #{episode.id}
              </p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    episode.youtube,
                    "_blank"
                  );
                }}
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
              </button>

            </div>

          </Link>

        ))}

      </div>
    )}
      
    </div>
    </main>
  );
}