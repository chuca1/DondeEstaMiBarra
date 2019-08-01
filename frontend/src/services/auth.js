import axios from "axios";
const baseURL = "https://polar-savannah-65683.herokuapp.com";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    });
  }
  signup(data) {
    return this.service.post("/signup", data);
  }
  login(data) {
    return this.service.post("/login", data);
  }
  logout() {
    return this.service.get("/logout");
  }
}

export default AuthService;
