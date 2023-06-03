import React from "react";
import classes from "../../assets/styles/nav.module.css";
import { Button } from "primereact/button";

const Navbar = () => {
  return (
    <div className={classes.nav1}>
      <div></div>
      <Button>Kirish</Button>
    </div>
  );
};

export default Navbar;
