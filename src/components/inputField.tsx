import React from "react";
import { inputType } from '../types/inputType';

function InputField ({ title, save, cancel } : inputType) {

    return(
        <div>
            <input 
            title="cardTitle" 
            id="cardTitle" 
            type="text" 
            defaultValue={title}
            className="rounded p-1"
            />
            <div className="flex w-32">
                <div className="btn select-none w-1/2 text-xl p-2 rounded bg-sky-500 hover:bg-sky-400" onClick={()=>save}>Save</div>
                <div className="btn select-none w-1/2 text-xl p-2 rounded bg-zinc-500 hover:bg-zinc-400" onClick={()=>cancel}>Close</div>
            </div>
        </div>   
    )
}

export default InputField;