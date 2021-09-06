import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import MenuList from "./components/menu-list.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <br/>
        <Route path="/home/menu" exact component={MenuList}/>
      </Router>
    </div>
  );
}

export default App;
