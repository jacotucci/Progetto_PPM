import { Config } from "./config.js";

const fetchJson = async (callback) => {
  const response = await callback;
  if (!response.ok) {
    return null;
  }

  return await response.json();
};

export const getPicture = (id) =>
  fetchJson(
    fetch(`${Config.BASE_URL}pictures/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

export const getLevel = (id) =>
  fetchJson(
    fetch(`${Config.BASE_URL}levels/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  export const postScore = (id, score) =>
  fetchJson(
    fetch(`${Config.BASE_URL}user/me/${id},${score}`, {
      method: "POST",
    })
  );  

export const getVideo = (id) =>
  fetchJson(
    fetch(`${Config.BASE_URL}videos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

export const getUser = (id) =>
  fetchJson(
    fetch(`${Config.BASE_URL}user/me/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
      method: "GET",
    })
  );

  export const getnPlayers = () =>
  fetchJson(
    fetch(`${Config.BASE_URL}players`, {
      method: "GET",
    })
  );

  export const getUserMe = () =>
  fetchJson(
    fetch(`${Config.BASE_URL}user/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
      method: "GET",
    })
  );  
 

export const getLevels = () =>
  fetchJson(
    fetch(`${Config.BASE_URL}levels`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

