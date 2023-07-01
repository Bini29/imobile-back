"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Input,
  message,
  Space,
  Select,
  Upload,
  InputNumber,
  ColorPicker,
  ColorPickerProps,
  UploadFile,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useStore } from "../../store";
import { observer } from "mobx-react";
import { Color } from "antd/es/color-picker";
import { toJS } from "mobx";

const ItemFormUpdate = ({ props, open }: any) => {
  const [form] = Form.useForm();
  const [name, setname] = useState(props.name);
  const { store } = useStore();
  const [formatHex, setFormatHex] = useState<ColorPickerProps["format"]>("hex");
  const [colorHex, setColorHex] = useState<Color | string>(props.color);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const hexString = useMemo(
    () => (typeof colorHex === "string" ? colorHex : colorHex.toHexString()),
    [colorHex]
  );

  console.log(toJS(props.name));

  useEffect(() => {
    form.setFieldsValue({
      name: props.name,
      prise: props.prise,
    });
    const imgList = props.img.map((i, index) => {
      return {
        uid: index,
        name: "image.png",
        status: "done",
        response: { name: i },
        url: "/uploads/" + i,
      };
    });
    setFileList(imgList);
  }, [props]);

  const handleChange: UploadProps["onChange"] = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    // newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
  };
  const onFinish = (values: any) => {
    let imgList = fileList.map((i) => i.response.name);
    fetch("/api/items/item", {
      method: "PUT",
      body: JSON.stringify({
        ...values,

        img: imgList,
        id: props.id,
      }),
    }).then((data) => {
      data
        .json()
        .then((d) => {
          message.success(`Успешно`);
          form.resetFields();

          // store.setCategories();
          store.setModels();
          open();
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
        label={"Название модели"}
        rules={[{ required: false }, { type: "string", min: 1 }]}
      >
        <Input placeholder="Название модели" />
      </Form.Item>
      <Form.Item
        name="prise"
        label="Цена"
        rules={[{ required: false }, { type: "number", min: 0 }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name="img" label="Изображения" required>
        <Upload
          multiple={true}
          action="/api/upload"
          onChange={handleChange}
          listType="picture-card"
          fileList={fileList}
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
};

export default ItemFormUpdate;
