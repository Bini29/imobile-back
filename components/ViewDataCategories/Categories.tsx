"use client";

import React, { useEffect, useState } from "react";
import { Tabs, message, Button } from "antd";
import CategoriesItems from "./CategoriesItems";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const Categories = observer(() => {
  const { store } = useStore();
  const onChange = (key: string) => {
    console.log(key);
  };
  useEffect(() => {
    store.setCategories();
  }, []);

  return (
    <Tabs
      style={{ padding: 30 }}
      defaultActiveKey="1"
      items={store.categories.map(
        (i: { items: any; id: Number; name: String }) => {
          return {
            key: i.id,
            label: i.name,
            children: (
              <CategoriesItems
                key={i.id}
                id={i.id}
                title={i.name}
                items={i.items}
              />
            ),
          };
        }
      )}
      onChange={onChange}
    />
  );
});

export default Categories;
