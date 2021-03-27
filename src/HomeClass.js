import React, {Component} from 'react';
import './Home.css';
import Bankservice from './services/bankservice';
import { withRouter} from 'react-router-dom';

class HomeClass extends Component{

    state={
        username:"",
        password:"",
        amount:[]
        }
        amount= (event)=>{

            this.setState({
                amount:parseInt(event.target.value)
            })
        }
            
        
        handleDeposit = (event)=>{

            event.preventDefault(); //to prevent page reload 
            alert("deposited");
            //alert(this.state.amount)

            
            Bankservice.Deposit(this.state.amount)
            .then(data=>{
                
                alert(data.data.message);
                //console.log(this.props.history)
               this.props.history.push('/login2');
               
             })
           
        
        }

        handleWithdrawal = (event)=>{

            event.preventDefault(); //to prevent page reload 
            alert("withdraw");

              
            Bankservice.Withdrawal(this.state.amount)
            .then(data=>{
                
                alert(data.data.message);
                //console.log(this.props.history)
               this.props.history.push('/login2');
               
             })
        
        }



    render(){
        return  <div class="home">
  
{/* <a routerLink="/history">History</a> */}

        <h1 style={{textAlign:'center',paddingTop:"8%",color:"white"}}>WELCOME TO SBI BANK</h1>  
        <form>
              
            <div className="form-group">
           <label for="" className="form-label">username</label>
           <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
           <div id="uinvalid" ></div>
           </div>
   
           <div className="form-group">
           <label for="" className="form-label">Password</label>
           <input type="password" className="form-control" id="password" />
           <div id="pinvalid" className="form-text"></div> 
           </div>

           <div className="form-group">
            <label for="" className="form-label">amount</label>
            <input type="number"  onChange={this.amount} className="form-control" id="amt" />
            </div>
    

<button type="button" onClick={this.handleDeposit}className="btn btn-primary"  style={{marginLeft:"550px",marginTop:'3%',color:"black"}}>Deposit</button>
<button type="button" onClick={this.handleWithdrawal } className="btn btn-primary" style={{marginLeft:"6px",marginTop:'3%',color:"black"}}>Withdrawal</button>
           

         </form>

        
  </div>
        
    }
}
export default withRouter (HomeClass);