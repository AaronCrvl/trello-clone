import React from 'react';
import { configObjectType } from "../types/configObjectType";
import { useLoaderData } from 'react-router-dom';
import EditAreaControl from '../components/editArea';
import { useLocation } from 'react-router-dom';

function EditBoard() {           
    const location = useLocation()        
    const loaderData = useLoaderData() // get loader request data         
    const myboard = location.state === null ? false : true
    const loadedObj = myboard ?         
        { boardName: 'My Board🦘', configs: (JSON.parse(location.state.data) as configObjectType[]) }        
        :{ boardName: '', configs: loaderData as Array<configObjectType> } 

    return (
        <React.Fragment>
            <EditAreaControl configObj={loadedObj} />
        </React.Fragment>
    )    
}

export default EditBoard; // !_☄