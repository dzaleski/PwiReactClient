import httpClient from "../utilities/tokenHttpClient";

function getAllOrders() {
  return httpClient.get("orders");
}
function getOrderById(id) {
  return httpClient.get("orders/details/" + id);
}
function addOrder(order) {
  return httpClient.post("orders", order);
}

export const ordersService = {
  getAllOrders,
  addOrder,
  getOrderById,
};
