import React, {Component} from 'react';
import Bankservice from './services/bankservice';
import './Login.css';
import Test from './Test';
import { withRouter} from 'react-router-dom';


class LoginClass extends Component{
    //...MOUNTING PHASE FIRST CALL,constructor,willmount,render,didmount............

    // constructor(props){              //FIRST LOAD CONSTRUCTOR
    //         super(props);
    //         alert("constructor");
    // }
    //...................................................................
    // componentWillMount(){}   //life cycle method...past

    // static getDerivedStateFromProps(){
    //              alert("getDerivedStateFromProps")
    // }
    // componentDidMount(){
    //               alert("componentDidMount")   //similar to use effect in the login
    // }
    // componentDidUpdate(){
    //     alert("componeDidUpdate")         //similar to use effect in the login
    // }
     
state={

username:"",
password:"",
enquiries:[
    "enquiry 1",
    // "enquiry 2"
]


}
onUserNameChange = (event)=>{

    // this.state.username=event.target.value
    this.setState({
        username:event.target.value
    })
}
onPasswordChange = (event)=>{

    this.setState({
        password:event.target.value
    })
}
handleSubmit = (event)=>{

    event.preventDefault(); //to prevent page reload 
    
   

  Bankservice.authenticateUser(this.state.username,this.state.password)
  .then(data=>{
      alert(this.state.username)
      alert(this.state.password)
     // alert("logged in");
  console.log(data)
      alert(data.data.message)
      alert(data.data.token)
    //console.log(this.props.history)
    localStorage.setItem("token",data.data.token);
     this.props.history.push('/home');
    
   })
  

}


    render(){
        return <div className="world">
          {
            //  this.state.enquiries.map(enquiry=><div>{enquiry}</div>)
            this.state.enquiries.map(enquiry=> <Test key={enquiry} text={enquiry}/>)
         }
         {
             this.state.username
         }
        
         <Test text="world"/>
         <Test text="test"/> 

        <h1 style={{textAlign:'center',paddingTop:'8%',color:"white"}}>Login SBI BANK</h1>
        <form onSubmit={this.handleSubmit}>
   
           <div className="form-group">
           <label for="" className="form-label">username</label>
           <input type="text" onChange={this.onUserNameChange} className="form-control" id="username" aria-describedby="emailHelp" />
           <div  id="uinvalid" ></div>
           </div>
   
           <div className="form-group">
           <label for="" className="form-label">Password</label>
           <input type="password" onChange={this.onPasswordChange} className="form-control" id="password" />
           <div id="pinvalid" className="form-text"></div> 
           </div>
       
         <button type="submit"  className="btn btn-primary" style={{marginLeft:"650px",marginTop:'3%'}}>Login</button>
   
         </form>
   
   
   </div>
   
        
    }
}
export default withRouter (LoginClass);
