import axios from "axios";

export default axios.create({
  baseURL: "https://openexchangerates.org/api/latest.json?ba2aec586c2e4bc9a56a970dd9f781c3",
  headers: {
    "Content-type": "application/json"
  }
});