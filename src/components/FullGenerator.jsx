import React, { useState } from "react";
import "../assets/styles/generator.css";
import html2canvas from "html2canvas";
import { Icon } from "@iconify/react";
import Navbar from "./common/navbar";
import Footer from "./common/footer";

function FullGenerator() {
  const [numCards, setNumCards] = useState("");
  const [fullName, setFullName] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [phone, setPhone] = useState("");
  const [imageType, setImageType] = useState("black");
  const [selectedImage, setSelectedImage] = useState(-1);
  const [errorMsg, setErrorMsg] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [myImage, setMyImage] = useState();
  const imageArr = [
    [
      <Icon id="image" icon="ion:bulb" width={58} />,
      <Icon id="image" icon="fa:hand-peace-o" width={58} />,
      <Icon id="image" icon="cib:codesandbox" width="58px" />,
      <Icon id="image" icon="wpf:medical-doctor" width={58} />,
      <Icon
        id="image"
        icon="fluent-emoji-high-contrast:man-mechanic"
        width={58}
      />,
      <Icon id="image" icon="game-icons:teacher" width="58px" />,
    ],
    [
      <Icon id="image" icon="ion:bulb-outline" width={58} />,
      <Icon id="image" icon="fa:hand-peace-o" width={58} />,
      <Icon id="image" icon="cib:codesandbox" width="58px" />,
      <Icon id="image" icon="wpf:medical-doctor" width={58} />,
      <Icon
        id="image"
        icon="fluent-emoji-high-contrast:man-mechanic"
        width={58}
      />,
      <Icon id="image" icon="game-icons:teacher" width="58px" />,
    ],
    [
      <Icon
        id="image"
        icon="ion:bulb-outline"
        width={58}
        style={{ opacity: 0.3 }}
      />,
      <Icon
        id="image"
        icon="fa:hand-peace-o"
        width={58}
        style={{ opacity: 0.3 }}
      />,
      <Icon
        id="image"
        icon="cib:codesandbox"
        width="58px"
        style={{ opacity: 0.3 }}
      />,
      <Icon
        id="image"
        icon="wpf:medical-doctor"
        width={58}
        style={{ opacity: 0.3 }}
      />,
      <Icon
        id="image"
        icon="fluent-emoji-high-contrast:man-mechanic"
        style={{ opacity: 0.3 }}
        width={58}
      />,
      <Icon
        id="image"
        icon="game-icons:teacher"
        width="58px"
        style={{ opacity: 0.3 }}
      />,
    ],
  ];

  const handleImageDownload = async () => {
    const element = document.getElementById("card"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "visiting-card.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "numCards":
        setNumCards(value);
        break;
      case "fullName":
        setFullName(value);
        break;
      case "occupancy":
        setOccupancy(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "linkedin":
        setLinkedin(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleOptionsChange = (event) => {
    const { name, value } = event.target;
    if (name === "bgColor") {
      setBackgroundColor(value);
    } else if (name === "fontColor") {
      setFontColor(value);
    }
  };

  const handleImageTypeChange = (e) => {
    setImageType(e.target.value);
  };

  const handleImageSelection = (imageProps) => {
    // setSelectedImage(index);
    setMyImage(imageProps);
  };

  const handleCardRequest = () => {
    if (
      fullName === "" ||
      occupancy === "" ||
      email === "" ||
      linkedin === "" ||
      phone === ""
    ) {
      setErrorMsg("Please fill out ALL fields");
    } else if (numCards === "" || isNaN(numCards) || numCards === "0") {
      setErrorMsg("Please enter a valid number");
    } else {
      setNumCards(parseInt(numCards));
      setErrorMsg(
        `Your order of ${numCards} cards will be processed. Thank you for your order!`
      );
    }
  };

  const handleStartAgain = () => {
    setNumCards("");
    setFullName("");
    setOccupancy("");
    setEmail("");
    setLinkedin("");
    setPhone("");
    setImageType("black");
    setSelectedImage(-1);
    setErrorMsg("");
  };

  return (
    <div className="f_wra">
      <Navbar />
      <div id="wrapper">
        {/* Data Section */}
        <div className="firstSection">
          <form id="data" autocomplete="off">
            <h4>Barcha maydonlarni to'ldiring:*</h4>
            <label>Ism:</label>
            <br />
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleDataChange}
            />
            <label>Izoh:</label>
            <br />
            <input
              type="text"
              name="occupancy"
              value={occupancy}
              onChange={handleDataChange}
            />
            <label>Email:</label>
            <br />
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleDataChange}
            />
            <label>Telegram:</label>
            <br />
            <input
              type="text"
              name="linkedin"
              value={linkedin}
              onChange={handleDataChange}
            />
            <label>Telefon:</label>
            <br />
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleDataChange}
            />
          </form>
          {/* Options Section */}
          <div className="f_my">
            <div id="optionsLarge">
              <button id="closeOptions" type="button">
                Done
              </button>
              Orqa fon rangi:&nbsp;&nbsp;
              <input
                type="color"
                name="bgColor"
                id="bgColor"
                onChange={handleOptionsChange}
              />
              <br />
              <br />
              Yozuv rangi:&nbsp;&nbsp;
              <input
                type="color"
                name="fontColor"
                id="fontColor"
                onChange={handleOptionsChange}
              />
              <br />
              <br />
              <form id="manageImg" name="colorImg">
                <select value={imageType} onChange={handleImageTypeChange}>
                  <option value="black">Qora</option>
                  <option value="white">Oq</option>
                  <option value="opac">Shaffof</option>
                </select>
              </form>
            </div>
            <div className="f_icons">
              {imageArr[
                imageType === "opac" ? 2 : imageType === "white" ? 1 : 0
              ].map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleImageSelection(image)}
                  className={selectedImage === index ? "active" : ""}
                >
                  {image}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="checkCard">
          <h4>O'zgarishlarni tekshirish:</h4>
          <div
            id="card"
            style={{ backgroundColor: backgroundColor, color: fontColor }}
          >
            <div id="outputName">{fullName}</div>
            {myImage}
            <div id="outputOccupancy" style={{ fontSize: "12px" }}>
              {occupancy}
            </div>
            <br />
            <div id="outputEmail">{email}</div>
            <div id="outputLinkedin">{linkedin}</div>
            <div id="outputPhone">{phone}</div>
          </div>
          <div id="settings">
            <h4>
              Settings:
              <button id="openSettings" type="button">
                <img
                  id="colors"
                  src="img/colorPicker.png"
                  alt="Color picker icon"
                />
              </button>
            </h4>
          </div>
          <div id="errorMsg"></div>
          <button
            type="button"
            className="button"
            onClick={handleImageDownload}
          >
            Yuklab olish
          </button>
          <button id="startAgain" type="button">
            Build a new card
          </button>
          <br />
          <br />
        </div>
        {/* Error Message Section */}
      </div>
      <Footer />
    </div>
  );
}

export default FullGenerator;
