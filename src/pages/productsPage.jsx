import React, { useEffect, useState } from "react";
import Categories from "../components/categories";
import ProductCard from "../components/productCard";
import SearchInput from "../components/serachInput";
import getProducts from "../services/productsService";
import { cartService } from "../services/cartService";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleAddProduct = (id) => {
    const addedProduct = products.find((p) => p.id === id);
    cartService.addItemToCart(addedProduct);
  };

  const categories = [
    { id: 1, categoryName: "Przyprawy" },
    { id: 2, categoryName: "Owoce" },
    { id: 3, categoryName: "Warzywa" },
    { id: 4, categoryName: "Pieczywo" },
  ];

  return (
    <div className="flex flex-row w-full justify-center mt-6 space-x-4">
      <div className="w-1/4">
        <SearchInput />
        <Categories categories={categories} />
      </div>
      <div className="w-full space-y-4">
        {products &&
          products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              imageURL={p.imageURL}
              description={p.description}
              productName={p.name}
              price={p.price}
              onAddProduct={handleAddProduct}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductsPage;
