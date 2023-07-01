import React from "react";
import FuterBunner from "../../components/FuterBunner/FuterBunner";
import styles from "./Contacts.module.css";
import Title from "../../components/Title/Title";
import img from "../../assets/bg3.png";
import phonecontacts from "../../assets/phodecontacts.svg";

const page = () => {
  return (
    <div>
      <Title text={"Контакты"} img={img.src} />
      <div className={styles.contact}>
        <div className="container">
          <div className={styles.map}>
            <div className={styles.mapdesk}>
              <span>Адрес магазина</span>
              <p>
                Работаем каждый день пн-сб с 10 до 21 вс с 10 до 20
                <br /> <br />
                <b>
                  Чебоксары ул. Калинина д.105А <br /> ТЦ Мега Молл 1 этаж
                </b>
              </p>
              <a href="tel:+79199731997">
                <img src={phonecontacts.src} alt="" /> +7 (919) 973-19-97
              </a>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A765c354c0ce5e6389bf524537ed43b1de4c3aa4bc0dcb764a2bd6ef70eb9458a&amp;source=constructor"
              width="724"
              height="484"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
      <FuterBunner />
    </div>
  );
};

export default page;
