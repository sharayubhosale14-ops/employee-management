import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;

    switch (status) {
     case 401:
  console.error("Unauthorized Access");

  localStorage.removeItem("token");

  window.location.href = "/";

  break;

      case 403:
        console.error("Forbidden Access");
        break;

      case 500:
        console.error("Internal Server Error");
        break;

      default:
        console.error("Something went wrong");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;