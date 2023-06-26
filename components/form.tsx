"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button, Form as Fm, Input } from "antd";
export default function Form({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = (values: any) => {
    setLoading(true);
    signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      // @ts-ignore
    }).then(({ error }) => {
      if (error) {
        setLoading(false);
        toast.error(error);
      } else {
        router.refresh();
        router.push("/protected");
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Fm
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Fm.Item
        label="Почта"
        name="email"
        rules={[{ required: true, message: "Введите почту" }]}
      >
        <Input />
      </Fm.Item>

      <Fm.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Введите пароль" }]}
      >
        <Input.Password />
      </Fm.Item>
      <Fm.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Войти
        </Button>
      </Fm.Item>
    </Fm>
  );
}
