import React from "react";
import Logo from "./Header/Logo";
import MenuButton from "./Header/HeaderButton";
import Menu from "./Header/Menu";
import Bestsellers from "./Main/Bestsellers";
import About from "./Main/About";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      {}
      <header className="header">
        <MenuButton />
        <Logo />
        <Menu />
      </header>

      {}
      <main className="main">
        {}
        <section className="banner">
          <div className="banner-image"></div>
        </section>

        {}
        <section className="bestsellers">
          <Bestsellers />
        </section>

        {}
        <section className="about">
          <About />
        </section>
      </main>

      {}
      <Footer />
    </div>
  );
}

export default App;
