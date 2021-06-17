import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "../components/cartProduct";

function CartPage() {
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
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">3 Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

          {products.map((p) => (
            <CartProduct
              key={p.id}
              description={p.description}
              productName={p.productName}
              imageUrl={p.imageURL}
              price={p.price}
            />
          ))}

          <Link
            to="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 3</span>
            <span className="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
