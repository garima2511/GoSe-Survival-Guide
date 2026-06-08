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

  const getYoutubeId = (url: string) => {
    try {
      const u = new URL(url);

      // youtu.be/VIDEO_ID
      if (u.hostname.includes("youtu.be")) {
        return u.pathname.slice(1);
      }

      // youtube.com/watch?v=VIDEO_ID
      return u.searchParams.get("v") || "";
    } catch {
      return "";
    }
  };

  const relatedEpisodes = episodes.filter(
    (ep) =>
      ep.series === episode.series &&
      ep.id !== episode.id
  );

  const sameSeriesEpisodes = episodes
    .filter((ep) => ep.series === episode?.series)
    .sort((a, b) => a.order - b.order);

  const currentIndex = sameSeriesEpisodes.findIndex(
    (ep) => ep.id === episode?.id
  );

  const previousEpisode =
    currentIndex > 0 ? sameSeriesEpisodes[currentIndex - 1] : null;

  const nextEpisode =
    currentIndex < sameSeriesEpisodes.length - 1
      ? sameSeriesEpisodes[currentIndex + 1]
      : null;

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

      <div className="max-w-3xl mx-auto overflow-hidden rounded-3xl">
        <img
          src={`https://img.youtube.com/vi/${getYoutubeId(episode.youtube)}/hqdefault.jpg`}
          alt= {episode.title}
          className="
          w-full
          aspect-video
          object-cover
          rounded-3xl
          "
        />
      </div>

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

        <div className="flex gap-3 mt-4 flex-wrap">
          
          <span
            className="
            px-4
            py-2
            rounded-full
            bg-[#F7CAC9]/20
            text-[#F7CAC9]
            text-sm
            "
            >
              📺 {episode.series}
          </span>
          
          <span
            className="
            px-4
            py-2
            rounded-full
            bg-[#91A8D0]/20
            text-[#91A8D0]
            text-sm
            "
            >
            📅 {episode.year}
          </span>

        </div>

        <p className="mt-6 text-gray-300">
          {episode.description}
        </p>

        <p className="mt-6">
          Survival Level: {episode.difficulty}
        </p>

        <div
        className="
        mt-8
        rounded-3xl
        p-6
        bg-[#11111a]/80
        border
        border-[#F7CAC9]/20
        "
        >
          
          <h2 className="text-2xl font-bold text-[#F7CAC9]">
            ⚠ Survival Notes
          </h2>
          
          <p className="mt-4 text-gray-300">
            Enter this mission at your own risk.
            Emotional damage may occur.
          </p>

          <p className="mt-3 text-gray-400 italic">
            {episode.survivalNote}
          </p>

        </div>

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

        <div className="mt-16">

          <h2
            className="
            text-3xl
            font-bold
            text-[#91A8D0]
            "
          >
            Continue Survival Mission
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">

            {relatedEpisodes.map((ep) => (

              <Link
                key={ep.id}
                href={`/episodes/${ep.id}`}
                className="
                px-5
                py-3
                rounded-full
                bg-[#11111a]
                border
                border-[#F7CAC9]/20
                hover:scale-105
                transition
                "
              >
                {ep.emoji} {ep.title}
              </Link>

            ))}

          </div>

        </div>

        <div className="mt-16 flex justify-between gap-4">

          {previousEpisode ? (
          
            <Link
            href={`/episodes/${previousEpisode.id}`}
            className="
            px-5
            py-3
            rounded-full
            bg-[#11111a]
            border
            border-[#91A8D0]/20
            hover:scale-105
            transition
            "
            >
              ← {previousEpisode.title}
            </Link>
          ) : (
        
            <div />
          )}

          {nextEpisode ? (
        
          <Link
            href={`/episodes/${nextEpisode.id}`}
            className="
            px-5
            py-3
            rounded-full
            bg-[#11111a]
            border
            border-[#F7CAC9]/20
            hover:scale-105
            transition
            "
            >
            {nextEpisode.title} →
          </Link>
  
          ) : (
    
            <div />
          )}

        </div>

      </div>

    </main>
  );
}