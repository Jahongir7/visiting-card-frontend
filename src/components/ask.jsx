import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Ask = () => {
  AOS.init({
    duration: 3000,
  });
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="sub-heading">
            <Link to="/login">
              <button className="btn login_btn">Kirish</button>
            </Link>
            <Link to="/register">
              <button className="btn login_btn">Ro'yhatdan_o'tish</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ask;
