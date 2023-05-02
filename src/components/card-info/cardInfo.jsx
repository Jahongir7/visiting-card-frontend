import { useState } from "react";
import "../../assets/styles/form.css";

const CardInfo = () => {
  const [data, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div className="login-page-container">
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={submit}>
            <div className="f1">
              <input
                type="text"
                onChange={updateData}
                placeholder="firma nomi"
                name="firmName"
              />
              <input
                type="text"
                onChange={updateData}
                name="shior"
                placeholder="shior"
              />
              <input
                type="text"
                onChange={updateData}
                name="telefon"
                placeholder="telefon"
              />
              <input
                type="text"
                onChange={updateData}
                placeholder="manzil"
                name="manzil"
              />
            </div>
            <div className="f1">
              <input
                type="text"
                onChange={updateData}
                placeholder="websayt"
                name="websayt"
              />
              <input
                type="text"
                onChange={updateData}
                placeholder="telegram"
                name="telegram"
              />
              <input
                type="text"
                onChange={updateData}
                placeholder="e-pochta"
                name="pochta"
              />
              <input
                type="text"
                onChange={updateData}
                placeholder="facebook"
                name="facebook"
              />
            </div>
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
