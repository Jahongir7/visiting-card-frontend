import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";
import "../assets/styles/gen.css";

function Generator() {
  const [activeBg, setActiveBg] = useState(0);
  const uploadBtnRef = useRef(null);
  const logoRef = useRef(null);
  const cardRef = useRef(null);

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
  };

  const handleDownloadClick = () => {
    html2canvas(cardRef.current).then((canvas) => {
      let link = document.getElementById("link");
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const bgs = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="gen_g">
      <div className="main_g">
        <div className="card_g" ref={cardRef}>
          <div className="logo" ref={logoRef}></div>
          <input
            type="text"
            className="name"
            maxlength="30"
            placeholder="business nomi"
          />
          <input
            type="text"
            className="slogan"
            maxlength="70"
            placeholder="business qisqacha ta'rifi"
            style={{ fontSize: "16px" }}
          />

          <input type="text" className="website-link" placeholder="Telefon" />
          <input type="text" className="email" placeholder="telegram" />
        </div>
        <div className="setting">
          <input
            type="file"
            id="upload"
            ref={uploadBtnRef}
            onChange={handleUploadChange}
            hidden
          />
          <label for="upload" class="btn upload">
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
          <button className="download-btn" onClick={handleDownloadClick}>
            Download
          </button>

          <a id="link" download="card.png" style={{ display: "none" }}></a>
        </div>
      </div>
    </div>
  );
}

export default Generator;
