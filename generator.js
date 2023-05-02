/*///////////////////////////////////////////////////////////////// 
////////////////////// VARIABLES DECLARATION //////////////////////
/////////////////////////////////////////////////////////////////*/

let imageArr = [
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

let userData = {};

/*///////////////////////////////////////////////////////////////// 
///////////////////// FUNCTIONS DECLARATION ///////////////////////
/////////////////////////////////////////////////////////////////*/

let updateObj = () => {
  userData = {
    numCards: parseInt(numCards.value),
    fullName: fullname.value,
    occupancy: occupancy.value,
    email: email.value,
    linkedin: linkedin.value,
    phone: phone.value,
  };
};

let changeImg = () => {
  //debugger;
  if (black.checked) {
    for (let i = 0; i < document.imag.length; i++) {
      if (document.imag[i].checked) {
        //alert("test");
        image.innerHTML = imageArr[0][i];
        image.style.display = "";
      }
    }
  } else if (white.checked) {
    for (let i = 0; i < document.imag.length; i++) {
      if (document.imag[i].checked) {
        image.innerHTML = imageArr[1][i];
        image.style.display = "";
      }
    }
  } else if (opac.checked) {
    for (let i = 0; i < document.imag.length; i++) {
      if (document.imag[i].checked) {
        image.innerHTML = imageArr[2][i];
        image.style.display = "";
      }
    }
  } else {
    image.style.display = "none";
  }
};

/*///////////////////////////////////////////////////////////////// 
/////////////////// EVENT LISTENERS DECLARATION ///////////////////
/////////////////////////////////////////////////////////////////*/

data.addEventListener("change", () => {
  //alert("test");
  updateObj();
  outputName.innerHTML = userData.fullName;
  outputOccupancy.innerHTML = userData.occupancy;
  outputEmail.innerHTML = userData.email;
  outputLinkedin.innerHTML = userData.linkedin;
  outputPhone.innerHTML = userData.phone;
});

optionsLarge.addEventListener("change", () => {
  //debugger;
  card.style.backgroundColor = bgColor.value;
  card.style.color = fontColor.value;
});

manageImg.addEventListener("click", () => {
  changeImg();
});

formImg.addEventListener("change", () => {
  changeImg();
});

startAgain.addEventListener("click", () => {
  location.reload();
});

openSettings.addEventListener("click", () => {
  optionsLarge.style.display = "inline";
});

closeOptions.addEventListener("click", () => {
  optionsLarge.style.display = "none";
});

cardRequest.addEventListener("click", () => {
  //debugger;
  updateObj();
  if (
    userData.fullName === "" ||
    userData.occupancy === "" ||
    userData.email === "" ||
    userData.linkedin === "" ||
    userData.phone === ""
  ) {
    errorMsg.innerHTML = "Plase fill out ALL fields";
  } else if (
    userData.numCards == "" ||
    isNaN(userData.numCards) ||
    userData.numCards == "0"
  ) {
    errorMsg.innerHTML = "Plase enter a valid number";
  } else {
    numCards = parseInt(userData.numCards);
    cardRequest.style.display = "none";
    startAgain.style.display = "inline";
    errorMsg.innerHTML = `Your order of ${userData.numCards} cards will be processed. <br> Thank you for your order!`;
  }
});
