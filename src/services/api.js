import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
});

export default api;

///// Esse arquivo é responsável pela conexão com a base do Github.
