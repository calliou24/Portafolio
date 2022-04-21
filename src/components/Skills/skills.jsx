import styles from './skills.module.css';
import { CSS, HTML, JavaScript, TypeScript, React, SCSS, GitHub, Git, CreateReactApp, Vite } from './icons/icons';
import { motion } from 'framer-motion';
//soft skills imgs
import assertiveness from '../../assets/images/soft skills/assertiveness.jpg';
import emotionalIntelligence from '../../assets/images/soft skills/emotional-intelligence.jpg';
import mindset from '../../assets/images/soft skills/mindset.png';
import teamPlayer from '../../assets/images/soft skills/team-player.jpg';

import vite from './images/logoVite.svg'

function Skills() {
	const Item = ({ delayNum, child, id, text }) => {
		return (
			<motion.li
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: delayNum }}
				className={styles.item}
				id={id ? id : null}
			>
				{child}
				<p className={styles.skillTitle}>{text}</p>
			</motion.li>
		);
	};
	return (
		<div className={styles.skill}>
			<section className={styles.skillSection}>
				<h2 className={styles.techTitle}>Technical Skills</h2>
				<div className={styles.listsCont}>
					<ul className={styles.list}>
						<Item delayNum={0.2} child={<HTML />} text="HTML" />
						<Item delayNum={0.3} child={<CSS />} text="CSS" />
						<Item delayNum={0.4} child={<JavaScript />} text="JavaScript" />
						<Item delayNum={0.5} child={<TypeScript />} text="TypeScript" />
						<Item delayNum={0.6} child={<img className='vite' src={vite} alt="vite img logo"></img>} text="Vite" />
					</ul>
					<ul className={styles.list}>
						<Item id={styles.reactIcon} delayNum={0.2} child={<React />} text="React" />
						<Item delayNum={0.3} child={<SCSS />} text="SCSS" />
						<Item delayNum={0.4} child={<GitHub />} text="GitHub" />
						<Item delayNum={0.5} child={<Git />} text="Git" />
						<Item delayNum={0.6} child={<CreateReactApp />} text="Create-react-app" />
					</ul>
				</div>
			</section>
			<section className={styles.skillSection}>
				<h2 className={styles.softTitle}>Soft skills</h2>
				<ul className={styles.listSoft}>
					<li className={styles.itemSoftSkills}>
						<p className={styles.itemSoftTitle}>Emotional Intelligence</p>
						<img className={styles.softImage} src={emotionalIntelligence} alt="Emotional intelligence" />
					</li>
					<li className={styles.itemSoftSkills}>
						<p className={styles.itemSoftTitle}>Positive & Proactive Team Player Attitude</p>
						<img className={styles.softImage} src={teamPlayer} alt="Team player" />
					</li>
					<li className={styles.itemSoftSkills}>
						<p className={styles.itemSoftTitle}>Positive Mindset</p>
						<img className={styles.softImage} src={mindset} alt="Mindset" />
					</li>
					<li className={styles.itemSoftSkills}>
						<p className={styles.itemSoftTitle}>Active Assertiveness</p>
						<img className={styles.softImage} src={assertiveness} alt="Assertiveness" />
					</li>
				</ul>
			</section>
		</div>
	);
}

export default Skills;
