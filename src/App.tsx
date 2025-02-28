import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
import Home from "./Pages/Home";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCarousel from "./Pages/Product";
import About from "./Pages/About";
import ContactPage from "./Pages/Contact";

interface LandingPageProps {
  showWelcome: boolean;
  setShowWelcome: React.Dispatch<React.SetStateAction<boolean>>;
}

const LandingPage: React.FC<LandingPageProps> = ({
  showWelcome,
  setShowWelcome,
}) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <Background />
          <Home />
          <ProductCarousel />
          <About />
          <ContactPage />
        </>
      )}
    </>
  );
};
const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                showWelcome={showWelcome}
                setShowWelcome={setShowWelcome}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
