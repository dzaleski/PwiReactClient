import httpClient from "../utilities/tokenHttpClient";

function getCategories() {
  return httpClient.get("categories");
}

export const categoriesService = {
  getCategories,
};
