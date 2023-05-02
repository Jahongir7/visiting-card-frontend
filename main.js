/*////////////////////////////////////////////////////////////// 
/////////////////// FUNCTIONS DECLARATION //////////////////////
//////////////////////////////////////////////////////////////*/

let formSubmit = (e) => {
    e.preventDefault();
    //alert("test");
    let name = nameForm.value;
    let email = emailForm.value;
    let msg = messageForm.value;
    tksMessage.innerHTML = `${name}, thank you for your message! <br><br> I will get back to ${email}<br><br>Your message details:<br>"${msg}"`
    tksMessage.style.display = "block";
    submit.style.display = "none";
}


let closeHidden = () => {
    mySidenav.style.width = "0px";
}

/*////////////////////////////////////////////////////////////// 
/////////////////// EVENT LISTENERS DECLARATION ////////////////
//////////////////////////////////////////////////////////////*/

imgHidden.addEventListener("click", () => {
    mySidenav.innerHTML = `<span style="color:white; font-size:2em; padding-left: 1em;" onclick="closeHidden()">&times;</span>
    <a href="index.html">Home</a>
    <a href="more.html">More</a>
    <a href="samples.html">Samples</a>
    <a href="generator.html">Generator</a>
    <a href="about.html">About me</a>
    <a href="project.html">Project</a>
    <a href="contact.html">Contact</a>`;
    mySidenav.style.width = "250px";
})

/*//////////////////////////////////////////////////////////////
////////////////////////// SOURCES /////////////////////////////
////////////////////////////////////////////////////////////////

All images were Labeled for reuse and/or downloaded from free sources.

> Logo PBC Generator: created on FreeLogo Design: www.freelogodesign.org

> Background image - wall graffiti: https://freestocktextures.com/texture/wall-graffiti-paint,453.html

> Home page - Hands shaking image: https://cdn.pixabay.com/photo/2017/08/29/08/36/hands-2692451_960_720.jpg

> Project page - Code image: https://pxhere.com/en/photo/1526317

> More page - Holding card image: https://live.staticflickr.com/5011/5526606441_819e233dfe_b.jpg

> Generator page - Color picker image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/RGB_color_wheel_72.svg/1024px-RGB_color_wheel_72.svg.png

> Generator page - Image options:
   - Idea and Geometric images: free download from https://www.flaticon.com
   - Peace and Love image: free download from https://icons8.com

> More page - Business Card information: https://en.m.wikipedia.org/wiki/Business_card
*/


