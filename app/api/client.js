import { create } from "apisauce";

import authStorage from "../auth/storage";
import cache from "../utility/cache";
import settings from "../config/settings";

const client = create({
  baseURL: settings.apiUrl,
});

client.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (authToken) request.headers["x-auth-token"] = authToken;
});

const get = client.get;

client.get = async function (url, params, axiosConfig) {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default client;
