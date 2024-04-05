import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://imtihon.mquvonchbek.uz"
});

axios.interceptors.request.use(config => {
  let token = localStorage.getItem("token");
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export default axiosClient;
