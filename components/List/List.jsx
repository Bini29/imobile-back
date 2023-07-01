import React, { useState, useEffect } from "react";
import styles from "./List.module.css";
import PhoneItem from "../PhoneItem/PhoneItem";
import { useStore } from "../../store";
import { toJS } from "mobx";
import Modal from "../Modal/Modal";
import { observer } from "mobx-react-lite";
import { Spin, Input } from "antd";
import phonesImg from "../../assets/phones.png";
import { useLocation, useNavigate } from "react-router-dom";

const List = observer(() => {
  let navigate = useNavigate();
  let location = useLocation();
  const { store } = useStore();
  const [title, settitle] = useState("");
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);
  console.log(store.categories);

  useEffect(() => {
    console.log(toJS(store.list));
    let a = store.list.map((i) => {
      return i.category;
    });

    let categories = new Set(a);
    console.log(categories);
    let categoriesImg = [...categories].map((i) => {
      let items = store.list.filter((j) => {
        return i === j.category;
      });
      let minPrise = items.sort((a, b) => b.minprise - a.minprise);
      minPrise.reverse();
      console.log(items[0].mainImage);
      return {
        name: i,
        img: items[0].mainImage,
        minprise: minPrise[0].minprise,
        list: items,
      };
    });

    store.setcategories(categoriesImg);
    // setCategories(categoriesImg);
  }, [store.list]);

  // console.log(JSON.stringify(store.list));
  const clear = () => {
    let a = store.list.map((i) => {
      return i.category;
    });

    let categories = new Set(a);
    console.log(categories);
    let categoriesImg = [...categories].map((i) => {
      let items = store.list.filter((j) => {
        return i === j.category;
      });
      let minPrise = items.sort((a, b) => b.minprise - a.minprise);
      minPrise.reverse();
      console.log(items[0].mainImage);
      return {
        name: i,
        img: items[0].mainImage,
        minprise: minPrise[0].minprise,
        list: items,
      };
    });

    store.setcategories(categoriesImg);
  };
  const filtBtn = () => {
    let a = store.list.map((i) => {
      return i.category;
    });
    let categories = new Set(a);

    let categoriesImg = [...categories].map((i) => {
      let items = store.list.filter((j) => {
        return i === j.category;
      });
      let minPrise = items.sort((a, b) => b.minprise - a.minprise);
      minPrise.reverse();
      console.log(items[0].mainImage);
      return {
        name: i,
        img: items[0].mainImage,
        minprise: minPrise[0].minprise,
        list: items,
      };
    });

    let cat = categoriesImg.filter((i) => {
      if (i.minprise > val && i.minprise < val2) {
        return true;
      }
    });
    store.setcategories(cat);
  };
  return (
    <div className={styles.list} id="contact-us">
      <div className="container">
        <h1 className={styles.title}>Смартфоны</h1>
        <div className={styles.navigation}>
          {location.pathname === "/categories" && (
            <span
              onClick={() => {
                navigate("/");
                store.setShowCat(false);
                // setitems([]);
                store.setItemsCat([]);
              }}
            >
              {`Смартфоны`}
            </span>
          )}

          {location.pathname === "/categories" && (
            <span
              style={{ paddingLeft: 5 }}
              onClick={() => {
                store.setShowCat(!store.catshow);
                store.setItemsCat([]);
              }}
            >
              {`/ Apple iPhone`}
            </span>
          )}
          {store.items.length > 0 && (
            <span className={styles.curentspanitem}> {"/ " + store.title}</span>
          )}
        </div>
        <div className={styles.navPhones}>
          {store.list.length > 0 ? (
            location.pathname !== "/categories" ? (
              <div
                className={styles.cardPhoneBtn}
                onClick={() => {
                  navigate("/categories");
                  // store.setShowCat(true);
                }}
              >
                <img src={phonesImg} alt="" />
                <p>Apple iPhone</p>
              </div>
            ) : null
          ) : (
            <div className={styles.spinner}>
              <Spin size="large" style={{ margin: "0 auto" }} />
            </div>
          )}
        </div>
      </div>

      <div className="container">
        {location.pathname === "/categories" && !store.catshow && (
          <div className={styles.filter}>
            <p>Цена:</p>
            <div>
              <Input
                onChange={(e) => setVal(e.target.value)}
                value={val}
                prefix="₽"
                size="large"
                type="number"
                placeholder="От"
              />
              <Input
                onChange={(e) => setVal2(e.target.value)}
                value={val2}
                prefix="₽"
                size="large"
                type="number"
                placeholder="До"
              />
            </div>
            <div>
              <button onClick={filtBtn}>Показать</button>
              <button className={styles.clearbtn} onClick={clear}>
                Сбросить
              </button>
            </div>
          </div>
        )}

        <div className={styles.navPhonesList}>
          {location.pathname === "/categories" &&
            !store.catshow &&
            store.categories?.map((i) => {
              return (
                <div
                  className={styles.cardPhoneBtn}
                  onClick={() => {
                    store.setItemsCat(i.list);
                    store.setShowCat(!store.catshow);
                    store.setTitle(i.name);
                  }}
                >
                  <img src={i.img} alt="" />
                  <p>{i.name}</p>
                </div>
              );
            })}
        </div>
        {/* <h1 className={styles.title}>Популярные модели</h1> */}
        <div className={styles.itemList}>
          {/* {items.length > 0 ? null : <Spin size="large" />} */}
          {store.items.map((i) => (
            <PhoneItem key={i.name} props={i} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default List;
