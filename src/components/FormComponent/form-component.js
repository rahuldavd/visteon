import React, { useState } from 'react';  
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import ButtonSection from './button-section';

function FormComponent(props) {
    return(
        <div className="Login" style={{width: '100%', margin: '30px auto', justifyContent: 'center', display: 'inline-grid'}}>
            <FormControl>
                <InputLabel htmlFor="email-input">Email address</InputLabel>
                <Input id="email-input" type="email" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="input-password">Password</InputLabel>
                <Input id="input-password" type="password" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <ButtonSection signInclickAction={props.signInClick} />
        </div>
    )
}

export default FormComponent;
