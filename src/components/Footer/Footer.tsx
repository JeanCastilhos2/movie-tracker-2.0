import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/jean-castilhos/";
  const githubUrl = "https://github.com/jean-castilhos";
  const emailAddress = "jean.castilhos@example.com"; 

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Desenvolvido por Jean Castilhos</p>
      <div className={styles.iconsContainer}>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <FaLinkedin size={24} />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <FaGithub size={24} />
        </a>
        <a href={`mailto:${emailAddress}`} className={styles.iconLink}>
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
