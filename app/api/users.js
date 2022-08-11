const { default: client } = require("./client");

async function register(userInfo) {
  return client.post("/users", userInfo);
}

export default { register };
