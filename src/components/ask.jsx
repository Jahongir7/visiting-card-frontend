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
      <section className="hero" style={{ backdropFilter: "blur(100px)" }}>
        <div className="helloo">
          <div
            className="sub-heading"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "65vh",
            }}
          >
            <Link to="/main-generator">
              <button className="btn login_btn relative">
                Rasmlar orqali vizitka yasash <b>PRO</b>
              </button>
            </Link>
            <Link to="/full-generator">
              <button className="btn login_btn">Oddiy Vizitka yasash</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ask;
