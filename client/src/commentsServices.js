import axios from "axios";
import proxyPaths from "./proxyPaths.json";

const baseLink = proxyPaths.basePath;

export const postComment = async (comment) => {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  const data = await axios.post(
    `${baseLink}/api/comments/create`,
    comment,
    axiosConfig
  );
  return data;
};

export const sendEmail = async (comment) => {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  const data = await axios.post(
    `${baseLink}/api/email/sent`,
    comment,
    axiosConfig
  );
  return data;
};

export const getComments = async () => {
  const data = await axios.get(`${baseLink}/api/comments/read`);
  return data;
};

export const getCommentById = async (comment) => {
  // const data = await axios.get(`${baseLink}/api/comments/readbyId`, comment);
  // return data;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };

  const data = await axios.get(
    `${baseLink}/api/comments/read/${comment.docID}`,
    axiosConfig
  );
  return data;
};

export const updateComment = async (docID, comment) => {
  const data = await axios.put(
    `${baseLink}/api/comments/update/${docID}`,
    comment
  );
  return data;
};
