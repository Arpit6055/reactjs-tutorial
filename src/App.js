import React from "react";
import ReactDOM from "react-dom";
import Details from './Others/Details.js'
import { StrictMode } from "react/cjs/react.development";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Search from "./Pages/Search"

const App = ()=>{
    return(
        <Router>
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
ReactDOM.render(<StrictMode> <App /> </StrictMode>, document.getElementById("root"));
