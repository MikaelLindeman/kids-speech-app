import "./AboutPage.scss";
import useSanityFetch from "../../components/Hooks/useSanityFetch";
import { buttonVariants } from "../../animations/variants";
import { motion } from "framer-motion";

function AboutPage() {
  const query = `*[_type == "about"]{title, description}`;
  const [data, loading, error] = useSanityFetch(query);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="about-page">
      <div className="about-page__text">
        {data.map((entry: any, index: number) => (
          <div key={index}>
            <motion.h1
              className="about-page__title"
              custom={1 * index + 1}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              {entry.title}
            </motion.h1>

            <motion.p
              custom={1 * index + 2}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              {entry.description}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
