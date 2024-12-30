import "react";
import Header from "./1-header/Header";
import Hero from "./2-hero/Hero";
import Main from "./3-main/Main";
import Content from "./4-content/Content";
import Footer from "./5-footer/Footer";
import 'animate.css';


const App = () => {
  return (
    <div className="cotainer black ">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />

      <Content />
      <div className="divider" />

      <Footer />
    </div>
  );
};

export default App;
