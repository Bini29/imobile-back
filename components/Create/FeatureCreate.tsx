import React, { useEffect, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, message } from "antd";

const FeatureCreate = ({ id, setOpen }: any) => {
  const [items, setitems] = useState([]);
  const [form] = Form.useForm();
  const [first, setfirst] = useState("");

  useEffect(() => {
    fetch("/api/items/feature", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-ID": id,
      },
    })
      .then(async (res) => {
        res.json().then((d) => {
          console.log(d);
          setitems(d);
        });
      })
      .catch(() => {
        message.error("Произошла ошибка");
      });
  }, []);

  const onFinish = (values: any) => {
    console.log(values);

    fetch("/api/items/feature", {
      method: "POST",
      body: JSON.stringify({
        ...values,
        itemId: id,
      }),
    }).then((data) => {
      data
        .json()
        .then((d) => {
          message.success(`Успешно создан товар ${d.name}`);
          form.resetFields();
          fetch("/api/items/feature", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-ID": id,
            },
          })
            .then(async (res) => {
              res.json().then((d) => {
                console.log(d);
                setitems(d);
              });
            })
            .catch(() => {
              message.error("Произошла ошибка");
            });
        })
        .catch(() => {
          message.error("Произошла ошибка");
        });
    });
  };

  const remove = (idf) => {
    console.log(idf);
    fetch("/api/items/feature", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-ID": idf,
        "F-ID": id,
      },
    }).then((data) => {
      data
        .json()
        .then((d) => {
          message.success(`Успешно удалено ${d.name}`);
          setitems(d);

          form.resetFields();
        })
        .catch(() => {
          message.error("Произошла ошибка");
        });
    });
  };

  return (
    <div>
      {items.map((i) => {
        return (
          <Space
            key={"Key"}
            style={{
              display: "flex",
              marginBottom: 8,
              justifyContent: "space-around",
              border: "1px solid #ccc",
            }}
            align="baseline"
          >
            <span>Название: {i.name}</span>
            <span>Значение: {i.value}</span>

            <MinusCircleOutlined onClick={() => remove(i.id)} />
          </Space>
        );
      })}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Space
          key={"Key"}
          style={{ display: "flex", marginBottom: 8 }}
          align="baseline"
        >
          <Form.Item
            name="name"
            label="Название"
            rules={[{ required: true, message: "Заполните поле" }]}
          >
            <Input placeholder="Название характеристики" />
          </Form.Item>
          <Form.Item
            name="value"
            label="Значение"
            rules={[{ required: true, message: "Заполните поле" }]}
          >
            <Input placeholder="Значение характеристики" />
          </Form.Item>
        </Space>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FeatureCreate;
