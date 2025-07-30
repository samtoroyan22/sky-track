import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./screens/home/Home";
import "./index.css";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./providers/theme/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import { Favorites } from "./screens/favorites/Favorites";
import { CenterLayout } from "./components/CenterLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route element={<CenterLayout />}>
                  <Route path="/favorites" element={<Favorites />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
