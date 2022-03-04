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
           <h1><Link to="/">Adopt Me!</Link></h1>
            <Routes>
                <Route exact path='/' element={<Search/>}/>
                <Route  path='/details/:id' element={<Details/>}/>
            </Routes>
        </div>
        </Router>
    )
}
ReactDOM.render(<StrictMode> <App /> </StrictMode>, document.getElementById("root"));
