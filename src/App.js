import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import LoginClass from './LoginClass';
import TestClass from './TestClass'
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import HomeClass from './HomeClass';

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
            <HomeClass></HomeClass>
            </Route>

            <Route path="/login2">
            <Login></Login>
            </Route>

            
            <Route path="/home2">
            <Home></Home>
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
