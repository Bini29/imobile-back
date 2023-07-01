import React, { useState } from "react";
import styles from "./PhoneItem.module.css";
import { toJS } from "mobx";
import Modal from "../Modal/Modal";
import { Image } from "antd";
import { isMobile } from "react-device-detect";

const PhoneItem = ({ props }) => {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const click = (id) => {
    // isMobile ? navigate(`/${id}`) : setActive(true);
    setActive(true);
  };

  // console.log(toJS(props));
  return (
    <>
      <div className={styles.phone} onClick={() => click()}>
        <img src={"/uploads/" + props.img[0]} alt="" />
        <div>
          <span className={styles.title}>{props.name}</span>
          <span className={styles.prise}> {props.prise + " " + "₽"}</span>
          <span className={styles.btn}>Купить</span>
        </div>
      </div>
      <Modal active={active} setActive={setActive} props={props} />
    </>
  );
};

export default PhoneItem;
