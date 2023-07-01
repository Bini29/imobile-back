import React from "react";
import styles from "./Bunner.module.css";
import bunner from "../../assets/bunnerPhone.png";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";
import Slider from "../Slider/Slider";
const Bunner = () => {
  return (
    <div className={styles.bunner}>
      <Slider />
      <div className={styles.wrapperList}>
        <div className="container">
          <div className={styles.bunnerList}>
            <div className={styles.item}>
              <img src={item1} alt="" />
              <p>
                Гарантия <br />
                <b> 12 месяцев</b>
              </p>
            </div>
            <div className={styles.item}>
              <img src={item2} alt="" />
              <p>
                <b> Аксессуары</b> <br />В подарок
              </p>
            </div>
            <div className={styles.item}>
              <img src={item3} alt="" />
              <p>
                Выгодный <br />
                <b> Кредит</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bunner;
