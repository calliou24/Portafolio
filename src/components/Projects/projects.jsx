import styles from "./projects.module.css";
import { sitesDate } from "./data";
import ProjectProto from "./Project Proto/proto";

function Projects() {
  return (
    <div>
      <ul className={styles.list}>
        {sitesDate.map(
          ({ id, img, title, description, technologies, site, source }) => (
            <li key={id} className={styles.item}>
              <ProjectProto
                id={id}
                image={img}
                title={title}
                description={description}
                urlSite={site}
                source={source}
                technologies={technologies}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Projects;
