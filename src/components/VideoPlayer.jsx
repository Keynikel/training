import { PlayCircle } from 'lucide-react';

function getYouTubeId(url) {
  if (!url) {
    return '';
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      return parsed.pathname.split('/').filter(Boolean)[0] ?? '';
    }

    if (host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')) {
      if (parsed.pathname.startsWith('/watch')) {
        return parsed.searchParams.get('v') ?? '';
      }

      const parts = parsed.pathname.split('/').filter(Boolean);
      const embedIndex = parts.findIndex((part) => part === 'embed' || part === 'shorts');
      if (embedIndex >= 0) {
        return parts[embedIndex + 1] ?? '';
      }
    }
  } catch {
    return '';
  }

  return '';
}

export function getYouTubeEmbedUrl(url) {
  const videoId = getYouTubeId(url);
  return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : '';
}

export default function VideoPlayer({ videoUrl }) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  if (!embedUrl) {
    return (
      <div className="mt-4 flex aspect-video flex-col items-center justify-center rounded-xl border border-dashed border-tan/70 bg-ivory text-center shadow-card">
        <PlayCircle aria-hidden="true" className="h-9 w-9 text-coffee/70" />
        <p className="mt-2 text-sm font-semibold text-space">Add video</p>
        <p className="mt-1 text-xs text-slate">Add YouTube video URL</p>
      </div>
    );
  }

  return (
    <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-space/10 bg-ivory shadow-card">
      <iframe
        className="h-full w-full"
        src={embedUrl}
        title="Activity video"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
