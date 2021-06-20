import httpClient from "../utilities/tokenHttpClient";

function getCurrentUser() {
  return httpClient.get("users");
}

export const usersService = {
  getCurrentUser,
};
