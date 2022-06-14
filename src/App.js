import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

// pages
import Home from './pages/Home';
import About from "./pages/About";
import WebDev from "./pages/WebDev";
import UxUi from "./pages/UxUi";
import Arcade from "./pages/Arcade";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [materielleModal, setMaterielleModal] = useState("dark");

  return (
    <div className="App" id={theme}>
      <ThemeContext.Provider value={{theme, setTheme, materielleModal, setMaterielleModal}}>
        <Home />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/web-development" element={<WebDev />} />
              <Route path="/ux-ui" element={<UxUi />} />
              <Route path="/arcade" element={<Arcade />} />
          </Routes>
        </BrowserRouter> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
