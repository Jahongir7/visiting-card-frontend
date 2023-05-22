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
          <div
            className="sub-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <Link to="/all-cards">
              <button className="btn login_btn relative">
                Shablondan foydalanish <b>PRO</b>
              </button>
            </Link>
            <Link to="/main-generator">
              <button className="btn login_btn">Vizitka yasash</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ask;
