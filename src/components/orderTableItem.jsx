import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function OrderTableItem({ id, customer, orderDate, totalCost }) {
  const [t] = useTranslation();
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">{customer}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{orderDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-l font-semibold text-green-800">
          {totalCost} PLN
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link
          to={"/orders/details/" + id}
          className="text-indigo-600 hover:text-indigo-900"
        >
          {t("ordersPage.view")}
        </Link>
      </td>
    </tr>
  );
}

export default OrderTableItem;
