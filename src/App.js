
import './App.css';
import Poll from "./Poll";
import React, {useState} from "react";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Questions from "./Questions";
import UpdatePoll from "./UpdatePoll";



function App() {

    return (
        <Router>
            <nav className="nav">
                <div className="navDiv">
                <Link to="/blogs">create poll</Link>
                </div >
                <div className="navDiv">
                    <Link to="/update">update</Link>
                </div>
                <div className="navDiv">
                <Link to="/">home</Link>
                </div>
                <div className="navDiv">
                <Link to="/login"> login</Link>
                </div>
                </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/blogs" element={<Poll />} />
                <Route path="/contact" element={<Questions />} />
                <Route path="/update" element={<UpdatePoll/>} />
                <Route path="/update/:id" element={<UpdatePoll/>} />

            </Routes>
        </Router>


    );
}

export default App;

const Layout = () =>{
    return(<h1>siema</h1>);
}