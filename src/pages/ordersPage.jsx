import React, { useEffect, useState } from "react";
import { ordersService } from "../services/ordersService";
import OrderTableItem from "../components/orderTableItem";
import { useTranslation } from "react-i18next";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [t] = useTranslation();
  useEffect(() => {
    ordersService.getAllOrders().then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("ordersPage.customer")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("ordersPage.orderDate")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("ordersPage.totalCost")}
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only"> {t("ordersPage.view")}</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders &&
                  orders.map((o) => (
                    <OrderTableItem
                      key={o.id}
                      id={o.id}
                      customer={o.customer}
                      orderDate={o.orderDate.split(" ")[0]}
                      totalCost={o.totalCost}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
