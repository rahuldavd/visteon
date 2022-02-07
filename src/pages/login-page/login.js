import React from 'react';  
import { useNavigate } from "react-router-dom";
import FormComponent from '../../components/FormComponent/form-component';

function LoginPage() {
    let navigateState = useNavigate();
    let navigateTo = "/details-page";
    const signInClick = () => {
        console.log("sign in clicked");
        navigateState(navigateTo);
    }
    return(
        <div>
            <FormComponent signInClick={signInClick} />
        </div>
    )
}

export default LoginPage;
