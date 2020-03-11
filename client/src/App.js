import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Header from "./components/Header"
import Search from "./pages/Search"
// import Wrapper from "./components/Wrapper"
// import Button from "./components/Button"
import API from "./utils/API";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Search}/>
        </Switch>
      </div>
    </Router>


  )
}


export default App;