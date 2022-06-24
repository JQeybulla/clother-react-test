import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../store/auth-context";

const link_stye = {
    color:'white',
}

export default function ButtonAppBar() {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    console.log(isLoggedIn)

    const logoutHandler = () => {
        authCtx.logout()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{color: 'white'}}>Clother</Link>
                    </Typography>
                    {/*{<Button color="inherit"><Link to="/profile" style={link_stye}>Profile</Link></Button>}*/}
                    {!isLoggedIn && <Button color="inherit"><Link to="/login" style={link_stye}>Login</Link></Button>}
                    {!isLoggedIn && <Button color="inherit"><Link to="/signup" style={link_stye}>Sign Up</Link></Button>}
                    {isLoggedIn && <Button color="inherit"><Link to="/profile" style={link_stye}>Profile</Link></Button>}
                    {isLoggedIn && <Button onClick={logoutHandler} color="inherit" style={link_stye}>Logout</Button>}
                    {isLoggedIn && <Button color="inherit"><Link to="/quiz" style={link_stye}>Take a quiz</Link></Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
