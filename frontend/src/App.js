import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import MenuList from "./components/menu-list.component";
import Login from "./components/login.component";
import Register from "./components/register.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <br/>
        <Route path="/home/menu" exact component={MenuList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
      </Router>
    </div>
  );
}

export default App;
