import { BASE_URL } from "@/config/constants";

export const getRq = (url) =>
  fetch(new URL(url, BASE_URL))
    .then((response) => response.json())
    .then((data) => Promise.resolve(data))
    .catch((e) => Promise.reject(e));

export const postReq = (url, body) =>
  fetch(new URL(url, BASE_URL), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then((response) => response.json())
    .then((data) => Promise.resolve(data))
    .catch((e) => Promise.reject(e));
