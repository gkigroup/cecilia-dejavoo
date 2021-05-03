import axios from 'axios';

class Api {
  constructor() {
    this.config = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    };
    this.apiUrl =
      'https://pci.zcredit.co.il/ZCreditWS/api/Transaction/CommitFullTransaction';
  }

  transaction(data) {
    return axios.post(`${this.apiUrl}`, data, this.config);
  }
}

export default Api;
