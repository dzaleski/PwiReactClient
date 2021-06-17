import httpClient from "../utilities/tokenHttpClient";

function getCurrentUser() {
  httpClient.get("users");
}
