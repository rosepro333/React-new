import axios from 'axios';

const apiUrl="http://localhost:4000";

const authenticateUser=(uname,pwd)=>{
    //httprequest
             return axios.post(apiUrl+"/login",{
                   "username":uname,
                   "password":pwd
    
                   
             });
      }
 
export default{
  authenticateUser
}      