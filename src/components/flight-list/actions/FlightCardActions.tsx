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
      className={cn(
        "flex flex-col gap-2 absolute z-50 transition-all duration-300",
        // Desktop styles
        "top-[40%] right-1 origin-top-left scale-0 opacity-0 group-hover:-right-10 group-hover:scale-100 group-hover:opacity-100",
        // XS (mobile) styles
        "xs:static xs:scale-100 xs:opacity-100 xs:flex-row xs:justify-end xs:mt-2"
      )}
    >
      <Button onClick={handleToggleFavorites} variant="outline" size="icon">
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
