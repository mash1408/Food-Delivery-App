import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import MenuList from "./components/menu-list.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Logout from './components/logout'
import CookList from './components/cook-list.component';
import CookMenu from './components/cook-menu.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <br/>
        <Route path="/" exact component={CookList}></Route>
        <Route path="/cooks/:cookid" exact component={CookMenu}/>
        <Route path="/menu" exact component={MenuList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/logout" exact component={Logout}/>
      </Router>
    </div>
  );
}

export default App;
