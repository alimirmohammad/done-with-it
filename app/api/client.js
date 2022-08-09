import { create } from "apisauce";
import cache from "../utility/cache";

const client = create({
  baseURL: "http://192.168.1.100:9000/api",
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
