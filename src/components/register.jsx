import { Link } from "react-router-dom";
import classes from "../assets/styles/login.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const RegisterPage = () => {
  AOS.init({
    duration: 300,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.login_page}>
      <form onSubmit={handleSubmit} data-aos="zoom-in">
        <h2>Ro'yhatdan o'tish</h2>
        <input type="text" placeholder="Foydalanuvchi ismi" />
        <input type="password" placeholder="Parol" />
        <Link to="/dashboard/statistics">
          <button type="submit">Ro'yhatdan o'tish</button>
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
