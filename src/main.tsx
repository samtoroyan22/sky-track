import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./screens/home/Home";
import "./index.css";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./providers/theme/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import { CenterLayout } from "./components/CenterLayout";
import Main from "./screens/favorites/Main";
import { About } from "./screens/about/About";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route element={<CenterLayout />}>
                <Route path="/favorites" element={<Main />} />
                <Route path="/about" element={<About />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
