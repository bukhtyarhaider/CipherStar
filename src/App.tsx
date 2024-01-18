import { createContext, useState } from "react";
import "./main.scss";
import TopBar from "./components/TopBar/TopBar";
import { navItems } from "./content";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Router from "./Router";
import Page404 from "./pages/Page404/Page404";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container" id={theme}>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <TopBar navItems={navItems} />
                <Router />
                <Footer />
              </>
            }
          />
           <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
