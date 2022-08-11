import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

async function storeToken(authToken) {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the token", error);
  }
}

async function getToken() {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the token", error);
  }
}

async function getUser() {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
}

async function removeToken() {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the token", error);
  }
}

export default {
  getToken,
  getUser,
  removeToken,
  storeToken,
};
