import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer>
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
            <div></div>
            <ul>
              <h3>ALOQA</h3>
              <div className="connect">
                <li>
                  <Link to="/">
                    <Icon icon="logos:telegram" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Icon icon="skill-icons:instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Icon icon="devicon:twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Icon icon="logos:whatsapp-icon" />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 BARCHA HUQUQLAR HIMOYALANGAN.</span>
            </div>
            <div className="connect">
              <span> &nbsp; | &nbsp; </span>
              <span>VIZITKA</span>
              <span> &nbsp; | &nbsp; </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
