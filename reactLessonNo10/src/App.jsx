import { useState } from "react";
import { ProductList } from "./reactComponents/ProductList";
import { NavigationBar } from "./reactComponents/NavigationBar";

function App() {
  return (
    <>
        <NavigationBar />
        <ProductList />
    </>
  );
}

export default App;
