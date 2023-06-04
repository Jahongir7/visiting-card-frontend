import React, { useState } from "react";
import classes from "../../assets/styles/nav.module.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import LoginPage from "../login";
import RegisterPage from "../register";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [acc, setAcc] = useState(true);

  return (
    <>
      <div className={classes.nav1}>
        <div></div>
        <button onClick={() => setVisible(true)} className={classes.myBtn}>
          Kirish
        </button>
      </div>
      <Dialog visible={visible} onHide={() => setVisible(false)}>
        {acc ? <LoginPage /> : <RegisterPage />}
        {acc ? (
          <b
            onClick={() => setAcc(false)}
            style={{ display: "block", marginTop: "10px" }}
          >
            Ro'yhatdan o'tish{" "}
          </b>
        ) : (
          <b
            onClick={() => setAcc(true)}
            style={{ display: "block", marginTop: "10px" }}
          >
            Login
          </b>
        )}
      </Dialog>
    </>
  );
};

export default Navbar;
