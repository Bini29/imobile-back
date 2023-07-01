import React, { useState } from "react";
import styles from "./ModalAbout.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { toJS } from "mobx";
import { Input } from "antd";
import { useStore } from "../../store";
import phone from "../../assets/phone.svg";
import { observer } from "mobx-react";

const ModalAbout = observer(() => {
  const { store } = useStore();

  return (
    <div
      className={[styles.modal, store.open && styles.active].join(" ")}
      onClick={() => store.show()}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={() => store.show()}>
          <CloseOutlined style={{ fontSize: 24 }} />
        </button>

        <h3 className={styles.title}>
          <span> Оставьте ваши данные</span> и наши <br /> специалисты вам
          перезвонят
        </h3>
        <div className={styles.form}>
          <Input size="large" type="test" placeholder="Ваше имя" />
          <Input size="large" placeholder="Ваш телефон" />
          <Input size="large" type="email" placeholder="Ваш Email" />
          <button className={styles.aboutBtn}>
            <img src={phone} alt="" /> Заказать звонок
          </button>
          <a href="#" className={styles.pers}>
            Оставляя данные вы соглашаетесь с обработкой <br /> персональных
            данных
          </a>
        </div>
      </div>
    </div>
  );
});

export default ModalAbout;
