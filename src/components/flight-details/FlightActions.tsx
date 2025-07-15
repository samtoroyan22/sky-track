import { MapPin, MoreHorizontal, Route, Share } from "lucide-react";

interface Props {
  onRoute: () => void;
  onFollow: () => void;
  onShare: () => void;
  onMore: () => void;
}

export function FlightActions({ onRoute, onFollow, onShare, onMore }: Props) {
  return (
    <div className="sm:text-sm">
      <div className="grid grid-cols-4 gap-1">
        <button
          onClick={onRoute}
          className="flex flex-col items-center gap-2 bg-details p-mini-element 
          rounded-tl-2xl xs:rounded-tl-xl rounded-bl-2xl xs:rounded-bl-xl transition-colors hover:bg-neutral-800"
        >
          <Route size={22} className="xs:size-5" />
          <span>Route</span>
        </button>
        <button
          onClick={onFollow}
          className="flex flex-col items-center gap-2 bg-details px-mini-element
          py-mini-element transition-colors hover:bg-neutral-800"
        >
          <MapPin size={22} className="xs:size-5" />
          <span>Follow</span>
        </button>
        <button
          onClick={onShare}
          className="flex flex-col items-center gap-2 bg-details px-mini-element
          py-mini-element transition-colors hover:bg-neutral-800"
        >
          <Share size={22} className="xs:size-5" />
          <span>Share</span>
        </button>
        <button
          onClick={onMore}
          className="flex flex-col items-center gap-2 bg-details px-mini-element
          py-mini-element rounded-tr-2xl rounded-br-2xl transition-colors hover:bg-neutral-800"
        >
          <MoreHorizontal size={22} className="xs:size-5" />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}
