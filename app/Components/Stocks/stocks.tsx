import React from "react";
import "app/App.css";
import { category } from "/System/Volumes/Data/sgoinfre/Perso/yzisis-p/codely/yorgo/response.ts";

// import { category } from "./categories.ts";

// import { category } from "yorgo/category-dictionary.js";

const Stocks = () => {
  return (
    <>
      <div className="stock-container">Welcome to Stock Tracker</div>
      {category.map((data, key) => {
          return (
            <div key={key}>
              {data.name}
            </div>
          );
        })}
    </>
  );
};

export default Stocks;
