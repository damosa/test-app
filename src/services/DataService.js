import axios from "../http-common";

const APP_ID = "ba2aec586c2e4bc9a56a970dd9f781c3"
class DataService {
  // static para poder acceder a los metodos de la clasec cuando se importe sin crear un new
  static getNamesDivisas = () => {
    return axios.get(`/currencies.json?app_id=${APP_ID}`);
  }

  static getListDivisas = () => {
    return axios.get(`/latest.json?app_id=${APP_ID}`);
  }

  static getHistorical = (date) => {
    return axios.get(`/historical/${date}.json?app_id=${APP_ID}&base=USD`);
  }
}

export default DataService;
