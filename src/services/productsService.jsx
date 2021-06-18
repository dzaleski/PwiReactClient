import httpClient from "../utilities/tokenHttpClient";

function getProducts() {
  return httpClient.get("products");
}

export const productsService = {
  getProducts,
};
