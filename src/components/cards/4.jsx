import "../../assets/styles/fourth.css";
import html2canvas from "html2canvas";
const FourthCard = () => {
  const handleImageDownload = async () => {
    const element = document.getElementById("print4"),
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
      <div className="digital-card-component" id="print4">
        <div className="digital-card-container">
          <div className="digital-card">
            <div className="card-content">
              <div className="card-initials-wrapper">
                {/* <div className="card-initials-background" /> */}
                <p className="card-initials">J</p>
                <p className="card-initials">D</p>
              </div>
              <div className="card-name">
                <p>Julius</p>
                <p>Dorfman</p>
                <p className="tagline">Web Developer</p>
              </div>
            </div>
            <div className="line-wrappers">
              <div className="blue-line-flavor"></div>
              <div className="orange-line-flavor"></div>
            </div>
          </div>

          <div className="digital-card-back">
            <div className="line-wrappers-back">
              <div className="blue-line-flavor-back"></div>
              <div className="orange-line-flavor-back"></div>
            </div>
            <ul className="digital-card-back-info">
              <li>e:&nbsp;&nbsp;&nbsp;firstnamelastname@gmail.com</li>{" "}
              <li>p:&nbsp;&nbsp;&nbsp;123-123-1234</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthCard;
