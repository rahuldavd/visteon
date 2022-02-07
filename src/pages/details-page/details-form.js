import React, { useState } from 'react';  
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

function DetailsForm(props) {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(props && props.selectedRowValue && props.selectedRowValue.listAction[0] && props.selectedRowValue.listAction[0].firstName ? props.selectedRowValue.listAction[0].firstName : '');
    const [lastName, setLastName] = useState(props && props.selectedRowValue && props.selectedRowValue.listAction[0] && props.selectedRowValue.listAction[0].lastName ? props.selectedRowValue.listAction[0].lastName : '');
    const updatedValueFirst = (e) => {
        setFirstName(e.target.value);
    };
    const updatedValueLast = (e) => {
        setLastName(e.target.value);
    };
    const submitDetailsChange = () => {
        let toUpdate = {
            firstName: firstName, lastName: lastName
        }
        dispatch({
            type: 'EDIT_LIST',
            payload: toUpdate
        });
    };
    return(
        <div style={{display: 'inline-grid', width: '300px'}}>
            {props &&
            props.selectedRowValue &&
            props.selectedRowValue.listAction[0] && <>
                <FormControl>
                    <InputLabel htmlFor="first-name">First Name</InputLabel>
                    <Input id="first-name" type="text" value={firstName} onChange={updatedValueFirst} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="last-name">Last Name</InputLabel>
                    <Input id="last-name" type="text" value={lastName} onChange={updatedValueLast} />
                </FormControl> 

                <Button variant="contained" onClick={submitDetailsChange}>Submit</Button>
            </>}
        </div>
    )
}

export default DetailsForm;
