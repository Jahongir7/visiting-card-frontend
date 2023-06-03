import { Route, Routes } from "react-router";
import AllCards from "./components/cards/allCards";
import LoginPage from "./components/login";
import "./styles/main.scss";
import RegisterPage from "./components/register";
import Ask from "./components/ask";
import Generate from "./components/generate";
import Generator from "./components/generator";
import FullGenerator from "./components/FullGenerator";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/" element={<Ask />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all-cards" element={<AllCards />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/main-generator" element={<Generator />} />
        <Route path="/full-generator" element={<FullGenerator />} />
      </Routes>
    </div>
  );
}

export default App;
