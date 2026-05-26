import Link from "next/link";
import { episodes } from "../../data/episodes";

export default async function EpisodeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const episode = episodes.find(
    (ep) => ep.id === Number(id)
  );

  if (!episode) {
    return (
      <main className="min-h-screen bg-black text-white p-10">

        <h1 className="text-4xl">
          Episode not found 😭
        </h1>

        <Link
          href="/episodes"
          className="text-[#F7CAC9]"
        >
          ← Return to Episodes
        </Link>

      </main>
    );
  }

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#0f1024]
      via-[#15152e]
      to-black
      text-white
      p-8
      "
    >

      <Link
        href="/episodes"
        className="inline-block mb-10 text-[#F7CAC9]"
      >
        ← Back to Archive
      </Link>

      <img
        src={`https://img.youtube.com/vi/${episode.videoId}/hqdefault.jpg`}
        alt={episode.title}
        className="
        w-full
        max-w-3xl
        rounded-[30px]
        mx-auto
        "
      />

      <div className="max-w-3xl mx-auto mt-10">

        <div className="text-6xl">
          {episode.emoji}
        </div>

        <h1 className="text-5xl font-bold mt-5">
          {episode.title}
        </h1>

        <p className="mt-3 text-[#91A8D0]">
          {episode.episodeNo}
        </p>

        <p className="mt-3 text-[#F7CAC9]">
          {episode.season}
        </p>

        <p className="mt-6 text-gray-300">
          {episode.description}
        </p>

        <p className="mt-6">
          Survival Level: {episode.difficulty}
        </p>

        <div className="flex gap-3 flex-wrap mt-8">

          {episode.tags.map((tag) => (

            <span
              key={tag}
              className="
              px-4
              py-2
              rounded-full
              bg-[#11111a]
              border
              border-[#F7CAC9]/20
              "
            >
              #{tag}
            </span>

          ))}

        </div>

      </div>

    </main>
  );
}