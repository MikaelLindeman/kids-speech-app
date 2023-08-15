import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NavigateButtonProps {
  path: string;
  label: string;
  className?: string;
  variants?: any;
  custom?: number;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({
  path,
  label,
  className,
  variants,
  custom,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(path);
  };

  return (
    <motion.button
      className={className}
      onClick={handleNavigation}
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={variants}
    >
      {label}
    </motion.button>
  );
};
export default NavigateButton;
