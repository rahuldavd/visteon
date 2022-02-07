import React from 'react';
import Button from '@mui/material/Button';

function ButtonSection(props) {
    return(
        <section>
            <div>
                <Button variant="text">Recover Password</Button>
                <Button variant="text">Sign Up</Button>
            </div>
            <Button variant="contained" onClick={props.signInclickAction}>Sign In</Button>
        </section>
    )
}

export default ButtonSection;
