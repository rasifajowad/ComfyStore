import React, { useEffect } from "react";
import { ProductsList, ProductsGrid } from "./";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { BsGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const { total } = meta.pagination;

  const storedLayout = localStorage.getItem("state") || JSON.stringify("grid");
  const [layout, setLayout] = useState(storedLayout);

  const storeState = (currentState) => {
    setLayout(currentState);
    localStorage.setItem("state", JSON.stringify(currentState));
  };

  useEffect(() => {
    setLayout(JSON.parse(storedLayout));
  }, []);

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {total} Product{total > 1 ? "s" : ""}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => storeState("grid")}
            className={setActiveStyles("grid")}
          >
            <BsGridFill />
          </button>
          <button
            type="button"
            onClick={() => storeState("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {total === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
