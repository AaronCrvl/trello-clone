import React, { useState } from 'react';
import CardArea from './cardArea';
import NavBar from './navbar';
import editIcon from '../assets/edit-icon.png'

function BoardArea(){
    const id = 'BoardAreaItem' + Math.random()
    const [appData, setAppData] = useState({
        mainTitle : {
          title : 'KanBan Board',
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
        <div id={id}>                
            <div id="body" className='bg-red-900 w-screen'>        
                <div className='p-7 text-white font-bold w-full bg-zinc-700'>                         
                {
                    appData.mainTitle.edit ?
                    (           
                        <div className="">                            
                            <div className="relative mb-3" data-te-input-wrapper-init>
                                <input                                    
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
                                    type="text"    
                                    placeholder='Change'                                                                     
                                    id="cardTitle" 
                                />
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >
                                    {appData.mainTitle.title} 
                                </label>
                            </div>
                            <div className="flex mt-1">
                                <div className="btn p-1 select-none rounded bg-sky-500 text-white text-lg mr-1" onClick={appData.mainTitle.save}>Save</div>
                                <div className="btn p-1 select-none rounded bg-zinc-500 text-white text-lg" onClick={()=>{                                    
                                    let mainTitle :typeof  appData.mainTitle = {title: appData.mainTitle.title, edit: false, save: appData.mainTitle.save}
                                    setAppData({mainTitle})
                                }}>Close</div>
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

export default BoardArea;