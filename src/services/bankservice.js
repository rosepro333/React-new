import axios from 'axios';

//const apiUrl="http://localhost:4000";
const apiUrl=process.env.REACT_APP_API_URL;

// const generateHeader=()=>{
      
//       const headers=new Headers();
//       let token=localStorage.getItem("token");
//       headers=headers.set("Authorization","Bearer "+token)
//       //here not updating...modified ones we stored in new variable
//       return headers;

//    }

   
const generateHeader=()=>{
const config={
    
      headers:{
            Authorization:'Bearer '+localStorage.getItem("token")
      }
 };
 return config;

   }



const authenticateUser=(uname,pwd)=>{
    //httprequest
             return axios.post(apiUrl+"/login",{
                   "username":uname,
                   "password":pwd
    
                   
             });
      }

 const Deposit=(amt)=>{
       alert(amt);
      
            return axios.post(apiUrl+"/deposit",{
                   "amount":amt

            }, generateHeader());
      }    
      
      
const Withdrawal=(amt)=>{
      alert(amt);
      
            return axios.post(apiUrl+"/withdraw",{
                  "amount":amt

            }, generateHeader());
      }    
      


 
export default{
  authenticateUser,
  Deposit,
  generateHeader,
  Withdrawal
  

}      