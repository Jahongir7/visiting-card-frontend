import "../../assets/styles/fifth.css";
import html2canvas from "html2canvas";

const FifthCard = () => {
  const handleImageDownload = async () => {
    const element = document.getElementById("print5"),
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
    <div className="myContainer" >
      <button type="button"  className="button" onClick={handleImageDownload}>
        Yuklab olish
      </button>
      <div className="container" id="print5">
        <div className="card card-front">
          <div className="top">
            <img
              src="https://i.postimg.cc/QCxQq9p6/card-logo.png"
              alt="Card Logo"
            />
            <h1>EGATOR</h1>
            <p className="lead">company name</p>
          </div>
          <div className="bottom">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="card card-back">
          <div className="left">
            <div className="top">
              <img
                src="https://i.postimg.cc/QCxQq9p6/card-logo.png"
                alt="Card Logo"
              />
              <h1>egator</h1>
              <p className="lead">company tagline</p>
            </div>
            <div className="middle contact-details">
              <span className="icon">
                <i className="fas fa-globe i"></i>
              </span>
              <span className="content">
                <p>www.egatorr.com</p>
                <p>info@egatorr.com</p>
              </span>
            </div>
            <div className="bttom"></div>
          </div>

          <div className="right">
            <div className="top contact-details">
              <span className="icon">
                <i className="fas fa-phone i"></i>
              </span>
              <span className="content">
                <p>+123-456-789-10</p>
                <p>+123-456-789-10</p>
              </span>
              <span className="icon">
                <i className="fas fa-map-marker-alt i"></i>
              </span>
              <span className="content">
                <p>Your Location Here</p>
                <p>New York Str 123, D890B</p>
              </span>
            </div>
            <div className="middle">
              <h2>john william</h2>
              <p>graphic designer</p>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthCard;
