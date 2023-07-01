import { Button, Popconfirm, message, Card, Tabs } from "antd";
import { toJS } from "mobx";
import React, { FC, useEffect, useState } from "react";
import { useStore } from "store";
import styles from "./styles.module.css";
import ModelView from "./ModelView";
import { observer } from "mobx-react";

const BrandView = observer(
  ({
    id,
    title,
    items,
    img,
  }: {
    id: Number;
    title: String;
    img: String;
    items: [];
  }) => {
    const { store } = useStore();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showPopconfirm = () => {
      setOpen(true);
    };

    const confirm = (e: React.MouseEvent<HTMLElement>) => {
      setConfirmLoading(true);

      fetch("/api/items/brand", {
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

    if (title.length === 0) {
      return <div>Нету производителя</div>;
    }
    return (
      <div>
        <div className={styles.btnimgcard}>
          <img src={"/uploads/" + img} alt="" width={100} />

          {items.length === 0 && (
            <Popconfirm
              title="Удаление производителя"
              description="Все товары удаляться"
              onConfirm={confirm}
              onCancel={cancel}
              open={open}
              okButtonProps={{ loading: confirmLoading }}
              okText="Да"
              cancelText="Нет"
            >
              <Button danger onClick={showPopconfirm}>
                Удалить производителя {title}
              </Button>
            </Popconfirm>
          )}
        </div>

        <Tabs
          defaultActiveKey="1"
          items={store.models
            .filter((i) => i.brandId === id)
            .map((i: { items: []; id: Number; name: String; img: String }) => {
              return {
                key: i.id,
                label: i.name,
                children: (
                  <ModelView
                    key={i.id}
                    id={i.id}
                    title={i.name}
                    items={i.items}
                    img={i.img}
                  />
                ),
              };
            })}
          // onChange={onChange}
        />
      </div>
    );
  }
);

export default BrandView;
