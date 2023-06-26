import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className="">
        <h3 className="text-xl font-semibold">Авторизироваться</h3>
        <p className="text-sm text-gray-500">Введите email и пароль</p>
      </div>
      <Form type="login" />
    </div>
  );
}
