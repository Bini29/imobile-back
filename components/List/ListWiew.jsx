import React, { useState, useEffect } from "react";
import styles from "./List.module.css";
import { useStore } from "../../store";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import PhoneItem from "../PhoneItem/PhoneItem";

const ListWiew = observer(({ item }) => {
  const { store } = useStore();
  const [show, setshow] = useState(false);
  const [showItems, setshowItems] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsPhone, setItemsPhone] = useState([]);
  const [title, setTitle] = useState("");
  const [titleModel, setTitleModel] = useState("");
  const filter = (id) => {
    setItems(store.models.filter((j) => j.brandId === id));
    setshow(true);
  };

  return (
    <>
      <div className={styles.navigation}>
        {show && (
          <>
            <span
              onClick={() => {
                setshow(false);
                setshowItems(false);
              }}
            >
              Вернуться
            </span>{" "}
          </>
        )}
      </div>
      <div className={styles.navPhones}>
        {!show &&
          item.items.map((j) => {
            return (
              <div
                key={j.id}
                className={styles.cardPhoneBtn}
                onClick={() => {
                  filter(j.id);
                  setTitle(j.name);
                }}
              >
                <img src={"/uploads/" + j.img} alt="" />
                <p>{j.name}</p>
              </div>
            );
          })}
      </div>
      <div className={styles.navPhonesList}>
        {show &&
          !showItems &&
          items.map((i) => {
            console.log(show, showItems);
            return (
              <div
                key={i.id}
                className={styles.cardPhoneBtn}
                onClick={() => {
                  setshowItems(true);
                  setItemsPhone(i.items);
                  setTitleModel(i.name);
                }}
              >
                <img src={"/uploads/" + i.img} alt="" />
                <p>{i.name}</p>
              </div>
            );
          })}
      </div>
      <div className={styles.itemList}>
        {showItems &&
          itemsPhone.map((i) => <PhoneItem key={i.name} props={i} />)}
      </div>
    </>
  );
});

export default ListWiew;
