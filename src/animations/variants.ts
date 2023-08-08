export const logoVariants = {
  start: {
    scale: 0.5,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};
