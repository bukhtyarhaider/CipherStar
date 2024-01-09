import { createContext, useState } from "react";
import "./main.scss";
import TopBar from "./components/TopBar/TopBar";
import { navItems } from "./content";
import { gradientTopbar } from "./assets";
import HeroSection from "./components/HeroSection/HeroSection";

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
        <div className="gradientTopbar">
          <img src={gradientTopbar} />
        </div>
        <TopBar navItems={navItems} />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
