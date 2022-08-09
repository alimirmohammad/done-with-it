import { create } from "apisauce";

const client = create({
  baseURL: "http://192.168.1.100:9000/api",
});

export default client;
