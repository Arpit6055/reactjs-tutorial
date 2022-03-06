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
        <Router basename='/reactjs-tutorial/' >
            <ThemeContext.Provider value={theme}>
        <div>
        <header><Link to="/reactjs-tutorial/">Adopt Me!</Link></header>
            <Routes>
                <Route  path='/reactjs-tutorial/' element={<Search/>}/>
                <Route  path='/reactjs-tutorial/details/:id' element={<Details/>}/>
            </Routes>
        </div>
        </ThemeContext.Provider>
        </Router>
    )
}
ReactDOM.render( <App />, document.getElementById("root"));
