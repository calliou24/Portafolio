import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./nav.module.css";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import ProfilePic from "./../../assets/images/heroProfileImg.jpg";
function Nav() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const Link = ({ to, title }) => (
    <NavLink
      onClick={() => setOpen(false)}
      id={title.toLowerCase()}
      className={styles.navLink}
      to={to}
    >
      {title}
    </NavLink>
  );

  useEffect(() => {
    const body = document.body;

    if (dark) {
      body.classList.add("dark");
    } else {
      body.removeAttribute("class");
    }
  }, [dark]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navMask}>
        <div
          className={styles.logo}
          onClick={() => document.getElementById("home").click()}
        >
          <img
            className={styles.image}
            src={ProfilePic}
            alt="Alexis Ortega Front End Developer"
          />
          <span
            onMouseEnter={() => setVisibleModal(true)}
            onMouseLeave={() => setVisibleModal(false)}
            className={styles.logoText}
          >
            Alexis
          </span>
          <div
            id={visibleModal ? styles.visibleModal : styles.invisibleModal}
            className={styles.hoverModal}
          >
            {" "}
            Alexis Ortega{" "}
          </div>
        </div>
        <div className={styles.menuCont}>
          <ul
            id={open ? styles.menuOpen : styles.menuClosed}
            className={styles.list}
          >
            <li className={styles.item}>
              <Link to="Portafolio/" title="Home" />
            </li>
            <li className={styles.item}>
              <Link to="skills" title="Skills" />
            </li>
            <li className={styles.item}>
              <Link to="projects" title="Projects" />
            </li>
            <li className={styles.item}>
              <div className={styles.contact}>
                <a
                  onClick={() => setOpen(false)}
                  rel="noopener noreferrer nofollow"
                  className={styles.link}
                  href="https://www.instagram.com/alexisortegareyee/"
                  target="_blank"
                >
                  <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                </a>
                <a
                  onClick={() => setOpen(false)}
                  rel="noopener noreferrer nofollow"
                  className={styles.link}
                  href="https://github.com/calliou24"
                  target="_blank"
                >
                  <FontAwesomeIcon className={styles.icon} icon={faGithub} />
                </a>
              </div>
            </li>
          </ul>

          <div onClick={() => setDark(!dark)} className={styles.changeTheme}>
            <div className={styles.iconCont}>
              {dark ? <MoonIcon /> : <SunIcon />}
            </div>
          </div>
          <div onClick={() => setOpen(!open)} className={styles.hamburger}>
            <div
              id={open ? styles.bar1 : undefined}
              className={styles.bar}
            ></div>
            <div
              id={open ? styles.bar2 : undefined}
              className={styles.bar}
            ></div>
            <div
              id={open ? styles.bar3 : undefined}
              className={styles.bar}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
