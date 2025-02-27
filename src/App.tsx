import React from "react";
import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Background />
      <Home />
    </>
  );
};

export default App;
