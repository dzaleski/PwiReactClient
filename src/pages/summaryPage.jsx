import React, { useEffect, useState } from "react";
import SummaryForm from "../components/summaryForm";
import SummaryItem from "../components/summaryItem";
import { cartService } from "../services/cartService";
import { ordersService } from "../services/ordersService";

function SummaryPage() {
  const [summaryProducts, setSummaryProducts] = useState(cartService.cartValue);

  useEffect(() => {
    let subscription = cartService.cart.subscribe(setSummaryProducts);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const computeTotalPrice = (quantity, price) => quantity * price;
  const computeTotalCartPrice = () => {
    let result = 0;
    summaryProducts.forEach((p) => (result += p.quantity * p.price));
    return result;
  };

  const handleSubmit = (formValues) => {
    let productsId = [];

    summaryProducts.forEach((p) => {
      productsId.push({ id: p.id, quantity: p.quantity });
    });

    const newOrder = {
      ...formValues,
      products: productsId,
    };

    ordersService.addOrder(newOrder);
  };

  return (
    <div className="w-full md:w-1/2 mx-auto">
      <h4 className="text-3xl text-gray-700 mb-5">Order Summary</h4>
      <div className="p-5 rounded shadow-lg bg-white">
        {summaryProducts.map((p) => (
          <SummaryItem
            key={p.id}
            imageURL={p.imageURL}
            price={p.price}
            description={p.description}
            productName={p.name}
            totalPrice={computeTotalPrice(p.quantity, p.price)}
            quantity={p.quantity}
          />
        ))}
        <div className="flex mt-3 justify-between text-xl">
          <span className="text-l font-semibold text-green-600">Total</span>
          <span className="text-l font-semibold text-green-600">
            {computeTotalCartPrice()} PLN
          </span>
        </div>
      </div>
      <div className="w-full">
        <SummaryForm onSubmit={handleSubmit} className="max-w-full" />
      </div>
    </div>
  );
}

export default SummaryPage;
