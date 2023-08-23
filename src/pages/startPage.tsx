import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
    return (
        <React.Fragment>
            <div className='bg-zinc-700 w-auto h-screen overflow-y-hidden'>
                <h1 
                    className='select-none animate-pulse ml-24 text-8xl text-white font-bold p-10 text-amber-600'
                >
                    Let's Start!
                </h1>
                <div 
                    className='ml-24 '
                >
                    <div 
                        className='btn font-bold opacity-70 select-none p-2 rounded w-fit mt-16 ml-32 text-white text-6xl hover:opacity-100 hover:cursor-pointer'                        
                    >
                        <Link to='/editBoard'>° Create New Board📋</Link>
                    </div>                
                    <React.Fragment>                    
                        <ul className='p-5 mt-8 list-disc ml-32 text-6xl text-white font-bold select-none'>
                            <li className='list-none opacity-25'>° Templates (In progress..)</li>
                            <li className='mt-5 cursor-pointer font-semibold cursor-pointer select-none text-2xl ml-24 opacity-25 hover:opacity-100 '>Project Management 📑</li>
                            <li className='cursor-pointer font-semibold cursor-pointer select-none text-2xl ml-24 opacity-25 hover:opacity-100 '>Habit Control 🏃</li>
                            <li className='cursor-pointer font-semibold cursor-pointer select-none text-2xl ml-24 opacity-25 hover:opacity-100 '>Editorial Calendar 📆</li>
                            <li className='cursor-pointer font-semibold cursor-pointer select-none text-2xl ml-24 opacity-25 hover:opacity-100 '>Integration of New Employees 👥</li>                   
                        </ul>           
                    </React.Fragment>     
                </div>  
            </div>
        </React.Fragment>
    )    
}

export default StartPage;