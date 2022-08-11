import client from "./client";

async function send(message, listingId) {
  return client.post("/messages", { message, listingId });
}

export default { send };
