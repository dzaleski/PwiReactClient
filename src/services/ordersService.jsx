import httpClient from "../utilities/tokenHttpClient";

function getAllOrders() {
  return httpClient.get("orders");
}
function getAllOrdersOfUser() {
  return httpClient.get("orders");
}
function addOrder(order) {
  return httpClient.post("orders", order);
}

export const ordersService = {
  getAllOrders,
  addOrder,
  getAllOrdersOfUser,
};
