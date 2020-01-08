import axios from "axios";

function axiosAuth() {
  const token = getToken();
  return axios.create({
    baseURL: "https://anywhere-fitness-bw.herokuapp.com/",
    headers: {
      authorization: token
    }
  });
}

function getToken() {
  return localStorage.getItem("token");
}

export default axiosAuth;
