import Test from './Test';
import './Login.css';
 import { useState, useEffect } from 'react';

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
 const handleSubmit = (event)=>{

  event.preventDefault(); //to prevent page reload 
  alert(username);
  alert(password);
 
// Bankservice.authenticateUser(username,password)
// .then(data=>{
//    alert(this.state.username)
//    alert(this.state.password)
//   alert("logged in");
//    localStorage.setItem("token",data.token);
//    this.props.history.push('/home');
  
// })

}


       // return <h1>login here<Test></Test></h1>

     return <div className="container">

     <h1 style={{textAlign:'center',marginTop:"8%"}}>Login SBI BANK</h1>
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
    
        <button type="submit" className="btn btn-primary">Login</button>

      </form>


</div>


}

export default Login;
