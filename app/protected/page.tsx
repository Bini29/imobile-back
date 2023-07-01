"use client";

import SignOut from "@/components/sign-out";
import styles from "./page.module.css";
import Categories from "@/components/ViewDataCategories/Categories";
import CategoryForm from "@/components/Create/CategoryForm";
import BrandForm from "@/components/Create/BrandForm";
import ModelForm from "@/components/Create/ModelForm";
import { Alert, Space, Spin } from "antd";
import { useStore } from "store";
import { observer } from "mobx-react";

export default observer(function Home() {
  const { store } = useStore();
  return (
    <div className="cantainer">
      <div className={styles.wrapperCategory}>
        <CategoryForm />
        <BrandForm />
        <ModelForm />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {store.loader && <Spin size="large" tip="Загрузка..." />}
      </div>
      <Categories />

      <SignOut />
    </div>
  );
});
