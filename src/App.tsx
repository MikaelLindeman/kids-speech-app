import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import GamePage from "./pages/GamePage/GamePage";
import ResultPage from "./pages/ResultPage/ResultPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/game" Component={GamePage} />
          <Route path="/result" Component={ResultPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
