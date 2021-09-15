import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import MenuList from "./components/menu-list.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Logout from './components/logout'
import CookList from './components/cook-list.component';
import CookMenu from './components/cook-menu.component';
import Cart from './components/cart.component';
import orders from "./components/orders"
import home from "./components/home"
import MyComponent from "./components/orderDetails"
import AddDish from "./components/addDish"
import Menu from "./components/listMenu"
import Dashboard from './components/dashboard.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/add/Dish" exact component={AddDish}></Route>
        <Route path="/" exact component={home}></Route>
        <Route path="/cooks/:cookid" exact component={CookMenu}/>
        <Route path="/menu" exact component={MenuList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/orders" exact component={orders}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/logout" exact component={Logout}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/test" exact component={Menu}/>
        <Route path="/dashboard" exact component={Dashboard}/>
      </Router>
    </div>
  );
}

export default App;
