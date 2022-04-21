import ProfilePic from "./../../assets/images/profile.jpg";
import styles from "./home.module.css";

import { motion } from "framer-motion";

const imageAnimation = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    borderRadius: ["50%", "0%"],
    transition: { duration: 0.5 },
  },
};

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.contentCont}>
        <h1 className={styles.title}>Hi, and Welcome...</h1>
        <p className={styles.text}>
          My name's Alexis Ortega.<br></br>
          I'm Programer - more especially a Web / Front End
          Developer, dedicated to technology, investigate and learn about something new everyday.
        </p>
        <button onClick={()=> document.getElementById('skills').click()} className={styles.moreInfoBtn}>Learn More</button>
      </div>
      <div className={styles.imageCont}>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
          className={styles.image}
          src={ProfilePic}
          alt="Alexis Ortega Front End Developer"
        />
      </div>
    </div>
  );
}

export default Home;
