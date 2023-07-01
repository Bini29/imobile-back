import { Popconfirm, message, Card, Modal, Avatar } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useStore } from "store";
import styles from "./styles.module.css";
import {
  EditOutlined,
  DeleteOutlined,
  AlignCenterOutlined,
} from "@ant-design/icons";
import ItemFormUpdate from "../Create/ItemFormUpdate";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import FeatureCreate from "../Create/FeatureCreate";

const Item = observer(({ props }: any) => {
  const { store } = useStore();
  const [confirmLoadingItem, setConfirmLoadingItem] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenF, setIsModalOpenF] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(props);
    console.log(toJS(props));
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOkF = () => {
    setIsModalOpenF(false);
  };

  const handleCancelF = () => {
    setIsModalOpenF(false);
  };

  const showPopconfirmItem = () => {
    setItem(props);
    setOpenItem(true);
  };
  const cancelItem = (e: React.MouseEvent<HTMLElement>) => {
    setOpenItem(false);
  };

  const confirmItem = (id: Number) => {
    console.log(id);

    setConfirmLoadingItem(true);
    fetch("/api/items/item", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-ID": id,
      },
    })
      .then(async (res) => {
        res.json().then(() => {
          setConfirmLoadingItem(false);
          store.setCategories();
          store.setModels();
          setOpenItem(false);
        });
      })
      .catch(() => {
        message.error("Произошла ошибка");
      });
  };

  return (
    <>
      <Card
        className={styles.card}
        cover={
          <img width={"99%"} alt="example" src={"/uploads/" + props.img[0]} />
        }
        actions={[
          <EditOutlined
            key={props.id + " edit"}
            onClick={() => setIsModalOpen(!isModalOpen)}
          />,

          <Popconfirm
            key={props.id + "remove"}
            placement="top"
            title={"Удалить"}
            onConfirm={() => confirmItem(props.id)}
            onCancel={cancelItem}
            open={openItem}
            okButtonProps={{ loading: confirmLoadingItem }}
            okText="Да"
            cancelText="Нет"
          >
            <DeleteOutlined key="remove" onClick={showPopconfirmItem} />
          </Popconfirm>,
          <AlignCenterOutlined
            key={props.id + "features"}
            onClick={() => setIsModalOpenF(!isModalOpen)}
          />,
        ]}
      >
        <div className={styles.cardbody}>
          <span>
            <b>{props.name}</b>
          </span>
          <span>{props.prise + "руб"}</span>{" "}
        </div>
      </Card>
      <Modal
        title="Редактировать модель"
        open={isModalOpen}
        footer={[]}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ItemFormUpdate props={props} open={handleOk} isOpen={isModalOpen} />
      </Modal>
      <Modal
        title="Характеристики"
        open={isModalOpenF}
        onOk={handleOkF}
        onCancel={handleCancelF}
      >
        <FeatureCreate id={props.id} open={handleOkF} />
      </Modal>
    </>
  );
});

export default Item;
