import React from 'react';
import { useLocation } from 'react-router-dom';
import EditAreaControl from '../controls/editAreaControl';

function EditBoard() {
    const location = useLocation()
    const [templateId, setTemplateId] = React.useState<Number>(-1)

    React.useEffect(() => {    
        if(location.state!= null && location.state.template != null) {
            setTemplateId(location.state.template === undefined ? -1 : location.state.template)                  
        }
    })

    return (
        <React.Fragment>
            {EditAreaControl(templateId!)}                            
        </React.Fragment>
    )    
}

export default EditBoard;