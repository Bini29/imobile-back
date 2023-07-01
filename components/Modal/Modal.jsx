import React, { useState } from "react";
import styles from "./Modal.module.css";
import { ZoomInOutlined, CloseOutlined } from "@ant-design/icons";
import { toJS } from "mobx";
import phone from "../../assets/phone.svg";
import { Image } from "antd";
import { useStore } from "../../store";
const Modal = ({ active, setActive, props }) => {
  const [currentItem, setCurrentItem] = useState(props.variatons[0]);
  const [size, setSize] = useState(currentItem.memory[0]);
  const [visible, setVisible] = useState(false);
  const [numberColor, setNumberColor] = useState(0);
  const [numberSize, setNumberSize] = useState(0);
  const { store } = useStore();
  const credit = () => {
    window.poscreditServices(
      "creditProcess",
      111423,
      {
        order: props.name + " " + currentItem.title,
        products: [
          {
            id: props.id,
            name: props.name + " " + currentItem.title,
            category: "iphone",
            price: Number(size.prise),
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
            src={currentItem.images[0]}
            onClick={() => setVisible(true)}
          />
          <div className={styles.slider}>
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
              {currentItem.images.map((i) => {
                return (
                  <Image
                    preview={{
                      visible: false,
                      mask: <ZoomInOutlined style={{ fontSize: 32 }} />,
                    }}
                    rootClassName={styles.imgwrapperbottom}
                    src={i}
                  />
                );
              })}
            </Image.PreviewGroup>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.titleblock}>
            <h2>{props.name}</h2>
            <span onClick={() => store.show()}>Написать продавцу</span>
          </div>

          <div className={styles.colors}>
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
          </div>
          <span className={styles.prise}>{size.prise} руб</span>
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
};

export default Modal;
