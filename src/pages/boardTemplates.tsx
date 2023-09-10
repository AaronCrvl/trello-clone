import React from 'react';
import { Link } from 'react-router-dom';
import './css/main.css'

function BoardTemplates() {                
    const templateDisplayConfig = [
        [0,'Management', 'Project Managment'],
        [1,'Personal', 'Habit Control'], 
        [2,'Calendar','Editorial Calendar'], 
        [3,'Human Resources','Integration of New Employees'],
        [4,'Management', 'Scrum Project Model'],
        [5,'Human Resources', 'Employee Manual'],      
        [6,'Personal', 'Family Management'], 
    ]                

    return (                            
        <div className='bg-zinc-700 w-full h-screen'>            
            <div id='boardTemplateBg'>    
                <div className='ml-24 p-3'>
                    <h2 className='text-white text-6xl font-bold p-5 mb-10'>Templates</h2>
                    <div className='ml-12 h-96 w-fit flex gap-24 p-20 rounded-lg'>
                        <div>
                            <h1 className='text-white text-2xl font-bold mb-10'>Management</h1>
                            <ul>
                                {
                                
                                    // Management
                                    templateDisplayConfig.map(template => {
                                        if(template[1] === 'Management') {
                                            return (  
                                                <li 
                                                    key={Math.random()}
                                                    className='text-xl text-white rounded-lg p-2 hover:text-white mb-2 transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-100'>
                                                    <Link id={Math.random().toString()} to={`/editBoard/${template[0]}`}>
                                                        <div>                             
                                                            {template[2]}                          
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })              
                                }
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-white text-2xl font-bold mb-10'>Human Resources Routine</h1>
                            <ul>
                                {
                                    // Human Resources
                                    templateDisplayConfig.map(template => {
                                        if(template[1] === 'Personal') {
                                            return (  
                                                <li 
                                                    key={Math.random()}
                                                    className='text-xl text-white rounded-lg p-2 hover:text-white mb-2 transition ease-in-out bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-100'>
                                                    <Link id={Math.random().toString()} to={`/editBoard/${template[0]}`}>
                                                        <div>                             
                                                            {template[2]}                          
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })              
                                }
                            </ul>
                        </div>
                        <div>      
                            <h1 className='text-white text-2xl font-bold mb-10'>Calendar / Timelapse</h1>          
                            <ul>
                                {
                                    // Calendar
                                    templateDisplayConfig.map(template => {
                                        if(template[1] === 'Calendar') {
                                            return (  
                                                <li 
                                                    key={Math.random()}
                                                    className='text-xl text-white rounded-lg p-2 hover:text-white mb-2 transition ease-in-out bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-100'>
                                                    <Link id={Math.random().toString()} to={`/editBoard/${template[0]}`}>
                                                        <div>                             
                                                            {template[2]}                          
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })              
                                }
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-white text-2xl font-bold mb-10'>Team Management</h1>
                            <ul>
                                {
                                    // Team Management
                                    templateDisplayConfig.map(template => {
                                        if(template[1] === 'Human Resources') {
                                            return (
                                                <li 
                                                    key={Math.random()}
                                                    className='text-xl text-white rounded-lg p-2 hover:text-white mb-2 transition ease-in-out bg-purple-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100'>
                                                    <Link id={Math.random().toString()} to={`/editBoard/${template[0]}`}>
                                                        <div>                             
                                                            {template[2]}                          
                                                        </div>
                                                    </Link>
                                                </li>  
                                            )
                                        }
                                    })     
                                            
                                }
                            </ul>
                        </div>
                    </div>
                </div>            
            </div>      
        </div>  
    )    
}

export default BoardTemplates; // !_☄