import axios from 'axios';

class Api {
  constructor() {
    this.config = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    };
    this.apiUrl =
      'https://pci.zcredit.co.il/ZCreditWS/api/Transaction/CommitFullTransaction';
  }

  async transaction(data) {
    const res = await axios.post(`${this.apiUrl}`, data, this.config);
    return res.data.HasError;
  }
}

export default Api;
