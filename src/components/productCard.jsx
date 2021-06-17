import React from "react";

function ProductCard({
  id,
  imageURL,
  productName,
  description,
  price,
  onAddProduct,
}) {
  return (
    <div className="bg-white p-2 w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded shadow-lg flex flex-col sm:flex-row gap-5 select-none">
      <img
        src={imageURL}
        className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
        alt="Product"
      ></img>
      <div className="flex sm:flex-1 flex-col gap-2 p-1">
        <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
          {productName}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
          {description}
        </p>
        <div className="flex gap-4 mt-auto">
          <span className="flex items-center gap-1 sm:text-lg border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
            <span>{price} zł</span>
          </span>
          <button className="ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
            <button className="focus:outline-none" onClick={() => onAddProduct(id)}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> &nbsp;
              Add
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
