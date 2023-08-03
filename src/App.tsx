import React, { useState } from 'react';
import CardArea from './components/cardArea';
import NavBar from './components/navbar';
import editIcon from './assets/edit-icon.png';

function App() {
  const [appData, setAppData] = useState({
    mainTitle : {
      title : 'Test Board',
      edit : false,
      save : () => {
        let txt = document.getElementById("cardTitle")! as HTMLInputElement
        let mainTitle = {title: txt.value, edit : false, save: appData.mainTitle.save}
        setAppData({mainTitle}) 
      }
    },
  })

  let data  = {
    cardData: {
      text : "Testingggg",
      description: "%%%%%%%%%%%%%%%%%%%",
      tags: ['VueJS', 'SQL', 'Javascript'],
      owner : "Aaron"
    },
    cardData2: {
      text : "Other Teste 2",
      description: "&&&&&&&&&&&&&&&&&&&&&&",
      tags: ['Important', 'Team', 'Paycheck'],
      owner : "Aaron"
    },
    cardData3: {
      text : "Run it",
      description: "@@@@@@@@@@@@@@@@@",
      tags: ['USA', 'BR', 'CHINA'],
      owner : "Aaron"
    },
  }
  let initialObject = {
    configureObject : {
      name : "Planing",    
      tasks : [data.cardData, data.cardData2]
    },
    configureObject2 : {
      name : "To Do", 
      tasks : [data.cardData3]
    },
    configureObject3 : {
      name : "Done",    
      tasks : []
    },
    configureObject4 : {
      name : "Pending",
      tasks : []
    }
  }
  let arr : Array<typeof initialObject.configureObject>
  = [initialObject.configureObject, initialObject.configureObject2, initialObject.configureObject3, initialObject.configureObject4] 
  
  return (
    <div className="App">    
      <NavBar/>
      <div id="body" className='bg-red-900 w-screen'>        
        <div className='p-7 text-white font-bold w-full bg-zinc-700'>                         
        {
          appData.mainTitle.edit ?
          (                                        
            <div>
                <input 
                  title="cardTitle" 
                  id="cardTitle" 
                  type="text" 
                  defaultValue={appData.mainTitle.title}
                  className="rounded p-1"
                />
                <div className="flex w-32">
                    <div 
                      className="btn select-none w-1/2 text-xl p-2 rounded bg-sky-500 hover:bg-sky-400" 
                      onClick={appData.mainTitle.save}
                    >
                      Save
                    </div>
                    <div 
                      className="btn select-none w-1/2 text-xl p-2 rounded bg-zinc-500 hover:bg-zinc-400" 
                      onClick={()=>{
                        let mainTitle = {title: appData.mainTitle.title, edit : false, save: appData.mainTitle.save}
                        setAppData({mainTitle})
                      }}
                    >
                      Close
                    </div>
                </div>
            </div>                                    
          )
          :
          (
            <div className='flex'>
              <div className='btn w-10 rounded hover:bg-gray-400' onClick={()=>{
                let mainTitle = {title: appData.mainTitle.title, edit : true, save: appData.mainTitle.save}
                setAppData({mainTitle})
              }}>
                <img alt='edit' src={editIcon} className='w-10 h-10 p-1 invert justify-right'/>
              </div>
              <div className='select-none text-4xl ml-3'>{appData.mainTitle.title}</div>
            </div>
          )
        }
        </div>
        <div className='flex w-full h-screen bg-gray-800 p-3'>          
          {
            arr.map((config)=>{
              return (
                <CardArea
                  key={config.name}          
                  configObject={config}
                />                  
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;