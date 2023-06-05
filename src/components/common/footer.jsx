import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#058fff30", paddingLeft: "70px" }}>
        <div>
          <div className="grid-4">
            <div className="logo">
              <h1>VisitCard.uz</h1>
              <br />
              <span>
                Agar savol tug'ilsa <br /> Dushanbadan – Jumagacha 09:00 dan
                18:00 gacha murojat qilishingiz mumkin
              </span>
              <br />
              <br />
              <br />
              <button className="button-primary">Konsultatsiya olish</button>
            </div>
            <ul>
              <h4>UMUMIY</h4>
              <li>
                <Link to="/">Biz haqimizda</Link>
              </li>
              <li>
                <Link to="/">Jamoa</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Biz bilan bog'lanish</Link>
              </li>
            </ul>
            <ul>
              <h4>Foydali linklar</h4>
              <li>
                <Link to="/">Photoshop</Link>
              </li>
              <li>
                <Link to="/">MidJourney</Link>
              </li>
              <li>
                <Link to="/">SioAI</Link>
              </li>
            </ul>
            <ul>
              <h4>ALOQA</h4>
              <div className="connect">
                <li>
                  <Link to="/">
                    <Icon icon="logos:telegram" />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 BARCHA HUQUQLAR HIMOYALANGAN.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
