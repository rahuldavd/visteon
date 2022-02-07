import React, { useState } from 'react';  
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import ButtonSection from './button-section';

function FormComponent(props) {
    return(
        <div className="Login">
            <FormControl>
                <InputLabel htmlFor="email-input">Email address</InputLabel>
                <Input id="email-input" />
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
