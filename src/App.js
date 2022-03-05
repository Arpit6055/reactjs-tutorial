import {React, useState} from "react";
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
    const  theme = useState('blue')
    return(
        <Router basename='/'>
            <ThemeContext theme={theme}>
        <div>
        <header><Link to="/">Adopt Me!</Link></header>
            <Routes>
                <Route exact path='/' element={<Search/>}/>
                <Route  path='/details/:id' element={<Details/>}/>
            </Routes>
        </div>
        </ThemeContext>
        </Router>
    )
}
ReactDOM.render( <App />, document.getElementById("root"));
