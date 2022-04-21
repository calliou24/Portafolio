import styles from "./proto.module.css";
import { useState } from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

function ProjectProto({
  image,
  title,
  description,
  urlSite,
  source,
  technologies,
}) {
  const [like, setLike] = useState(false);
  // const [extended, setExtended] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={styles.card}
    >
      <div className={styles.imageCont}>
        <img
          onClick={() => window.open(urlSite)}
          src={image}
          alt="project image preview"
          className={styles.imagePrev}
        />
        <div
          id={like ? styles.liked : styles.unliked}
          onClick={() => setLike(!like)}
          className={styles.heartIcon}
        >
          <FontAwesomeIcon className={styles.iconHeart} icon={faHeart} />
        </div>
        <div className={styles.sitesCard}>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={source}
            className={styles.siteSource}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.title}>{title}</p>
        <div>
          <ul className={styles.list}>
            {technologies.map((e) => (
              <li key={e} className={styles.item}>
                <span id={e} className={styles.technologiesTag}>
                  # {e.toLowerCase()}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* <div>
          <span
            onClick={() => setExtended(!extended)}
            className={styles.expandDescription}
          >
            Description
            <FontAwesomeIcon
              id={styles.arrow}
              className={extended ? styles.iconUp : undefined}
              icon={faAngleDown}
            />
          </span>
          {extended ? (
            <motion.p
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              className={styles.description}
            >
              {description == "" ? "Not description to show..." : description}
            </motion.p>
          ) : (
            ""
          )}
        </div> */}
      </div>
    </motion.div>
  );
}

export default ProjectProto;
