import React, { KeyboardEvent } from "react";
import BoardContainer from "./boardContainer";
import { initialDataType } from "../types/initialDataType";
import { configObjectType } from "../types/configObjectType";

function EditArea ({ configObj } : initialDataType) {                       
    const [showTopOptions, setShowTopOptions] = React.useState(false)                        

    // Functions ------------------------------>
    function saveBoards() {
        for(let i = 0; i < 3; ++i) {  
            if(localStorage.getItem(`quadro${i}`) !== null) {
                if(JSON.parse(localStorage.getItem(`quadro${i}`)!)[0].configObject.uniqId
                    === configObj.configs[0].configObject?.uniqId) {
                    localStorage.setItem(`quadro${i}`, JSON.stringify(configObj.configs))    
                    alert('Board updated sucessfully!')                                        
                    return 
                }                
            }    
        }

        // conter criação de mais de 3 quadros
        let j = 0, getOut = false, boards = [localStorage.getItem('quadro0'), localStorage.getItem('quadro1'), localStorage.getItem('quadro2')] 
        if(boards[0] !== null && boards[1] !== null && boards[2] !== null) {
            alert('The 3 custom board allowed for the user is already created, edit one of then.')   
            return 
        }

        boards.forEach(board => {            
            if(board === null && !getOut) {            
                localStorage.setItem(`quadro${j}`, JSON.stringify(configObj.configs))                                 
                alert('Board saved sucessfully, check out my boards page.')
                getOut = true
            } 
            ++j;   
        })                                
    }

    // Jsx ------------------------------>
    return (
        <div className="editArea">    
            <div className="flex shadow-2xl">   
                {/* Boards, Card Area, Cards */}
                <div id="externalBoardArea" className="h-full w-full overflow-x-hidden">     
                    <div 
                        className="transition-colors delay-1000 duration-1000"
                        onMouseEnter={()=>setShowTopOptions(true)}
                        onMouseLeave={()=>setShowTopOptions(false)}
                    >
                        {/* Board Edit Options */}
                        {
                            showTopOptions ?
                            (
                                <div className="flex text-center items-center justify-center w-full bg-zinc-800 p-5 text-gray-300 font-bold">
                                    <div 
                                        className="rounded text-center text-yellow-200 ml-10 p-1 select-none hover:cursor-pointer transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 hover:text-white duration-100"                                        
                                        onClick={()=> saveBoards()}
                                        onKeyDown={(event : KeyboardEvent) => {
                                            if(event.key === 'Enter') {
                                                saveBoards()
                                            }
                                        }}
                                    >
                                        Save Board
                                    </div>                                                                   
                                </div>
                            )
                            :
                            (
                                <div className="flex w-full bg-zinc-800 text-center p-2 text-gray-300 font-bold">
                                    <p className="w-full opacity-50 text-center text-sm">Expand Options</p>                                    
                                </div>
                            )
                        }   
                    </div>     
                    {/* Board Area */}
                    <div className="w-full">
                        <BoardContainer
                            configObj={configObj}
                        />                            
                    </div>                     
                </div>
            </div>                    
        </div>
    )
}

export default EditArea; // !_☄