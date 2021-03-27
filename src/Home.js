import './Home.css';
import Bankservice from './services/bankservice';
import { useState, useEffect } from 'react';
import { useHistory,withRouter} from 'react-router-dom';


function Home(){
    const [amount,setAmount] = useState([]);

 const amountChange = (event)=>{

        setAmount(parseInt(event.target.value));
        
    }

  const history = useHistory();

  const handleDeposit = (event)=>{

        event.preventDefault(); //to prevent page reload 
        alert("deposited");
        

        Bankservice.Deposit(amount)
            .then(data=>{
                
                alert(data.data.message);

                console.log(history)
                history.push("/");
               
             })
      }

    const handleWithdrawal = (event)=>{

    event.preventDefault(); //to prevent page reload 
    alert("withdraw");
    

    Bankservice.Withdrawal(amount)
        .then(data=>{
            
            alert(data.data.message);

            console.log(history)
            history.push("/");
            
            })
    }   
    


    return<div class="home">
  
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
                <input type="number" onChange={amountChange} className="form-control" id="amt" />
                </div>
        
    
    <button type="button" onClick={handleDeposit} className="btn btn-primary"  style={{marginLeft:"550px",marginTop:'3%',color:"black"}}>Deposit</button>
    <button type="button" onClick={handleWithdrawal } className="btn btn-primary" style={{marginLeft:"6px",marginTop:'3%',color:"black"}}>Withdrawal</button>
               
    
             </form>
    
            
      </div>



}
export default withRouter (Home);
