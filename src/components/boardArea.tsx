import React from 'react';
import CardArea from './cardArea';
import editIcon from '../assets/edit-icon.png'
import { initialDataType } from '../types/initialDataType';
import { configObjectType } from '../types/configObjectType';

function BoardArea({ configObj } : initialDataType) {    
    const id = 'BoardAreaItem' + Math.random()    
    const excludeAreaId : string = 'ExcludeArea' + Math.random()       
    const cardAreaId : string = 'CardAreaOnBoad' + Math.random()       

    const [arr, setArr] = React.useState<Array<configObjectType>>(configObj.configs)
    const [dropConfig, setDropConfig] = React.useState<HTMLElement>()       
    
    // Component dynamic data
    const [board, setBoard] = React.useState({
        mainTitle : {
          title : 'New 📋'  ,
          edit : false,
          save : () => {
            let txt = document.getElementById("cardTitle")! as HTMLInputElement
            let mainTitle = {title: txt.value, edit : false, save: board.mainTitle.save}
            setBoard({mainTitle}) 
          }
        },
    })         

    function addNewCardArea () {   
        if(configObj.configs.length < 8) {
            let newArea : configObjectType = {
                configObject: {
                    name : '',
                    ready : false, 
                    tasks : []
                }
            }      
            configObj.configs.push(newArea)                 
            setArr(configObj.configs)        

            let mainTitle :typeof  board.mainTitle = {title: board.mainTitle.title, edit: false, save: board.mainTitle.save}
            setBoard({mainTitle})

            console.log('Afte! add: ' + configObj.configs)            
        }
        else {            
            alert('You can create a max of 8 card areas!')
        }
    }    

    // !_🖥 
    // this fix the configObject useState problem.
    // when a template is selected the board area don't change automatically 
    // because of the asynchronous hook call
    React.useEffect(()=> {            
        addNewCardArea()
    }, [configObj])

    // Exclude area drop config
    React.useEffect(() : any => {
        setDropConfig(document.getElementById(excludeAreaId)!)
        if(dropConfig !== undefined)
        {
            dropConfig.ondragover = function (e) {                
                e.preventDefault()
                dropConfig.style.border = "4px solid white"        
            }

            dropConfig.ondragleave = function (e) {                
                e.preventDefault()
                dropConfig.style.border = ""
            }

            dropConfig.ondrop = function (e) : void {                                        
                let name = e.dataTransfer!.getData("cardAreaName")
                if(name !== undefined) {                                                                                                                                                             
                    configObj.configs.forEach((config : configObjectType) : void => {                        
                        if ( 
                            config !== undefined 
                            && config.configObject !== undefined 
                            && config.configObject.name === name ) 
                        {                            
                            let index : number = configObj.configs.findIndex((x) => { 
                                return (x !== undefined && x.configObject != undefined) ? x.configObject.name === name : 0                                
                            })

                            if(index > 0) {                        
                                // use this instead of delete, because "delete arr[index]" set arr[index] to undefined
                                // using "delete" create future problems for card manipulation on Card Area     
                                configObj.configs.splice(index, 1) 
                                setArr(configObj.configs)                                   
                            }
                            else {                         
                                console.log('configObj not found')                                                                                    
                                return 
                            }                        

                            dropConfig.style.border = ""                                                          
                            return      
                        }                        
                    })
        
                    let mainTitle : typeof board.mainTitle = {title: board.mainTitle.title, edit: false, save: board.mainTitle.save}
                    setBoard({mainTitle})
                }
            }            
        }
    })   

    return (
        <div id={id}>                
            <div className='w-full'>        
                {/* Board Title */}
                <div className='flex w-full p-7 text-white font-bold bg-zinc-700'>                 
                    {
                        // Edit title
                        board.mainTitle.edit ?
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
                                        {board.mainTitle.title} 
                                    </label>
                                </div>
                                <div className="flex mt-1">
                                    <div className="btn p-1 select-none rounded bg-sky-500 text-white text-lg mr-1" onClick={board.mainTitle.save}>Save</div>
                                    <div className="btn p-1 select-none rounded bg-zinc-500 text-white text-lg" onClick={()=>{                                    
                                        let mainTitle : typeof board.mainTitle = {title: board.mainTitle.title, edit: false, save: board.mainTitle.save}
                                        setBoard({mainTitle})
                                    }}>Close</div>
                                </div>
                            </div>                                         
                        )
                        :
                        (
                            // Title
                            <div className='flex w-fit'>
                                <div className='btn w-10 h-12 rounded' onClick={()=>{
                                        let mainTitle = {title: board.mainTitle.title, edit : true, save: board.mainTitle.save}
                                        setBoard({mainTitle})
                                    }}>
                                    <img 
                                        alt='edit' 
                                        src={editIcon} 
                                        className='w-10 h-10 p-1 justify-right transition ease-in-out delay-350 bg-zinc-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-100'
                                    />
                                </div>
                                <div className='select-none text-4xl ml-3'>{board.mainTitle.title}</div>
                                <div 
                                    className="select-none text-md ml-16 h-12 ml-2 hover:bg-zinc-600 p-3 opacity-75 hover:cursor-pointer transition ease-in-out delay-350 bg-zinc-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-100'" 
                                    onClick={()=>addNewCardArea()}
                                >
                                    Add Area
                                </div>                                                                                    
                            </div>
                        )
                    }
                    <div 
                        id={excludeAreaId}
                        className="float select-none text-center h-24 w-24 bg-red-500 opacity-75 rounded text-white font-semibold ml-auto p-0 hover:cursor-pointer hover:bg-red-700"                                
                    >
                        <p className='p-3 text-sm font-bold'>
                            Drag Here to 
                            Exclude Area
                        </p>
                    </div> 
                </div>
                {/* Cards Area */}
                <div className='flex w-full h-screen bg-red-800'>          
                    <div id={cardAreaId} className='w-full p-5 flex bg-gray-800 h-full overflow-x-auto'>
                        {
                            arr.map((config : configObjectType) => {
                                return (                           
                                    <CardArea                                    
                                        key={'cArea' + Math.random()}          
                                        configObject={config.configObject}
                                    />                                              
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardArea; // !_☄