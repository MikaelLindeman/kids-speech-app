export const logoVariants = {
  start: {
    scale: 0.2,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

export const buttonVariants = {
  hidden: { opacity: 0 },
  visible: (i: any) => ({
    opacity: 1,
    transition: {
      delay: i * 0.5,
    },
  }),
};
