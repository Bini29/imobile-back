import React, { useState } from "react";
import styles from "./PhoneItem.module.css";
import { toJS } from "mobx";
import Modal from "../Modal/Modal";
import { Image } from "antd";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const PhoneItem = ({ props }) => {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  let navigate = useNavigate();
  const click = (id) => {
    isMobile ? navigate(`/${id}`) : setActive(true);
  };

  // console.log(toJS(props));
  return (
    <>
      <div className={styles.phone} onClick={() => click(props.id)}>
        <img src={props.mainImage} alt="" />
        <div>
          <span className={styles.title}>{props.name}</span>
          <span className={styles.prise}> От {props.minprise}</span>
          <span className={styles.btn}>Купить</span>
        </div>
      </div>
      <Modal active={active} setActive={setActive} props={props} />
    </>
  );
};

export default PhoneItem;
