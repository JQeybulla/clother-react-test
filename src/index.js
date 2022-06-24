import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {
    Routes,
    Route,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ButtonAppBar from "./components/ButtonAppBar";
import AuthContext, {AuthContextProvider} from "./store/auth-context";
import Profile from "./components/Profile";



const root = ReactDOM.createRoot(document.getElementById('root'));
// const useCtx = useContext(AuthContext);

root.render(

    <AuthContextProvider>
        <App/>
    </AuthContextProvider>
    // <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
