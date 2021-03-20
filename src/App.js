import logo from './logo.svg';
import './App.css';
import Login from './Login';
import LoginClass from './LoginClass';
import TestClass from './TestClass'
import { BrowserRouter ,Route, Switch } from 'react-router-dom';

function App() {
  // const name="HELLO WORLD"
  return (
    <div className="App">
      {/* <h1>{name}</h1> */}
     < BrowserRouter>
       <Switch>

            <Route exact={true} path="/">
            <LoginClass></LoginClass>
        
            </Route>
            <Route path="/home">
            <LoginClass></LoginClass> 
            </Route>
            <Route exact={true} path="/login2">
            <Login></Login>
            </Route>

        </Switch>
    </BrowserRouter>
       
      {/* <TestClass></TestClass> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
