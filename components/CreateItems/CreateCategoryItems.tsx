"use client";

import React, { useEffect } from "react";
import { Button, Form, Input, message, Space, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useStore } from "../../store";
import { observer } from "mobx-react";

const CreateCategoryItems: React.FC = observer(() => {
  const [form] = Form.useForm();
  const { store } = useStore();

  const onFinish = (values: any) => {
    console.log(values);

    fetch("/api/items/createcategoryitem", {
      method: "POST",
      body: JSON.stringify(values),
    }).then((data) => {
      data
        .json()
        .then((d) => {
          message.success(`Успешно создана категория ${d.name}`);
          form.resetFields();
          store.setCategories();
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
        label="Название производителя"
        rules={[{ required: true }, { type: "string", min: 0 }]}
      >
        <Input placeholder="Название производителя" />
      </Form.Item>
      <Form.Item name="categoryId" label="Категория" required>
        <Select>
          {store.categories.map((i: { id: Number; name: String }) => {
            return (
              <Select.Option key={i.id} value={i.id}>
                {i.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Upload action="/upload.do" listType="picture-card">
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Загрузить</div>
        </div>
      </Upload>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
});

export default CreateCategoryItems;
