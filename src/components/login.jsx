import { Link } from "react-router-dom";
import classes from "../assets/styles/login.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const LoginPage = () => {
  AOS.init({
    duration: 300,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.login_page}>
      <form onSubmit={handleSubmit} data-aos="zoom-in">
        <h2>Kirish</h2>
        <input type="text" placeholder="Foydalanuvchi ismi" />
        <input type="password" placeholder="Parol" />
        <Link to="/ask">
          <button type="submit">Kirish</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
