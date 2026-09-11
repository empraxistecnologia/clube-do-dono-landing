import { whatsappUrl } from "@/content/club";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      className="group fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-[0_14px_34px_-12px_rgba(0,0,0,0.8)] ring-1 ring-gold/60 transition-transform duration-300 hover:scale-105 hover:bg-ink hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-7 sm:bottom-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-gold/30 motion-reduce:hidden" aria-hidden="true" />
      <svg viewBox="0 0 32 32" aria-hidden="true" className="relative h-7 w-7 fill-current">
        <path d="M16.02 3.2c-7.05 0-12.78 5.72-12.78 12.77 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.6-1.73a12.74 12.74 0 0 0 6.22 1.6h.01c7.04 0 12.77-5.73 12.77-12.78 0-3.41-1.33-6.62-3.74-9.03a12.68 12.68 0 0 0-9.04-3.75Zm0 23.28h-.01c-1.86 0-3.69-.5-5.28-1.45l-.38-.22-3.92 1.03 1.05-3.82-.25-.39a10.57 10.57 0 0 1-1.62-5.66c0-5.85 4.77-10.61 10.62-10.61 2.84 0 5.5 1.1 7.5 3.11a10.55 10.55 0 0 1 3.11 7.51c0 5.86-4.76 10.5-10.82 10.5Zm5.83-7.93c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.25-.19.21-.37.24-.68.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.73-.98-2.36-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
