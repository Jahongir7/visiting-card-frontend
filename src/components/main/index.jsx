import { Title, TitleLogo, TitleSm } from "./title";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  AOS.init({
    duration: 3000,
  });
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="Vizitkani" caption="" className="logobg" />
          <h1 className="hero-title" data-aos="fade-up">
            BIZ BILAN YASANG
          </h1>

          <div className="sub-heading">
            <Link to="/login">
              <button className="btn login_btn">Kirish</button>
            </Link>
            <Link to="/register">
              <button className="btn login_btn">Ro'yhatdan o'tish</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
