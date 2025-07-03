import type { TRootState } from "@/store";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
