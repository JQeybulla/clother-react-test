import React from 'react';
// import ButtonAppBar from "./components/ButtonAppBar";
import SignIn from "./components/SignIn";
const styles = {
    textAlign: 'center'
}

function Home(props) {
    return (
        <div style={styles}>

            {/*<SignIn></SignIn>*/}
            <h1>Welcome to Clother</h1>
        </div>
    );
}

export default Home;