import React from "react";
import { Carousel } from "antd";
import styles from "./Slider.module.css";
import bunner from "../../assets/bunnerPhone.png";
import bg2 from "../../assets/bunnerbg2.jpg";
import bg3 from "../../assets/bunnerbg3.jpg";
import mbg1 from "../../assets/sl3bunner.png";
import mbg2 from "../../assets/mbg2.jpg";
import mbg3 from "../../assets/mbg3.jpg";
import arrow from "../../assets/Arrow.svg";
import { useStore } from "../../store";
import { isMobile } from "react-device-detect";
import Image from "next/image";
const Slider = () => {
  const { store } = useStore();
  console.log(bg2);
  const scroll = () => {
    const section = document.querySelector("#contact-us");

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <Carousel effect="fade">
      <div className={styles.sliderItem}>
        <h1 className={styles.title}>
          Встречайте новый <br /> <span>Iphone 14</span>
        </h1>
        <div className={styles.bunnerPhone}>
          <Image src={bunner} />
        </div>
      </div>
      <div className={styles.sliderItem}>
        <div
          className={styles.sliderwrapper}
          style={{ backgroundImage: `URL(${isMobile ? mbg2.src : bg2.src})` }}
        >
          <div className="container">
            <h1 className={styles.title2}>
              Огромный <br /> <span>ассортимент</span>
              <br /> товаров
            </h1>
            <button
              onClick={scroll}
              className={styles.aboutBtn}
              style={{ padding: "20px 45px 19px 33px" }}
            >
              Посмотреть <Image src={arrow} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.sliderItem}>
        <div
          className={styles.sliderwrapper}
          style={{ backgroundImage: `URL(${isMobile ? mbg3.src : bg3.src})` }}
        >
          <div className="container">
            <h1 className={styles.title3}>
              Рассрочка <br />и
              <span>
                <b> кредит</b>
              </span>
            </h1>
            <p className={styles.slwrapp}>
              Разделите сумму на части и платите <br /> комфортным для вас
              платежом
            </p>
            {isMobile ? <Image src={mbg1} /> : null}
            <button
              className={styles.aboutBtn}
              style={{ padding: "20px 65px 19px 65px" }}
              onClick={() => store.show()}
            >
              Купить <Image src={arrow} />
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
