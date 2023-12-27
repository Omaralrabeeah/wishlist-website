import axios from "axios";

const BASE_URL = "https://hammerhead-app-kz3f9.ondigitalocean.app/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

export { instance, BASE_URL };
