import React from "react";
import "./Main.css";
import Product from "./Product";
import { useStateValue } from "../StateProvider";

function Main() {
  const [{ products, category, isLoading }] = useStateValue();
  return (
    <div className="main">
      <div className="products">
        {products?.map((product) =>
          category === "all" ? (
            <Product
              id={product.id}
              item={product.data()}
              isLoading={isLoading}
            />
          ) : category === product.data().category ? (
            <Product
              id={product.id}
              item={product.data()}
              isLoading={isLoading}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
export default Main;
