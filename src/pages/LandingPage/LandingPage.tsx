import "./LandingPage.scss";
import { motion } from "framer-motion";
import play from "../../assets/images/play-game.svg";
import logo from "../../assets/images/logo.svg";
import { buttonVariants, logoVariants } from "../../animations/variants";
import { useNavigate } from "react-router-dom";
import NavigateButton from "../../components/NavigateButton/NavigateButton";

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
        <div className="landing-page__bottom-page">
          <NavigateButton
            path="/about"
            label="Om spelet"
            className="landing-page__bottom-button landing-page__bottom-about"
            custom={1}
            variants={buttonVariants}
          />

          <motion.button
            className="landing-page__bottom-button landing-page__bottom-why"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={buttonVariants}
          >
            Vad är LillaLingo?
          </motion.button>
          <NavigateButton
            path="/contact"
            label="Kontakta oss"
            className="landing-page__bottom-button landing-page__bottom-contact"
            custom={3}
            variants={buttonVariants}
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
