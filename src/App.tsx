import { createContext, useState } from "react";
import "./main.scss";
import TopBar from "./components/TopBar/TopBar";
import { navItems } from "./content";
import HeroSection from "./components/HeroSection/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";

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
        <TopBar navItems={navItems} />
        <HeroSection />
        <WhyChooseUs />
        <KeyFeatures />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
