import axios from "axios";
import proxyPaths from "./proxyPaths.json";

const baseLink = proxyPaths.basePath;

export const postComment = async (data) => {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  const data = await axios.post(`${baseLink}/api/comments`, data, axiosConfig);
  return data;
};
