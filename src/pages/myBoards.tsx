import React from 'react';
import { useNavigate } from 'react-router-dom';
import SystemBoardTemplates from '../types/enums/SystemBoardTemplates';

function MyBoards() {    
    const navigate = useNavigate()    
    const myBoards : any[] = []
    const templates = [
        [0,'Project Managment'],
        [1,'Habit Control'], 
        [2,'Editorial Calendar'], 
        [3,'Integration of New Employees']
    ]                
    const appBoardTemplates = new SystemBoardTemplates()

    function navigateToBoardTemplateEdit(template : any) {
        
        if (appBoardTemplates.eBoardsTemplates.hasOwnProperty(template)) {
            appBoardTemplates.getBoardTemplateID(template).then(templateID => {                                 
                navigate('/editBoard', {
                    state: {
                      template: templateID,
                    }
                })             
            })
        }        
    }

    return (                
            <div className='bg-zinc-700 w-full h-screen'>
                -                
                <div className='ml-24 mt-32'>
                    <h2 className='text-white text-6xl font-bold p-5 mb-10'>Templates</h2>
                    <div className='ml-12 flex gap-24'>
                    {
                        templates.map(template => {
                            return (                                                            
                                <div 
                                    className='select-none ease-in-out rounded-lg border-2 p-10 w-fit h-fit text-white hover:bg-amber-700 hover:cursor-pointer hover:border-0'
                                    onClick={()=>navigateToBoardTemplateEdit(template[0])}
                                >                             
                                    {template[1]}                          
                                </div>
                            )
                        })              
                    }
                    </div>
                </div>

                <div className='ml-24 mt-32'>
                    <h2 className='text-white text-6xl font-bold p-5 mb-10'>Created Boards</h2>
                    <div className='ml-12 flex gap-24'>
                    {
                        myBoards.map(board => {
                            return (                            
                                <div className='select-none ease-in-out rounded-lg border-2 p-10 w-fit h-fit text-white hover:bg-cyan-700 hover:cursor-pointer hover:border-0'>                             
                                    {board}                          
                                </div>
                            )
                        })              
                    }
                    </div>
                </div>
            </div>        
    )    
}

export default MyBoards;