import axios from "axios";
const apiUrl = "http://localhost:8000";
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export async function authenticate(username, password) {
  const userData = {
    username,
    password,
  };

  const formData = new URLSearchParams(userData).toString();

  try {
    const response = await axios.post(`${apiUrl}/user/login`, formData, config);

    const token = response?.data?.access_token;

    localStorage.setItem("authToken", token);
    // console.log("responsse", response);

    // return response.data;
  } catch (error) {
    console.log("ERROR: authenticate", error);
    throw error;
  }
}
