import React from 'react';
import { configObjectType } from "../types/configObjectType";
import { useLoaderData } from 'react-router-dom';
import EditAreaControl from '../components/editArea';

function EditBoard() {           

    const myBoards = React.useState<Array<configObjectType>>()

    // get loader request data 
    const loaderData = useLoaderData();
    const loadedObj = { boardName: '', configs: loaderData as Array<configObjectType>  } 

    return (
        <React.Fragment>
            <EditAreaControl configObj={loadedObj} />
        </React.Fragment>
    )    
}

export default EditBoard; // !_☄