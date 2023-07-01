import { Button, Popconfirm, message, Card, Modal } from "antd";

import React, { FC, useState } from "react";
import { useStore } from "store";
import styles from "./styles.module.css";
import { observer } from "mobx-react";
import ItemForm from "../Create/ItemForm";

import Item from "./Item";

const { Meta } = Card;
const ModelView = observer(
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showPopconfirm = () => {
      setOpen(true);
    };

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };
    console.log(items);

    const confirm = (e: React.MouseEvent<HTMLElement>) => {
      setConfirmLoading(true);

      fetch("/api/items/model", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-ID": id,
        },
      })
        .then(async (res) => {
          res.json().then(() => {
            setConfirmLoading(false);
            store.setModels();
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
              title="Удаление модели"
              onConfirm={confirm}
              onCancel={cancel}
              open={open}
              okButtonProps={{ loading: confirmLoading }}
              okText="Да"
              cancelText="Нет"
            >
              <Button danger onClick={showPopconfirm}>
                Удалить модель {title}
              </Button>
            </Popconfirm>
          )}
        </div>
        <div className={styles.cardrow}>
          <Card hoverable className={styles.card} title="Создать">
            <Button type="primary" onClick={showModal}>
              Создать
            </Button>
            <Modal
              title="Создать модель"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[]}
            >
              <ItemForm id={id} open={handleOk} />
            </Modal>
          </Card>
          {items.map((i: any) => {
            return <Item key={i.id} props={i} />;
          })}
        </div>
      </div>
    );
  }
);

export default ModelView;
