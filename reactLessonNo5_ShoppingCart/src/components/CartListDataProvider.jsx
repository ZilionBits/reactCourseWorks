import { createContext, useState } from "react";

export const CartListDataContext = createContext();

export const CartListDataProvider = ({ children }) => {

  const [selectedItems, setSelectedItems] = useState([]);

  const addSelectedItems = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  return <>
  <CartListDataContext.Provider value={{selectedItems, addSelectedItems}}>
    {children}
  </CartListDataContext.Provider>
  </>;
};
