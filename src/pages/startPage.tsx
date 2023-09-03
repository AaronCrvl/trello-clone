import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
    return (
        <React.Fragment>            
            <div className='bg-gradient-to-r from-zinc-900 to-cyan-400 to-cyan-300 w-auto h-screen overflow-y-hidden'>                        
                <h1 
                    className='select-none ml-24 mt-12 text-8xl text-white font-bold p-10 text-white'
                >
                    Let's Start!
                </h1>           
                <div className='ml-32'>
                    <button className='select-none rounded-lg opacity-75 shadow-2xl ml-24 text-4xl text-white font-bold p-10 bg-transparent hover:opacity-100'>
                        <Link to='/editBoard'>Create New Board📋</Link>
                    </button>                
                </div> 
            </div>
        </React.Fragment>
    )    
}

export default StartPage;