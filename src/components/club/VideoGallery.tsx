import { useCallback, useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { videos, type ClubVideo } from "@/content/club";
import { Monogram } from "./Monogram";

const AUTOPLAY_MS = 6000;

function embedUrl(video: ClubVideo): string | null {
  if (!video.url) return null;
  try {
    const u = new URL(video.url);
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

const isFileVideo = (v: ClubVideo) =>
  !!v.url && (v.source === "file" || /\.(mp4|webm|mov)(\?|$)/i.test(v.url));

function VideoSlide({
  video,
  index,
  active,
  onActivate,
  registerVideo,
}: {
  video: ClubVideo;
  index: number;
  active: boolean;
  onActivate: () => void;
  registerVideo: (id: string, el: HTMLVideoElement | null) => void;
}) {
  const file = isFileVideo(video);
  const embed = !file ? embedUrl(video) : null;
  const hasVideo = file || !!embed;

  return (
    <figure
      className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} de ${videos.items.length}: ${video.title}`}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-sm border border-ivory/12 bg-ink-soft">
        {video.poster && !active && (
          <img
            src={video.poster}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-85"
          />
        )}
        {!video.poster && !active && (
          <>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink-soft to-ink" />
            <Monogram
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 text-ivory/[0.08]"
            />
          </>
        )}

        {active && file && video.url && (
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
            title={video.title}
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
            aria-label={`Reproduzir: ${video.title}`}
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border border-ivory/50 text-ivory transition-colors group-hover:border-gold group-hover:text-gold">
              <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
            </span>
          </button>
        )}

        {!hasVideo && (
          <span className="absolute inset-x-0 bottom-0 border-t border-ivory/12 bg-ink/75 py-3 text-center text-[0.72rem] tracking-[0.2em] text-ivory/55 uppercase">
            Vídeo em breve
          </span>
        )}
      </div>
      <figcaption className="mt-4 text-center text-[0.95rem] text-ivory/85">{video.title}</figcaption>
    </figure>
  );
}

export function VideoGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const els = useRef<Record<string, HTMLVideoElement | null>>({});
  const track = useRef<HTMLDivElement>(null);
  const items = videos.items;
  const pages = Math.max(1, Math.ceil(items.length / perView));
  const page = Math.min(pages - 1, Math.floor(index / perView));

  const registerVideo = (id: string, el: HTMLVideoElement | null) => {
    els.current[id] = el;
  };

  const goTo = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (!slide) return;
    el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, []);

  const activate = (id: string) => {
    Object.entries(els.current).forEach(([key, el]) => {
      if (key !== id) el?.pause();
    });
    setActiveId(id);
    setPaused(true);
  };

  // índice visível e quantidade por página a partir do scroll
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let raf = 0;
    const measure = () => {
      const first = el.children[0] as HTMLElement | undefined;
      if (first?.offsetWidth) {
        setPerView(Math.max(1, Math.round(el.clientWidth / first.offsetWidth)));
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(el.children) as HTMLElement[];
        const left = el.scrollLeft + el.offsetLeft;
        let best = 0;
        let dist = Infinity;
        children.forEach((c, i) => {
          const d = Math.abs(c.offsetLeft - left);
          if (d < dist) {
            dist = d;
            best = i;
          }
        });
        setIndex(best);
      });
    };
    measure();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!activeId) return;
    const visible = items.slice(index, index + perView).some((v) => v.id === activeId);
    if (!visible) {
      els.current[activeId]?.pause();
      setActiveId(null);
    }
  }, [index, perView, activeId, items]);

  // avanço automático de página em página
  useEffect(() => {
    if (paused || activeId) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const next = ((page + 1) % pages) * perView;
      setIndex(next);
      goTo(next);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, activeId, goTo, page, pages, perView]);

  return (
    <section id="videos" className="bg-ink py-24 text-ivory sm:py-32">
      <div className="shell">
        <p className="eyebrow border-b border-ivory/12 pb-4 text-ivory/45">02 &nbsp;/&nbsp; Vídeos</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:items-end lg:gap-16">
          <div>
            <h2 className="display text-[clamp(2.4rem,5.5vw,4rem)]">
              {videos.title[0]}
              <span className="mt-1 block font-serif text-[1.08em] font-normal italic tracking-tight text-gold normal-case">
                {videos.title[1]}
              </span>
            </h2>
            <p className="mt-6 max-w-[36ch] text-[1.0625rem] leading-relaxed text-ivory/70">{videos.text}</p>
          </div>

          <div
            ref={track}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onPointerDown={() => setPaused(true)}
            aria-roledescription="carrossel"
            aria-label="Vídeos do clube"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((v, i) => (
              <VideoSlide
                key={v.id}
                video={v}
                index={i}
                active={activeId === v.id}
                onActivate={() => activate(v.id)}
                registerVideo={registerVideo}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para o grupo ${i + 1} de vídeos`}
              aria-current={i === page}
              onClick={() => {
                const next = i * perView;
                setIndex(next);
                goTo(next);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === page ? "w-8 bg-gold" : "w-3 bg-ivory/25 hover:bg-ivory/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

