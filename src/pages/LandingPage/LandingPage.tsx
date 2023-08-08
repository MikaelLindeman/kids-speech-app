import "./LandingPage.scss";
import { motion } from "framer-motion";
import play from "../../assets/images/play-game.svg";
import logo from "../../assets/images/logo.svg";
import { logoVariants } from "../../animations/variants";

function LandingPage() {
  return (
    <>
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
    </>
  );
}

export default LandingPage;
