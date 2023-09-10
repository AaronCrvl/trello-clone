import React from 'react';
import { Link } from 'react-router-dom';
import './css/main.css'

function StartPage() {
    return (
        <React.Fragment>    
            <div id='startPageBg'>
                <div className='w-auto h-screen overflow-y-hidden'>                        
                    <h1 
                        className='select-none ml-24 mt-12 text-8xl text-white font-bold p-10 text-white'
                    >
                        Let's Start!
                    </h1>           
                    <div className='contents ml-32'>
                        <button className='select-none rounded-lg opacity-75 shadow-2xl ml-24 text-4xl text-white font-bold p-10 bg-transparent hover:opacity-100'>
                            <Link to={`/editBoard/${-1}`}>Create Empty Board📋</Link>
                        </button>   
                        <button className='select-none rounded-lg opacity-10 shadow-2xl ml-24 text-4xl text-white font-bold p-10 bg-transparent hover:opacity-100'>
                            <Link to=''>My Boards📋</Link>
                        </button>                
                    </div> 
                </div>
            </div>        
        </React.Fragment>
    )    
}

export default StartPage; // !_☄