import axios from "axios";

const STOCK_API_BASE_URL = "http://localhost:8082/api/v1.0/stock";

class StockService{

    saveStock(stock){
        console.log(STOCK_API_BASE_URL.concat("/add"));
        return axios.post(STOCK_API_BASE_URL.concat("/add"), stock);
    }
}

export default new StockService();