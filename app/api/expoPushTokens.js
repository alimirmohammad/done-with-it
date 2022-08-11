import client from "./client";

async function register(pushToken) {
  return client.post("/expoPushTokens", { token: pushToken });
}

export default {
  register,
};
