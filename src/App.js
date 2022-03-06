import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Details from './Others/Details.js'
import ThemeContext from "./Others/Themecontext.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Search from "./Pages/Search"


const App = ()=>{
    const theme = useState("#cf2e2e");
    return(
        <Router >
            <ThemeContext.Provider value={theme}>
        <div>
        <header><Link to="/">Adopt Me!</Link></header>
            <Routes>
                <Route exact  path='/' element={<Search/>}/>
                <Route exact path='/details/:id' element={<Details/>}/>
            </Routes>
        </div>
        </ThemeContext.Provider>
        </Router>
    )
}
ReactDOM.render( <App />, document.getElementById("root"));
