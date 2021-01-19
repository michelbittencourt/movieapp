import axios from "axios";

const token = "eeecd9e9c61cdf6ec9cfbf5aae4f6b69";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: token,
    language: "pt-BR",
    region: "BR",
  },
});

export const baseURLImages = "https://image.tmdb.org/t/p/original/";

export default api;
