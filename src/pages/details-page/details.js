import React from 'react';  
import { useSelector } from 'react-redux';
import DetailsForm from './details-form';
function DetailsPage() {
    const selectedRowValue = useSelector((state) => state);
    return(
        <div>
            <DetailsForm selectedRowValue={selectedRowValue} />
        </div>
    )
}

export default DetailsPage;
