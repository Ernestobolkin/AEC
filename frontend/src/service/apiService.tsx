import axios from "axios";
import enviroment from "../config";

interface Response {
    data: any;
    status: number;
    code?: number;
}

interface Error {
    message: string;
    code: number;
}

interface User {
    userName: string;
    passWord: string;
}

export const loginRequest = async( userData:User ) => {
    try{
        const response = await generalRequest("login", "POST", userData);
        if(response && response.data){
            localStorage.setItem("token", response.data.token);
        }
    }catch(error){

    }
}

export const generalRequest = async (url: string, method: string, body?: any) => {
    try {
       switch (method) {
            case "GET":
               {
                    const response = await axios.get(`${enviroment.API_URL}/${url}`, { headers: getHeaders() });
                    return response.data;
               }
            case "POST":
               {
                    const response = await axios.post(`${enviroment.API_URL}/${url}`, body, { headers: getHeaders() });
                    return response;
               }
            case "PUT":
               {
                    const response = await axios.put(`${enviroment.API_URL}/${url}`, body, { headers: getHeaders() });
                    return response;
               }
            case "DELETE":
               {
                    const response = await axios.delete(`${enviroment.API_URL}/${url}`, { headers: getHeaders() });
                    return response;
               }
            default:
       }
    } catch (error) {
        return error;
    }
};

const getHeaders = () => {
    let headers = {}
    const token = localStorage.getItem("token");
    if(token){
        headers = {
            Authorization: `Bearer ${token}`,
        };
    }
    return headers;
}