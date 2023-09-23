import React from "react"
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MyRouter from '../../page/MyRouter'

function App() {
    return (
        <div className = '' >
            <Routes>
                <Route path = "/*" element = { <MyRouter /> } />
            </Routes>
        </div>
    );
}

export default App;
