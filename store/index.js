import { createContext, useContext } from "react";
import PhoneStore from "./PhoneStore/PhoneStore";

const store = {
  store: PhoneStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export default store;
