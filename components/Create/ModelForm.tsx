"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Space, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useStore } from "../../store";
import { observer } from "mobx-react";
import { toJS } from "mobx";

const ModelForm: React.FC = observer(() => {
  const [form] = Form.useForm();
  const { store } = useStore();
  const [brand, setbrand] = useState([]);

  const onFinish = (values: any) => {
    console.log(values);

    fetch("/api/items/model", {
      method: "POST",
      body: JSON.stringify(values),
    }).then((data) => {
      data
        .json()
        .then((d) => {
          message.success(`Успешно создана модель ${d.name}`);
          form.resetFields();
          store.setCategories();
          store.setModels();
        })
        .catch(() => {
          message.error("Произошла ошибка");
        });
    });
  };

  const changeBrand = (e) => {
    const items = store.categories.filter((i) => i.id === e);

    setbrand(items[0].items);
  };
  // console.log(toJS(brand[0]));

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="name"
        label="Название модели"
        rules={[{ required: true }, { type: "string", min: 0 }]}
      >
        <Input placeholder="Название модели" />
      </Form.Item>
      <Form.Item label="Название категории" required>
        <Select onChange={changeBrand} style={{ width: "100%" }}>
          {store.categories.map((i: { id: Number; name: String }) => {
            return (
              <Select.Option key={i.id} value={i.id}>
                {i.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      {brand.length > 0 && (
        <Form.Item name="brandId" label="Название производителя" required>
          <Select>
            {brand.map((i: { id: Number; name: String }) => {
              return (
                <Select.Option key={i.id} value={i.id}>
                  {i.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      )}

      <Form.Item name="img" label="Изображение (только 1)" required>
        <Upload
          maxCount={1}
          multiple={false}
          action="/api/upload"
          listType="picture-card"
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Загрузить</div>
          </div>
        </Upload>
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
});

export default ModelForm;
