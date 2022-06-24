import React, {useContext} from "react";
// import './App.css';
import Home from "./Home";
// // import { Link } from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import {BrowserRouter, Redirect} from "react-router-dom";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthContext from "./store/auth-context";
import {Reddit} from "@mui/icons-material";
import Quiz from "./components/Quiz";
// // import ButtonAppBar from "./components/ButtonAppBar";
//
//
//
function App() {
    const useCtx = useContext(AuthContext);
    return (
    <div className="App">

        <BrowserRouter>
            <ButtonAppBar></ButtonAppBar>
            {/*<Home></Home>*/}
            <Routes>
                <Route path="/" element={<Home />}/>
                {useCtx.isLoggedIn && <Route path="/profile" element={<Profile/>}/>}
                {!useCtx.isLoggedIn && <Route path="/login" element={<SignIn/>}/>}
                <Route path="/quiz" element={<Quiz/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
     </div>
  );
}

export default App;
