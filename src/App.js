import React from "react";
import ReactDOM from "react-dom";
import Details from './Others/Details.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Search from "./Pages/Search"

const App = ()=>{
    return(
        <Router basename='/reactjs-tutorial'>
        <div>
        <header><Link to="/">Adopt Me!</Link></header>
            <Routes>
                <Route exact path='/' element={<Search/>}/>
                <Route  path='/details/:id' element={<Details/>}/>
            </Routes>
        </div>
        </Router>
    )
}
ReactDOM.render( <App />, document.getElementById("root"));
