import "./LandingPage.scss";
import { motion } from "framer-motion";
import play from "../../assets/images/play-game.svg";
import logo from "../../assets/images/logo.svg";
import { logoVariants } from "../../animations/variants";

function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <div className="top-page">
          <div className="top-logo">
            <motion.img
              src={logo}
              alt="Play Game Logo"
              initial="start"
              animate="end"
              variants={logoVariants}
            />
          </div>

          <div className="top-play">
            <motion.img
              src={play}
              alt="Play Game Logo"
              initial="start"
              animate="end"
              variants={logoVariants}
            />
          </div>
        </div>
        <div className="bottom-page">
          <div className="bottom-start">
            <h1>Starta spel</h1>
          </div>
          <div className="bottom-about">
            <h2>Om spelet</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
