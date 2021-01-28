import axios from "../../http-common";

const APP_ID = "ba2aec586c2e4bc9a56a970dd9f781c3"
class DataService {
  static getNamesDivisas() {
    console.log('getNamesDivisas');
    return axios.get(`/currencies.json?app_id=${APP_ID}`);
  }

  static getListDivisas() {
    return axios.get(`/latest.json?app_id=${APP_ID}`);
  }
}

export default DataService;
