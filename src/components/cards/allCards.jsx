import { Link } from "react-router-dom";
import CardInfo from "../card-info/cardInfo";
import FirstCard from "./1";
import SecondCard from "./2";
import ThirdCard from "./3";
import FourthCard from "./4";
import FifthCard from "./5";
import SixthCard from "./6";

const AllCards = () => {
  let allData = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <CardInfo />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {localStorage.getItem("data") ? (
          <>
            <FirstCard data={allData} />
            <SecondCard data={allData} />
            <ThirdCard data={allData} />
            <FourthCard data={allData} />
            <FifthCard data={allData} />
            <SixthCard data={allData} />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AllCards;
