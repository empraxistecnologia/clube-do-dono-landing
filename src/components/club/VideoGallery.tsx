import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { videos, type ClubVideo } from "@/content/club";
import { Monogram } from "./Monogram";

function embedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v") ?? u.pathname.split("/").pop();
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1` : null;
    }
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed${u.pathname}?autoplay=1&playsinline=1`;
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id ? `https://player.vimeo.com/video/${id}?autoplay=1&playsinline=1` : null;
    }
  } catch {
    return null;
  }
  return null;
}

function VideoCard({
  video,
  active,
  onActivate,
  registerVideo,
}: {
  video: ClubVideo;
  active: boolean;
  onActivate: () => void;
  registerVideo: (id: string, el: HTMLVideoElement | null) => void;
}) {
  const isFile = !!video.url && /\.(mp4|webm|mov)(\?|$)/i.test(video.url);
  const embed = video.url && !isFile ? embedUrl(video.url) : null;
  const hasVideo = isFile || !!embed;

  return (
    <figure className="w-[74vw] shrink-0 snap-center sm:w-[58vw] md:w-auto">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-sm border border-ivory/10 bg-ink-soft">
        {video.poster && !active && (
          <img
            src={video.poster}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        )}
        {!video.poster && !active && (
          <Monogram
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 text-ivory/[0.07]"
          />
        )}

        {active && isFile && video.url && (
          <video
            ref={(el) => registerVideo(video.id, el)}
            src={video.url}
            poster={video.poster ?? undefined}
            controls
            autoPlay
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full bg-black object-cover"
          />
        )}
        {active && embed && (
          <iframe
            src={embed}
            title={video.caption}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        )}

        {!active && hasVideo && (
          <button
            type="button"
            onClick={onActivate}
            className="group absolute inset-0 grid place-items-center"
            aria-label={`Reproduzir: ${video.caption}`}
          >
            <span className="grid h-14 w-14 place-items-center rounded-full border border-ivory/50 text-ivory transition-colors group-hover:border-gold group-hover:text-gold">
              <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
            </span>
          </button>
        )}

        {!hasVideo && (
          <span className="absolute inset-x-0 bottom-0 border-t border-ivory/10 bg-ink/70 py-3 text-center text-[0.7rem] tracking-[0.2em] text-ivory/50 uppercase">
            Vídeo em breve
          </span>
        )}
      </div>
      <figcaption className="mt-4 text-center text-[0.82rem] text-ivory/80">{video.caption}</figcaption>
    </figure>
  );
}

export function VideoGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const els = useRef<Record<string, HTMLVideoElement | null>>({});
  const track = useRef<HTMLDivElement>(null);

  const registerVideo = (id: string, el: HTMLVideoElement | null) => {
    els.current[id] = el;
  };

  const activate = (id: string) => {
    Object.entries(els.current).forEach(([key, el]) => {
      if (key !== id) el?.pause();
    });
    setActiveId(id);
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="videos" className="bg-ink py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="eyebrow text-ivory/40">02 &nbsp;/&nbsp; Vídeos</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.6fr] lg:items-end lg:gap-14">
          <div>
            <h2 className="display text-[clamp(2.1rem,6.5vw,3.4rem)]">
              {videos.title[0]}
              <span className="mt-1 block font-serif text-[1.05em] font-normal italic tracking-tight text-gold normal-case">
                {videos.title[1]}
              </span>
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">{videos.text}</p>
          </div>

          <div
            ref={track}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:gap-5 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0"
          >
            {videos.items.map((v) => (
              <VideoCard
                key={v.id}
                video={v}
                active={activeId === v.id}
                onActivate={() => activate(v.id)}
                registerVideo={registerVideo}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2 md:hidden">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Vídeo anterior"
            className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory/70"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Próximo vídeo"
            className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory/70"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
