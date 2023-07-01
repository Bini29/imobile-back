import React from "react";
import styles from "./Title.module.css";

const Title = ({ text, img }) => {
  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <h1 className={styles.title}>{text}</h1>
      </div>
    </div>
  );
};

export default Title;
