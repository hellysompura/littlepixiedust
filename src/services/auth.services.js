import axios from "axios";
import baseURL from "../config/constants";

function UserLogin(userObj) {
    return axios.post(`${baseURL.devURL}api/auth/login`, userObj)
}

function UserSignUp(signUpObj) {
    return axios.post(`${baseURL.devURL}api/auth/signup`, signUpObj)
}

export { UserLogin, UserSignUp }