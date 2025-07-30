import aviationService from "@/services/aviation/aviation.service";
import type { IFetchAllByMultipleIcaoParams } from "@/services/aviation/aviation.types";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

export function useFlightsInfor(
  props: IFetchAllByMultipleIcaoParams,
  isEnabled: boolean = true
) {
  const lastUpdateRef = useRef<Date | null>(null);

  const { data, isPending, refetch, isRefetching } = useQuery({
    queryKey: [
      "flights",
      props.flightIcaos,
      props.airline,
      props.fromCountry,
      props.limit,
      props.offset,
    ],
    queryFn: () => aviationService.fetchAllByMultipleIcao(props),
    enabled: isEnabled,
  });

  return {
    data,
    isPending,
    refetch,
    isRefetching,
    lastUpdate: lastUpdateRef.current,
  };
}
