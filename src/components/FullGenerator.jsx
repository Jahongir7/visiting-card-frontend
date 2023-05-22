import React, { useState } from "react";
import "../assets/styles/generator.css";
import html2canvas from "html2canvas";

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
  const [myImage, setMyImage] = useState("");
  const imageArr = [
    [
      '<img src="./img/light-bulb_black.png" alt="Black light-bulb" " width="58px">',
      '<img src="./img/peace_black.png" alt="Black peace signal" width="58px">',
      '<img src="./img/cube_black.png" alt="Black cube" width="58px">',
    ],
    [
      '<img src="./img/light-bulb.png" alt="White light-bulb" width="58px">',
      '<img src="./img/peace.png" alt="White peace signal" width="58px">',
      '<img src="./img/cube.png" alt="White cube" width="58px">',
    ],
    [
      '<img src="./img/light-bulb.png" alt="White light-bulb with opacity of 0.3" width="58px" style="opacity: 0.3">',
      '<img src="./img/peace.png" alt="White peace signal with opacity of 0.3" width="58px" style="opacity: 0.3">',
      '<img src="./img/cube.png" alt="White cube with opacity of 0.3" width="58px" style="opacity: 0.3">',
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
    <div id="wrapper">
      {/* Data Section */}
      <form id="data" autocomplete="off">
        <h4>All fields required:*</h4>
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
      <div id="optionsLarge">
        <button id="closeOptions" type="button">
          Done
        </button>
        Background Color:&nbsp;&nbsp;
        <input
          type="color"
          name="bgColor"
          id="bgColor"
          onChange={handleOptionsChange}
        />
        <br />
        <br />
        Font Color:&nbsp;&nbsp;
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
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="opac">Opacity</option>
          </select>
        </form>
      </div>
      <div>
        {imageArr[imageType === "opac" ? 2 : imageType === "white" ? 1 : 0].map(
          (image, index) => (
            <div
              key={index}
              onClick={() => handleImageSelection(image)}
              className={selectedImage === index ? "active" : ""}
            >
              <div dangerouslySetInnerHTML={{ __html: image }} />
            </div>
          )
        )}
      </div>
      <div className="checkCard">
        <h4>Check your business card here:</h4>
        <div
          id="card"
          style={{ backgroundColor: backgroundColor, color: fontColor }}
        >
          <div id="outputName">{fullName}</div>
          <div dangerouslySetInnerHTML={{ __html: myImage }} id="image" />
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
        <button type="button" className="button" onClick={handleImageDownload}>
          Yuklab olish
        </button>
        <button id="startAgain" type="button">
          Build a new card
        </button>
        <br />
        <br />
      </div>
      {/* Buttons Section */}
      <button onClick={handleCardRequest}>Card Request</button>
      <button onClick={handleStartAgain}>Start Again</button>

      {/* Error Message Section */}
      <div>{errorMsg}</div>
    </div>
  );
}

export default FullGenerator;