"use client";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import logoMob from "../../assets/logomobs.svg";
import styles from "./Header.module.css";
import wats from "../../assets/watsapp.png";
import phone from "../../assets/phone.svg";
import CustomLink from "../CustomLink/CustomLink";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { slide as Menu } from "react-burger-menu";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Spin } from "antd";
import { usePathname } from "next/navigation";

const Header = observer(() => {
  let navigate = usePathname();
  const [open, setOpen] = useState(false);
  const { store } = useStore();
  const isMenuOpen = function (state) {
    setOpen(state.isOpen);
    return state.isOpen;
  };
  const items = store.categories.map((i, index) => {
    return {
      label: (
        <span
          onClick={() => {
            store.setItemsCat(i.list);
            store.setTitle(i.name);
            store.setShowCat(true);
            navigate("/categories");
            scroll();
          }}
        >
          {i.name}
        </span>
      ),
      key: index,
    };
  });

  const scroll = () => {
    const section = document.querySelector("#contact-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/categories");
    }
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navwrapper}>
          <div className={styles.mobLogo}>
            <Link href={"/"}>
              <img src={logoMob} alt="" />
            </Link>
            <div>
              <a href="tel:+79199731997">+7 (919) 973-19-97</a>
              <span>Чебоксары, улица Калинина, 105А</span>
            </div>
          </div>
          <div className={styles.logo}>
            <Link href={"/"}>
              <img src={logo} alt="" />
            </Link>
            <div className={styles.logoDesk}>
              <span className={styles.adress}>
                ТЦ "Мегамолл" <br />
                1-й этаж Магазин <b>"Imobile"</b>
              </span>
              <span className={styles.adressBot}>
                ПН-ВСК с <b> 10-00 до 20-00</b>
              </span>
            </div>
          </div>
          {isMobile ? (
            <Menu
              onStateChange={isMenuOpen}
              isOpen={open}
              right
              htmlClassName={"my-class"}
            >
              <nav className={styles.nav}>
                <CustomLink
                  onClick={() => {
                    setOpen(false);
                    store.setItemsCat([]);
                    store.setTitle("");
                  }}
                  href="/"
                >
                  Каталог
                </CustomLink>
                {/* <ul className={styles.moblilink}>
                  {store.list.length > 0 ? (
                    store.categories.map((i) => {
                      return (
                        <li
                          className={styles.deskli}
                          onClick={() => {
                            store.setItemsCat(i.list);
                            store.setTitle(i.name);
                            store.setShowCat(true);
                            navigate("/categories");
                            setOpen(false);
                            scroll();
                          }}
                        >
                          {i.name}
                        </li>
                      );
                    })
                  ) : (
                    <Spin size="small" />
                  )}
                </ul> */}

                <CustomLink onClick={() => setOpen(false)} href="/about">
                  О компании
                </CustomLink>

                <CustomLink onClick={() => setOpen(false)} href="/garanty">
                  Гарантия и сервис
                </CustomLink>

                <CustomLink onClick={() => setOpen(false)} href="/contacts">
                  Контакты
                </CustomLink>
              </nav>
              <div>
                <div className={styles.logoDesk}>
                  <span className={styles.adress}>
                    ТЦ "Мегамолл" <br />
                    1-й этаж Магазин <b>"Imobile"</b>
                  </span>
                  <span className={styles.adressBot}>
                    ПН-ВСК с <b> 10-00 до 20-00</b>
                  </span>
                </div>
                <div className={styles.about}>
                  <a href="">
                    <img src={wats} alt="" />
                  </a>
                  <button
                    onClick={() => store.show()}
                    className={styles.aboutBtn}
                  >
                    <img src={phone} alt="" /> Заказать звонок
                  </button>
                </div>
              </div>
            </Menu>
          ) : (
            <>
              <nav className={styles.nav}>
                {store.list.length > 0 ? (
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <CustomLink href="/"> Каталог</CustomLink>
                  </Dropdown>
                ) : (
                  <Spin size="large" />
                )}

                <CustomLink href="/about">О компании</CustomLink>

                {/* <CustomLink href="/credits">Кредиты</CustomLink> */}

                <CustomLink href="/garanty">Гарантия и сервис</CustomLink>

                <CustomLink href="/contacts">Контакты</CustomLink>
              </nav>

              <div className={styles.about}>
                <a href="">
                  <img src={wats} alt="" />
                </a>
                <button
                  onClick={() => store.show()}
                  className={styles.aboutBtn}
                >
                  <img src={phone} alt="" /> Заказать звонок
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
