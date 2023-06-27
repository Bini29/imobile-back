"use client";

import SignOut from "@/components/sign-out";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { log } from "console";
import Categories from "@/components/ViewDataCategories/Categories";
import CategoryForm from "@/components/Create/CategoryForm";
import BrandForm from "@/components/Create/BrandForm";

export default function Home() {
  return (
    <div className="cantainer">
      <div className={styles.wrapperCategory}>
        <CategoryForm />
        <BrandForm />
      </div>
      <Categories />

      <SignOut />
    </div>
  );
}
