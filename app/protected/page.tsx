"use client";

import CreateCategoryForm from "@/components/CreateItems/CreateCategoryForm";
import SignOut from "@/components/sign-out";
import styles from "./page.module.css";
import CreateCategoryItems from "@/components/CreateItems/CreateCategoryItems";
import { useEffect, useState } from "react";
import { log } from "console";
import Categories from "@/components/ViewDataCategories/Categories";

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      fetch("/api/items/createcategory").then(async (res) => {
        const categories = await res.json();
        setCategories(categories);
      });
    };
    fetchCategories();
  }, []);

  return (
    <div className="cantainer">
      <div className={styles.wrapperCategory}>
        <CreateCategoryForm />
        <CreateCategoryItems />
      </div>
      <Categories />

      <SignOut />
    </div>
  );
}
