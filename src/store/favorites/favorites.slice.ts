import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const LS_KEY = "favorites";

const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem(LS_KEY);
  if (!favorites) return [];
  try {
    return JSON.parse(favorites);
  } catch (error) {
    return [];
  }
};

const saveFavoritesToLocalStorage = (favorites: string[]) => {
  localStorage.setItem(LS_KEY, JSON.stringify(favorites));
};

const initialState: string[] = getFavoritesFromLocalStorage();

const favoritesSlice = createSlice({
  name: LS_KEY,
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        saveFavoritesToLocalStorage(state);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      const updated = state.filter((id) => id !== action.payload);
      saveFavoritesToLocalStorage(updated);
      return updated;
    },
    clearFavorites: () => {
      localStorage.removeItem(LS_KEY);
      return [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
