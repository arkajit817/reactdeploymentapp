import axios from 'axios';
import ConfigObj from './config';

const Options = {
    headers: {
        'Content-Type':'application/json'
    }
}

const TemplateUrl = ConfigObj.templateUrl;
const ServerUrl = ConfigObj.serverUrl;

var HttpService = {
    getTemplate: ()=>{
        return axios.get(TemplateUrl);
    },
    saveData: (data)=>{
        return axios.post(ServerUrl+'add',data,Options);
    },
    allData: ()=>{
        return axios.get(ServerUrl+'all',Options)
    },
    deleteData: (id)=>{
        return axios.delete(ServerUrl+'delete/'+IDBCursor,Options);
    }
}
export default HttpService;