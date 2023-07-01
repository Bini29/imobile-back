import React from "react";
import styles from "./FuterBunner.module.css";
import logo from "../../assets/logo.svg";
import img from "../../assets/futerbunner.png";

const FuterBunner = () => {
  return (
    <div className={styles.bunner}>
      <div className="container">
        <div className={styles.bunnerWrapper}>
          <div className={styles.desk}>
            <img src={logo} alt="" width="321" />
            <p>
              Нам интересно то что мы делаем, поэтому мы находимся в курсе
              текущих тенденций бизнеса и рынка, в итоге каждый довольный
              Покупатель гордость для любого работника компании.
            </p>
          </div>
          <img className={styles.img} src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FuterBunner;
