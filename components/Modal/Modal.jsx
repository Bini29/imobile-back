import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { ZoomInOutlined, CloseOutlined } from "@ant-design/icons";
import { toJS } from "mobx";
import phone from "../../assets/phone.svg";
import { Image } from "antd";
import { useStore } from "../../store";
import { observer } from "mobx-react";

const Modal = observer(({ active, setActive, props }) => {
  const [visible, setVisible] = useState(false);
  const [features, setfeatures] = useState([]);
  const { store } = useStore();
  const credit = () => {
    window.poscreditServices(
      "creditProcess",
      111423,
      {
        order: props.name,
        products: [
          {
            id: props.id,
            name: props.name,
            category: props.name,
            price: props.price,
          },
        ],
        creditTermFrom: 6,
        phone: "",
      },
      function (result) {
        if (result.success === false) {
          alert(
            "Произошла ошибка при попытке оформить кредит. Попробуйте позднее..."
          );
        }
      }
    );
  };
  useEffect(() => {
    fetch("/api/items/feature", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-ID": props.id,
      },
    })
      .then(async (res) => {
        res.json().then((d) => {
          setfeatures(d);
        });
      })
      .catch(() => {});
  }, []);
  return (
    <div
      className={[styles.modal, active && styles.active].join(" ")}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={() => {
            setActive(false);
          }}
        >
          <CloseOutlined style={{ fontSize: 24 }} />
        </button>
        <div className={styles.galery}>
          <Image
            preview={{
              visible: false,
              mask: <ZoomInOutlined style={{ fontSize: 32 }} />,
            }}
            rootClassName={styles.imgwrapper}
            width={"100%"}
            src={"/uploads/" + props.img[0]}
            onClick={() => setVisible(true)}
          />
          <div className={styles.slider}>
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              {props.img.map((i) => {
                return (
                  <Image
                    preview={{
                      mask: <ZoomInOutlined style={{ fontSize: 32 }} />,
                    }}
                    rootClassName={styles.imgwrapperbottom}
                    src={"/uploads/" + i}
                  />
                );
              })}
            </Image.PreviewGroup>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.titleblock}>
            <h2>{props.name}</h2>
            {/* <span onClick={() => store.show()}>Написать продавцу</span> */}
          </div>
          <div className={styles.colors}>
            <span>Характеристики:</span>
            <div className={styles.featurelist}>
              {features.map((i) => {
                return (
                  <div>
                    <span>
                      <b>{i.name}</b>
                    </span>
                    <span>{i.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className={styles.colors}>
            <span>Выбор цвета: {currentItem.title}</span>
            <div className={styles.colors_select}>
              {props.variatons.map((i, index) => {
                return (
                  <div className={styles.colorInputWrapper}>
                    <label
                      className={styles.form_control}
                      for={i.color}
                      style={{ backgroundColor: `${i.color}` }}
                    >
                      <input
                        onChange={() => {
                          setCurrentItem(i);
                          setNumberColor(index);
                          setSize(i.memory[0]);
                          setNumberSize(0);
                        }}
                        type="radio"
                        className={styles.colorInput}
                        checked={index === numberColor ? true : false}
                        id={i.color}
                        value={i.color}
                      />
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.colors}>
            <span>Выбор накопителя:</span>
            <div className={styles.colors_select}>
              {currentItem.memory.map((i, index) => {
                if (i.name === "") return null;
                return (
                  <div className={styles.memorywrapper}>
                    <label
                      className={styles.memory_control}
                      for={i.color}
                      style={{ backgroundColor: `${i.color}` }}
                    >
                      <input
                        onChange={() => {
                          setSize(i);
                          setNumberSize(index);
                        }}
                        type="radio"
                        className={styles.memoryInput}
                        id={i.color}
                        checked={index === numberSize ? true : false}
                        value={i.color}
                      />
                      <span className={styles.memory_control_title}>
                        {i.name}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div> */}
          <span className={styles.prise}>{props.prise} руб</span>
          <div className={styles.buttons}>
            <button className={styles.aboutBtn} onClick={() => store.show()}>
              <img src={phone} alt="" /> Заказать товар
            </button>
            <button className={styles.creditBtn} onClick={credit}>
              Купить в кредит
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;
