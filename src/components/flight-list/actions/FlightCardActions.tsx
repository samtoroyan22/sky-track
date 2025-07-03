import { Heart } from "@/components/animate-ui/icons/heart";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { cn } from "@/lib/utils";
import { addFavorite, removeFavorite } from "@/store/favorites/favorites.slice";
import { useCallback } from "react";

interface Props {
  flightId: string;
}

export function FlightCardActions({ flightId }: Props) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const isFavorite = favorites.includes(flightId);

  const handleToggleFavorites = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFavorite(flightId));
    } else {
      dispatch(addFavorite(flightId));
    }
  }, [dispatch, flightId, isFavorite]);

  return (
    <div
      className="flex flex-col gap-2 absolute top-[40%] right-1 z-50 
                origin-top-right scale-0 px-3 opacity-0 transition-all duration-300 
                group-hover:-right-14 group-hover:scale-100 group-hover:opacity-100"
    >
      <Button onClick={handleToggleFavorites} variant="ghost" size="icon">
        <Heart
          className={cn(
            "size-6 transition-colors",
            isFavorite ? "fill-red-500 stroke-red-500" : "fill-none"
          )}
          animateOnHover
        />
      </Button>
    </div>
  );
}
