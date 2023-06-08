import { Button } from "primereact/button";
import React, { useState, useRef } from "react";

import { Dialog } from "primereact/dialog";
import html2canvas from "html2canvas";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";
import img7 from "../../img/img7.png";
import img8 from "../../img/img8.png";
import img9 from "../../img/img9.png";
import img10 from "../../img/img10.png";
import img11 from "../../img/img11.png";
import img12 from "../../img/img12.png";
import img13 from "../../img/img13.png";
import img14 from "../../img/img14.png";
import img15 from "../../img/img15.png";
import img16 from "../../img/img16.png";
import img17 from "../../img/img17.png";
import img18 from "../../img/img18.png";
import img19 from "../../img/img19.png";
import img20 from "../../img/img20.png";
import img21 from "../../img/img21.png";
import img22 from "../../img/img22.png";
import img23 from "../../img/img23.png";
import img24 from "../../img/img24.png";
import img25 from "../../img/img25.png";
import img26 from "../../img/img26.png";
import img27 from "../../img/img27.png";
import img28 from "../../img/img28.png";
import img29 from "../../img/img29.png";
import Draggable from "react-draggable";

import "../assets/styles/gen.css";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Icon } from "@iconify/react";
import Header from "./common/navbar";
import Footer from "./common/footer";

function Generator() {
  const [activeBg, setActiveBg] = useState(0);
  const [fontColor, setFontColor] = useState("");
  const [visible, setVisible] = useState(false);
  const [acc, setAcc] = useState(true);
  const uploadBtnRef = useRef(null);
  const logoRef = useRef(null);
  const cardRef = useRef(null);
  const cardRef1 = useRef(null);

  const handleUploadChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        logoRef.current.style.backgroundImage = `url('${reader.result}')`;
      });

      reader.readAsDataURL(files[0]);
    }
  };

  const handleBgClick = (i) => {
    setActiveBg(i);
    cardRef.current.style.backgroundImage = `url('${bgs[i]}')`;
    cardRef1.current.style.backgroundImage = `url('${bgs[i]}')`;
  };

  const handleDownloadClick = () => {
    html2canvas(cardRef.current).then((canvas) => {
      let link = document.getElementById("link");
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  const handleDownloadClick1 = () => {
    html2canvas(cardRef1.current).then((canvas) => {
      let link = document.getElementById("link");
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const bgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
  ];

  return (
    <>
      <Header />
      <div className="gen_g" style={{ paddingTop: "50px" }}>
        <div className="main_g">
          <div className="twoCards">
            <div className="card_g" ref={cardRef}>
              <Draggable>
                <div className="logo" ref={logoRef}></div>
              </Draggable>
              <Draggable>
                <input
                  type="text"
                  style={{ color: fontColor }}
                  className="name"
                  maxlength="30"
                  placeholder="business nomi"
                />
              </Draggable>
              <Draggable>
                <input
                  type="text"
                  style={{ color: fontColor, fontSize: "16px" }}
                  className="slogan"
                  maxlength="70"
                  placeholder="business qisqacha ta'rifi"
                />
              </Draggable>

              <Draggable>
                <input
                  type="text"
                  style={{ color: fontColor }}
                  className="website-link"
                  placeholder="Telefon"
                />
              </Draggable>
              <Draggable>
                <input
                  type="text"
                  style={{ color: fontColor }}
                  className="email"
                  placeholder="telegram"
                />
              </Draggable>
            </div>

            <div className="cardBottomItems">
              <div>
                <label htmlFor="fontColor">Yozuv rangi</label>
                <input
                  id="fontColor"
                  type="color"
                  onChange={(e) => setFontColor(e.target.value)}
                  value="#ffffff"
                />
              </div>
              {localStorage.getItem("auth") !== null ? (
                <button className="download-btn" onClick={handleDownloadClick}>
                  <Icon icon="basil:download-outline" />
                </button>
              ) : (
                <button
                  className="download-btn"
                  onClick={() => setVisible(true)}
                >
                  <Icon icon="basil:download-outline" />
                </button>
              )}
            </div>
            <>
              <div className="card_g" ref={cardRef1}>
                <input
                  type="text"
                  style={{ color: fontColor }}
                  className="name"
                  maxlength="30"
                />
                <input
                  type="text"
                  style={{ color: fontColor, fontSize: "16px" }}
                  className="slogan"
                />

                <input
                  type="text"
                  style={{ color: fontColor }}
                  className="website-link"
                />
                <input
                  type="text"
                  style={{ color: fontColor }}
                  className="website-link"
                />
                <input
                  type="text"
                  style={{ color: fontColor }}
                  className="website-link"
                />
                <input
                  type="text"
                  style={{ color: fontColor }}
                  className="website-link"
                />
              </div>
              <div className="cardBottomItems" style={{ marginBottom: "20px" }}>
                <div>
                  <span style={{ color: "black" }}>Yozuv rangi</span>
                </div>
                {localStorage.getItem("auth") !== null ? (
                  <button
                    className="download-btn"
                    onClick={handleDownloadClick1}
                  >
                    <Icon icon="basil:download-outline" />
                  </button>
                ) : (
                  <button
                    className="download-btn"
                    onClick={() => setVisible(true)}
                  >
                    <Icon icon="basil:download-outline" />
                  </button>
                )}
              </div>
            </>
          </div>
          <div className="setting">
            <input
              type="file"
              id="upload"
              ref={uploadBtnRef}
              onChange={handleUploadChange}
              hidden
            />
            <label
              for="upload"
              class="btn upload"
              style={{ position: "absolute", left: "33%", top: "70px" }}
            >
              Logo joylash
            </label>
            <div className="backgrounds">
              {bgs.map((bg, i) => (
                <img
                  key={i}
                  src={bg}
                  alt={`Background ${i}`}
                  className={activeBg === i ? "active" : ""}
                  onClick={() => handleBgClick(i)}
                />
              ))}
            </div>

            <a id="link" download="card.png" style={{ display: "none" }}></a>
          </div>
        </div>

        <Dialog visible={visible} onHide={() => setVisible(false)}>
          {acc ? <LoginPage /> : <RegisterPage />}
          {acc ? (
            <b
              onClick={() => setAcc(false)}
              style={{ display: "block", marginTop: "10px" }}
            >
              Ro'yhatdan o'tish{" "}
            </b>
          ) : (
            <b
              onClick={() => setAcc(true)}
              style={{ display: "block", marginTop: "10px" }}
            >
              Login
            </b>
          )}
        </Dialog>
      </div>
      <Footer />
    </>
  );
}

export default Generator;
