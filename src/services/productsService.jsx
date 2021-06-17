import httpClient from "../utilities/tokenHttpClient";

function getProducts()
{
    return httpClient.get("products");
}

export default getProducts;