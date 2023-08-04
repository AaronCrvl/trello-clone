import React, { useState } from 'react';
import expandIcon from './assets/expand-icon.png'
import NavBar from './components/navbar';
import BoardArea from './components/boardArea';

function App() {
  const [showSideNav, setShowSideNav] = useState(false)  

  function changeBoardAreaOpacity(){    
    let div = document.getElementById('externalBoardArea')! as HTMLElement
    let icon = document.getElementById('expandIcon')! as HTMLElement
    showSideNav ? div.style.opacity = '100%' : div.style.opacity = '25%'
    showSideNav ? div.style.pointerEvents = '' : div.style.pointerEvents = 'none'    
    setShowSideNav(!showSideNav)
  }

  function sideNav () {
    let ml10 = 'flex ml-44', ml0 = 'flex ml-0',
    transitionListDiv = 'text-2xl select-none hover:cursor-pointer p-5 rounded transition ease-in-out delay-150 bg-zinc-600 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300'

    return(
      <div 
          className='nav space-y-8 w-auto h-screen bg-zinc-600 text-white text-lg font-bold'
        >            
        <div className={showSideNav ? ml10 : ml0}>          
          <img 
            id="expandIcon"
            alt='Expand' 
            src={expandIcon}
            className='rounded-full w-12 h-12 ml-5 mt-6 invert z-10 hover:cursor-pointer hover:bg-zinc-500 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
            onClick={changeBoardAreaOpacity}
          />
        </div>      
        {
          showSideNav ? 
          (
            <div>
              <p className='underline select-none text-xl font-bold ml-5 mb-10 text-orange-400'>Board Models</p>
              <ul className='space-y-8 p-5'>
                <li className={transitionListDiv}>Project Managment</li>
                <li className={transitionListDiv}>Habit Control</li>
                <li className={transitionListDiv}>Editorial Calendar</li>
                <li className={transitionListDiv}>Integration of New Employees</li>
              </ul>
            </div>
          )
          :
          (
            <div className='w-8'></div>
          )
        }          
      </div>   
    )
  }

  return (
    <div className="App">    
      <NavBar/>
      <div className='flex bg-zinc-800'>      
        {sideNav()}
        <div id="externalBoardArea">
          <BoardArea/>
        </div>   
      </div>
    </div>
  );
}

export default App;