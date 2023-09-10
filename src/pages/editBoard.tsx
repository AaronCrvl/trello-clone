import React from 'react';
import { configObjectType } from "../types/configObjectType";
import { useLoaderData } from 'react-router-dom';
import EditAreaControl from '../components/editArea';

function EditBoard() {           

    // get loader request data 
    const loaderData = useLoaderData();
    const rawData = { boardName: '', configs: loaderData as Array<configObjectType>  } 

    return (
        <div>
            <EditAreaControl 
                configObj={rawData}
            />
        </div>
    )    
}

export default EditBoard; // !_☄