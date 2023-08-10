import "./LandingPage.scss";
import { motion } from "framer-motion";
import play from "../../assets/images/play-game.svg";
import logo from "../../assets/images/logo.svg";
import { logoVariants } from "../../animations/variants";

function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <div className="landing-page__top">
          <div className="landing-page__logo">
            <motion.img
              src={logo}
              alt="Lillalingo logo"
              initial="start"
              animate="end"
              variants={logoVariants}
            />
          </div>

          <div className="landing-page__play-button">
            <motion.img
              src={play}
              alt="Start game button"
              initial="start"
              animate="end"
              variants={logoVariants}
            />
          </div>
        </div>
        <div className="bottom-page">
          <div className="bottom-start">
            <h1>Om spelet</h1>
          </div>
          <div className="bottom-about">
            <h4>Varför LillaLingo?</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
