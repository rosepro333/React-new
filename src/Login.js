import Test from './Test';
import './Login.css';
 import { useState, useEffect } from 'react';
 import Bankservice from './services/bankservice';
 import { useHistory,withRouter} from 'react-router-dom';

function Login(){
   const [username,setUsername] = useState("");
   const [password,setPassword] = useState("");
   const [enquiries,setEnquiries] = useState([

    "enquiry 1",
    "enquiry 2",
    "enquiry 3"
   ]);
  //  useEffect(()=>{
  //    alert("useeffect")
  //  },[username] )

const onUserNameChange = (event)=>{

    setUsername(event.target.value);
    
}
const onPasswordChange = (event)=>{

  setPassword(event.target.value);
  
}

 const history = useHistory();
 const handleSubmit = (event)=>{

  event.preventDefault(); //to prevent page reload 
  
 
 
  Bankservice.authenticateUser(username,password)
  .then(data=>{
      alert(username)
      alert(password)
     // alert("logged in");
  console.log(data)
      alert(data.data.message)
      alert(data.data.token)

   
    localStorage.setItem("token",data.data.token);
    console.log(history)
    history.push("/home2");

    
   })

}


       // return <h1>login here<Test></Test></h1>

     return <div className="world">

     <h1 style={{textAlign:'center',paddingTop:'8%',color:"white"}}>Login SBI BANK</h1>
     {
            //  this.state.enquiries.map(enquiry=><div>{enquiry}</div>)
            enquiries.map(enquiry=> <Test key={enquiry} text={enquiry}/>)
    
    }
     <form  onSubmit={handleSubmit}>

        <div className="form-group">
        <label for="" className="form-label">username</label>
        <input type="text"  onChange={onUserNameChange} className="form-control" id="username" aria-describedby="emailHelp" />
        <label for="" id="uinvalid" ></label>
        </div>

        <div className="form-group">
        <label for="" className="form-label">Password</label>
        <input type="password" onChange={onPasswordChange}  className="form-control" id="password" />
        <div id="pinvalid" className="form-text"></div> 
        </div>
    
        <button type="submit" className="btn btn-primary" style={{marginLeft:"650px",marginTop:'3%'}}>Login</button>

      </form>


</div>


}

export default withRouter (Login);
