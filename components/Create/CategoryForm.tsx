"use client";

import React from "react";
import { Button, Form, Input, message, Space } from "antd";
import { useStore } from "../../store";

const CategoryForm: React.FC = () => {
  const [form] = Form.useForm();
  const { store } = useStore();

  const onFinish = (values: any) => {
    console.log(values);
    fetch("/api/items/category", {
      method: "POST",
      body: JSON.stringify(values),
    }).then((data) => {
      data
        .json()
        .then((d) => {
          store.setCategories();
          message.success(`Успешно создана категория ${d.name}`);
          form.resetFields();
        })
        .catch(() => {
          message.error("Произошла ошибка");
        });
    });
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="name"
        label="Название категории"
        rules={[{ required: true }, { type: "string", min: 0 }]}
      >
        <Input placeholder="Название категории" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default CategoryForm;
