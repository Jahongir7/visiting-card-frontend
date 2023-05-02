import "../../assets/styles/first.css";
import html2canvas from "html2canvas";

const FirstCard = ({ data }) => {
  const handleImageDownload = async () => {
    const element = document.getElementById("print"),
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
      <div className="bc__b" id="print">
        <div className="business-card">
          <div className="bc__logo">
            <figure>
              <i></i>
            </figure>
            <h2>{data.firmName}</h2>
          </div>
          <div className="bc__tagline">
            <p>
              {data.shior || ""}
              <br />
              {data.manzil || ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
