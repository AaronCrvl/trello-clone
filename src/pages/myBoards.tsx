import React, { KeyboardEvent } from 'react';
import { NavigateOptions } from 'react-router-dom';
import { configObjectType } from '../types/configObjectType';
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import './css/main.css';

function MyBoards() {    

    // Hooks    
    const nav = useNavigate()
    const [myBoards, setMyBoards] = React.useState<configObjectType[]>()
    React.useEffect(()=> {
        let arr : any[] = []
        let quadro = ''
        
        if(myBoards === undefined) {      
            for(let i = 0; i < 3; ++i) {                   
                if(localStorage.getItem(`quadro${i}`) !== null) {
                    quadro = JSON.parse(localStorage.getItem(`quadro${i}`)!)                                
                    arr.push(quadro)                
                }                                            
            }
            setMyBoards(arr) 
        }                      
    }, [myBoards])        
    
    // Functions
    function navigateToEditPage(data : configObjectType) {
        let options : NavigateOptions =  {
            state : {
                myboard : true,
                data : JSON.stringify(data)
            },                        
        }
        nav(`/editBoard/${-1}`, options)
    }

    function deleteSaveBoard(data : configObjectType) {
        for(let i = 0; i < 3; ++i) {                   
            if(localStorage.getItem(`quadro${i}`) !== null) {
                if((JSON.parse(localStorage.getItem(`quadro${i}`)!) as configObjectType).configObject?.uniqId
                    === data.configObject?.uniqId) {
                    localStorage.removeItem(`quadro${i}`)
                    alert('Board excluded sucessfully! Reloading page.')                    
                    window.location.reload()
                    return 
                }                
            }                                            
        }                
    }
    
    // Jsx
    return (                            
        <div id='myBoardsBg' className='bg-zinc-700 w-full h-screen'>    
            <div className='ml-24 p-3'>
                <h2 className='text-white text-6xl font-bold p-5 mb-10'>My Boards</h2>
                <div className='ml-12 h-96 w-fit flex gap-24 p-20 rounded-lg'>
                    <div>
                        <h1 className='text-white text-2xl font-bold mb-10'>Saved Board</h1>
                        <ul className=''>
                            {myBoards &&                                                                    
                                myBoards.map(board => {                                        
                                    return ( 
                                        <div
                                            key={uniqid()} 
                                            className='flex mb-2'>
                                            <li                                                 
                                                className='cursor-pointer select-none text-xl text-white rounded-lg p-2 hover:text-white mb-2 transition ease-in-out bg-yellow-600 hover:-translate-y-1 hover:scale-110 hover:bg-amber-600 duration-100'
                                                onClick={()=> navigateToEditPage(board)}
                                                onKeyDown={(event : KeyboardEvent) => {
                                                    if(event.key === 'Enter') {
                                                        navigateToEditPage(board)
                                                    }
                                                }}
                                            >                                                
                                                Go📋 - {board?.configObject?.uniqId}    
                                            </li>           
                                            <button 
                                                className='ml-5 text-white text-2xl font-bold rounded-lg bg-red-800 p-2 hover:bg-red-600 transition ease-in-out bg-yellow-600 hover:-translate-y-1 hover:scale-110 hover:bg-amber-600 duration-100'
                                                onClick={()=>deleteSaveBoard(board)}
                                                onKeyDown={(event : KeyboardEvent) => {
                                                    if(event.key === 'Enter') {
                                                        deleteSaveBoard(board)
                                                    }
                                                }}
                                            >
                                                X
                                            </button>
                                        </div>                              
                                    )                                        
                                })              
                            }
                            {!myBoards &&                                                                       
                                <div className='flex mb-2'>
                                    Create board and save them to show here.
                                </div>                                
                            }
                        </ul>
                    </div>                        
                </div>
            </div>            
        </div>              
    )    
}

export default MyBoards; // !_☄