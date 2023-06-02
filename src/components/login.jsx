import classes from "../assets/styles/login.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const LoginPage = () => {
  AOS.init({
    duration: 300,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [myData, setMyData] = useState({});
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      "https://auth-backend-cyan.vercel.app/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
        localStorage.setItem("auth", 1);
        alert("Muvaffaqiyatli kiridingiz, endi yuklab olishingiz mumkin");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={classes.login_page}>
      <form onSubmit={handleSubmit} data-aos="zoom-in">
        <h2>Kirish</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default LoginPage;
