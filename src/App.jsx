import { Route, Routes } from "react-router";
import AllCards from "./components/cards/allCards";
import LoginPage from "./components/login";
import Hero from "./components/main";
import "./styles/main.scss";
import RegisterPage from "./components/register";
import Ask from "./components/ask";
import Generate from "./components/generate";
import Generator from "./components/generator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all-cards" element={<AllCards />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/main-generator" element={<Generator />} />
      </Routes>
    </div>
  );
}

export default App;
