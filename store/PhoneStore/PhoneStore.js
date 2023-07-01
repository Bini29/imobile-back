import { makeAutoObservable } from "mobx";

const PhoneStore = () => {
  return makeAutoObservable({
    open: false,
    list: [],
    categories: [],
    models: [],
    loader: true,
    show() {
      this.open = !this.open;
    },
    setCategories: async function () {
      this.loader = true;
      const categoriesP = await fetch("/api/items/category").then(
        async (res) => {
          this.loader = false;
          return await res.json();
        }
      );
      this.categories = categoriesP;
    },

    setModels: async function () {
      const modelsP = await fetch("/api/items/model").then(async (res) => {
        return await res.json();
      });
      this.models = modelsP;
    },
  });
};

export default PhoneStore;
