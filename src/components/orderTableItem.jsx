import React from "react";
import { Link } from "react-router-dom";

function OrderTableItem({ fullName, orderDate, orderId }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">{fullName}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{orderDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-l font-semibold text-green-800">
          0 PLN
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link to="/" className="text-indigo-600 hover:text-indigo-900">
          View
        </Link>
      </td>
    </tr>
  );
}

export default OrderTableItem;
