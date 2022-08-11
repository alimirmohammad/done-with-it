const { default: client } = require("./client");

async function login(email, password) {
  return client.post("/auth", { email, password });
}

export default {
  login,
};
