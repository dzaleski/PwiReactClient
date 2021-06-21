import React, { useEffect, useState } from "react";
import Categories from "../components/categories";
import ProductCard from "../components/productCard";
import { productsService } from "../services/productsService";
import { cartService } from "../services/cartService";
import { categoriesService } from "../services/categoriesService";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    productsService.getProducts().then((res) => {
      setProducts(res.data);
      setFilteredProducts(res.data);
    });

    categoriesService.getCategories().then((res) => {
      setCategories([
        ...res.data,
        {
          name: "all",
          description: "Po prostu wszystkie produkty",
          id: -1,
        },
      ]);
    });
  }, []);

  const handleAddProduct = (id) => {
    const addedProduct = products.find((p) => p.id === id);
    cartService.addItemToCart(addedProduct);
  };

  const handleCategorySerach = (categoryId) => {
    if (categoryId === -1) {
      setFilteredProducts(products);
      return;
    }
    const result = products.filter((p) => p.category.id === categoryId);
    setFilteredProducts(result);
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto mt-6 space-y-6">
      <Categories categories={categories} onClick={handleCategorySerach} />
      <div className="w-full space-y-4">
        {filteredProducts &&
          filteredProducts.map((p) => (
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
