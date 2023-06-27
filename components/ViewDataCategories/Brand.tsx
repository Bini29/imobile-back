"use client";

import React, { useState } from "react";
import { Button, message, Popconfirm, Tabs } from "antd";
import { useStore } from "../../store";
import styles from "./styles.module.css";
import { toJS } from "mobx";
import BrandView from "./BrandView";

const Brand = ({
  id,
  title,
  items = [],
}: {
  id: Number;
  title: String;
  items: [];
}) => {
  const { store } = useStore();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  console.log(items);

  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    setConfirmLoading(true);

    fetch("/api/items/category", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-ID": id,
      },
    })
      .then(async (res) => {
        res.json().then(() => {
          setConfirmLoading(false);
          store.setCategories();
          setOpen(false);
        });
      })
      .catch(() => {
        message.error("Произошла ошибка");
      });
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
  };

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div>
      <Popconfirm
        title="Удаление категории"
        description="Все подкатегории и товары удалятся"
        onConfirm={confirm}
        onCancel={cancel}
        open={open}
        okButtonProps={{ loading: confirmLoading }}
        okText="Да"
        cancelText="Нет"
      >
        <Button danger onClick={showPopconfirm}>
          Удалить категорию {title}
        </Button>
      </Popconfirm>
      {items.length > 0 ? (
        <Tabs
          defaultActiveKey="1"
          items={items.map(
            (i: { items: []; id: Number; name: String; img: String }) => {
              console.log(toJS(i));

              return {
                key: i.id,
                label: i.name,
                children: (
                  <BrandView
                    key={i.id}
                    id={i.id}
                    title={i.name}
                    items={items}
                    img={i.img}
                  />
                ),
              };
            }
          )}
          onChange={onChange}
        />
      ) : (
        <div>Создайте подкатегорию</div>
      )}
    </div>
  );
};

export default Brand;
