import axios from "axios";

const COMPANY_API_BASE_URL = "http://localhost:8081/api/v1.0/company";

const AUTHENTICATION_URL = "http://localhost:8081/authenticate";

class CompanyService{

    saveCompany(company,token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return axios.post(COMPANY_API_BASE_URL.concat("/register"), company);
    }

    getCompanyList(token){
        return axios.get(COMPANY_API_BASE_URL.concat("/getall"),{
            headers : {
                Accept : 'application/json',
                Authorization : `Bearer ${token}`,
                
            },
        });
    }

    removeCompany(code,token){
        return axios.delete(COMPANY_API_BASE_URL + "/delete/" + code,{
            headers : {
                Accept : 'application/json',
                Authorization : `Bearer ${token}`,
                
            },
        });
    }

    getToken(cretentials){
        return axios.post(AUTHENTICATION_URL, cretentials);
    }
}

export default new CompanyService();