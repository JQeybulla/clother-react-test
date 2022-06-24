import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import {Link as Ln, useNavigate} from "react-router-dom";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from "./ButtonAppBar";
import {useState, useContext} from "react";
import AuthContext from "../store/auth-context";
import authContext from "../store/auth-context";
// import { useHistory } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Quiz() {
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            age: data.get('age'),
            weight: data.get('weight'),
            height: data.get('height'),
        });
        // getting the data from the form
        const age = data.get('age');
        const weight = data.get('weight');
        const height = data.get('height');
        const token = localStorage.getItem('token');
        // const password2 = data.get('password2');

        setIsLoading(true);
        fetch('http://159.89.98.254:1337/dj-rest-auth/user-detail/',
            {
                method: 'PATCH',
                body: JSON.stringify({
                    age: age,
                    weight: weight,
                    height: height
                }),
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Token ${token}`
                }
            }
        ).then(res => {
            setIsLoading(false);
            if (res.ok){
                return res.json().then(data=>{
                    // console.log(data.key)
                    navigate("/profile")
                })

            }else {
                return res.json().then(data => {
                    console.log(data)
                    alert("Something is wrong: Email or password might be wrong, or email might exist")
                })
            }
        })
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Quiz
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="age"
                            label="Your age"
                            name="age"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="weight"
                            label="Your weight (kg)"
                            type="integer"
                            id="weight"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="height"
                            label="Your height (sm)"
                            type="integer"
                            id="height"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>

                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}