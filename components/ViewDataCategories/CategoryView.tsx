import { Button, Popconfirm, message } from "antd";
import { toJS } from "mobx";
import React, { FC, useState } from "react";
import { useStore } from "store";

const CategoryView = ({
  id,
  title,
  items,
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

    fetch("/api/items/createcategoryitem", {
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

  console.log(toJS(title));

  if (title.length === 0) {
    return <div>Нету производителя</div>;
  }
  return (
    <div>
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
          Удалить подкатегорию {title}
        </Button>
      </Popconfirm>
    </div>
  );
};

export default CategoryView;
