import React from "react";
import { motion } from "framer-motion";
import play from "../../assets/images/play-game.svg";
import { logoVariants } from "../../animations/variants";

function LandingPage() {
  return (
    <>
      <div className="topper"></div>

      <div className="bottom">
        <motion.img
          src={play}
          alt="Play Game Logo"
          initial="start"
          animate="end"
          variants={logoVariants}
        />
      </div>
    </>
  );
}

export default LandingPage;
