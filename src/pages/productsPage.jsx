import React from "react";
import Categories from "../components/categories";
import ProductCard from "../components/productCard";
import SearchInput from "../components/serachInput";

function ProductsPage() {
  const categories = [
    { id: 1, categoryName: "Przyprawy" },
    { id: 2, categoryName: "Owoce" },
    { id: 3, categoryName: "Warzywa" },
    { id: 4, categoryName: "Pieczywo" },
  ];

  const products = [
    {
      id: 1,
      imageURL:
        "https://www.clipartmax.com/png/middle/29-294684_journal-tomato-icon.png",
      description: "super tomato",
      productName: "Tomato",
      price: "556",
    },
    {
      id: 2,
      imageURL:
        "https://www.clipartmax.com/png/middle/29-294684_journal-tomato-icon.png",
      description: "super tomato",
      productName: "Tomato",
      price: "556",
    },
    {
      id: 3,
      imageURL:
        "https://www.clipartmax.com/png/middle/29-294684_journal-tomato-icon.png",
      description: "super tomato",
      productName: "Tomato",
      price: "556",
    },
    {
      id: 4,
      imageURL:
        "https://www.clipartmax.com/png/middle/29-294684_journal-tomato-icon.png",
      description: "super tomato",
      productName: "Tomato",
      price: "556",
    },
  ];

  return (
    <div className="flex flex-row w-full justify-center mt-6 space-x-4">
      <div className="w-1/4">
        <SearchInput />
        <Categories categories={categories} />
      </div>
      <div className="w-full space-y-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            imageURL={p.imageURL}
            description={p.description}
            productName={p.productName}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
