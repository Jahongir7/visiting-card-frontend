// import "../../assets/styles/sixth.css";
import html2canvas from "html2canvas";

const SixthCard = () => {
  const handleImageDownload = async () => {
    const element = document.getElementById("print6"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "visiting-card.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="myContainer">
      <button type="button" className="button" onClick={handleImageDownload}>
        Yuklab olish
      </button>

      <div className="container1" id="print6">
        <div className="header">
          <label for="night" className="night-mode" onclick="enableNight()">
            <i className="fa-solid fa-moon"></i>
          </label>
        </div>
        <section className="left-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5158/5158652.png"
            alt=""
            className="profile-pic"
          />
          <div className="profile-details">
            <span className="profile-maps">
              <i className="fa-solid fa-location-dot"></i> Trento. IT
            </span>
            <p className="profile-name">Simone Bernabe</p>
            <span className="profile-summary">
              Developer, car Enthusiast and Modeller
            </span>
          </div>
          <div className="profile-pils">
            <span className="pils">
              <a href="#">
                <i className="fa-brands fa-twitter"></i> Twitter
              </a>
            </span>
            <span className="pils">
              <a href="#">
                <i className="fa-brands fa-github"></i> Github
              </a>
            </span>
            <span className="pils">
              <a href="#">
                <i className="fa-brands fa-dribbble"></i> Dribble
              </a>
            </span>
            <span className="pils">
              <a href="#">
                <i className="fa-brands fa-linkedin"></i> Linkedin
              </a>
            </span>
          </div>
        </section>
        <div className="front-smooth"></div>
      </div>
    </div>
  );
};

export default SixthCard;
