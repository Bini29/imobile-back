"use client";
import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Footer.module.css";
import wats from "../../assets/watsapp.png";
import phone from "../../assets/phone.svg";
import CustomLink from "../CustomLink/CustomLink";
import Link from "next/link";
import { useStore } from "../../store";
const Footer = () => {
  const { store } = useStore();
  return (
    <footer className={styles.header}>
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <img src={logo.src} alt="" />
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
          <nav className={styles.navf}>
            <CustomLink to="/" futer>
              Каталог
            </CustomLink>

            <CustomLink to="/about" futer>
              О компании
            </CustomLink>

            {/* <CustomLink to="/credits" futer>
              Кредиты
            </CustomLink> */}

            <CustomLink to="/garanty" futer>
              Гарантия и сервис
            </CustomLink>

            <CustomLink to="/contacts" futer>
              Контакты
            </CustomLink>
          </nav>
          <div className={styles.about}>
            <a href="">
              <img src={wats.src} alt="" />
            </a>
            <button onClick={() => store.show()} className={styles.aboutBtn}>
              <img src={phone.src} alt="" /> Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
