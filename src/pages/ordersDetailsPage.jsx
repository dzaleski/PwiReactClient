import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SummaryItem from "../components/summaryItem";
import { Link, useParams } from "react-router-dom";
import { ordersService } from "../services/ordersService";

function OrdersDetailsPage() {
  const [t] = useTranslation();
  const { id } = useParams();
  const [orderProducts, setOrderProducts] = useState([]);
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);
  useEffect(() => {
    if (id) {
      ordersService.getOrderById(id).then((res) => {
        console.log(res.data);
        setOrderProducts(res.data.products);
        setTotalOrderPrice(res.data.totalOrderPrice);
      });
    }
  }, []);

  return (
    <div className="w-full xl:w-1/2 mx-auto space-y-5">
      <h4 className="text-3xl text-gray-700 mb-5">
        {t("ordersDetailsPage.title")}
      </h4>
      <div className="p-5 rounded shadow-lg bg-white">
        {orderProducts.map((p) => (
          <SummaryItem
            key={p.id}
            imageURL={p.imageURL}
            price={p.price}
            description={p.description}
            productName={p.name}
            totalPrice={p.totalPrice}
            quantity={p.quantity}
          />
        ))}
        <div className="flex mt-3 justify-between text-xl">
          <span className="text-l font-semibold text-green-600">
            {t("summaryPage.total")}
          </span>
          <span className="text-l font-semibold text-green-600">
            {totalOrderPrice} PLN
          </span>
        </div>
      </div>
      <div className="flex w-full text-center text-xl font-semibold text-white shadow-lg">
        <Link
          to="/orders"
          className="w-full rounded bg-indigo-400 transition-all hover:bg-indigo-500 hover:shadow px-10 py-5"
        >
          {t("ordersDetailsPage.back")}
        </Link>
      </div>
    </div>
  );
}

export default OrdersDetailsPage;
