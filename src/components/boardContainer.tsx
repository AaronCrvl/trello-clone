import React from 'react';
import CardContainer from './cardContainer';
import editIcon from '../assets/edit-icon.png'
import trashIcon from '../assets/trashcan-icon.png';
import { initialDataType } from '../types/initialDataType';
import { configObjectType } from '../types/configObjectType';
import { useRef, useMemo, useState } from "react";
import './css/main.css';

function BoardContainer({ configObj } : initialDataType) {    
    // Id's ------------------------------>
    const id = React.useMemo(()=> 'BoardAreaItem' + Math.random(), [])
    const excludeAreaId : string = useMemo(()=> 'ExcludeArea' + Math.random(), [])    
    const cardAreaId : string = useMemo(()=> 'CardAreaOnBoad' + Math.random(), [])    

    // Refs ------------------------------>
    const boardTitleInputRef = useRef(null)
    const excludeDivRef = useRef(null)
    const cardContainerDivRef = useRef(null)
    const cardContainer_AreaDivRef = useRef(null)

    // Hooks ------------------------------> ------------------------------>
    const [isPending, startTransition] = React.useTransition();    
    const [arr, setArr] = useState<Array<configObjectType>>(configObj.configs)
    const [excludeDropConfig, setExclusionDropConfig] = useState<HTMLElement>()           
    const [cardContainerDropConfig, setCardContainerDropConfig] = useState<HTMLElement>()      
    
    const [board, setBoard] = useState({ // Component dynamic data
        mainTitle : {
          title : 'New Board🏂',
          edit : false,
          save : () => {
            let txt = boardTitleInputRef.current! as HTMLInputElement
            let mainTitle = {title: txt.value, edit : false, save: board.mainTitle.save}
            setBoard({mainTitle}) 
          }
        },
    })         

    // Functions ------------------------------>
    function addNewCardArea () {   
        startTransition(()=> {            
            if(configObj.configs.length < 15) // ⚠ ..... define dynamic length size is pending
            {
                let newArea : configObjectType = {
                    configObject: {
                        name : '',
                        boardColor: configObj.configs[0].configObject.boardColor,
                        ready : false, 
                        tasks : [],
                        parentCallback : callback,
                    }
                }      
                
                configObj.configs.push(newArea)                 
                setArr(configObj.configs)        

                let mainTitle :typeof  board.mainTitle = {title: board.mainTitle.title, edit: false, save: board.mainTitle.save}
                setBoard({mainTitle})            
            }
            else {            
                alert(`I bet you dont need more than ${configObj.configs.length} boards!`)
            }
        }) 
    }
    
    // Function created to force main board object to update. In some cases, the original setState update
    // wasn't completed when the object was acessed once again, so this function 
    // was made to solve cases like those.
    function fakeInsertUpdate () {      
        startTransition(() => {                 
            if(configObj.configs.length < 15) // The maximum number of boards is 15 right now.   
            { 
                let newArea : configObjectType = {
                    configObject: {
                        name : '',
                        boardColor: configObj.configs[0].configObject.boardColor,
                        ready : false, 
                        tasks : [],
                        parentCallback : callback,
                    }
                }      

                configObj.configs.push(newArea)                 
                setArr(configObj.configs)                
                arr.pop() // pop to prevent new card area to be created    

                let mainTitle :typeof  board.mainTitle = {title: board.mainTitle.title, edit: false, save: board.mainTitle.save}
                setBoard({mainTitle})            
            }
            else {            
                alert(`I bet you dont need more than ${configObj.configs.length} boards!`)
            }
        })
    } 
            
    /* 
        Callback ⚠ 
        Get a unique key from card that's being dropped into the cardContainer,
        then delete the old card object and create a new object, 
        with a new key on the destination card container.    
    */   
    const callback = (key : any, operation : string, data? : string) :void => {  
        startTransition(() => {                
            if(operation === 'excludeCard') {
                configObj.configs.forEach(config => {
                    
                    // removing card from old container
                    let index = config.configObject.tasks.findIndex(element => {                    
                        return element ? element.uniqueKey === key : -1
                    })

                    if(index > -1) {
                        config.configObject.tasks.splice(index, 1)
                        setArr(configObj.configs)                                  
                    }               
                })        
            }  
            
            if(operation === 'updateColor') {
                configObj.configs.forEach(config => {
                    
                    // removing card from old container
                    let index = config?.configObject?.tasks?.findIndex(element => {                    
                        return element ? element.uniqueKey === key : -1
                    })

                    if(index > -1) {
                        config.configObject.tasks[index].color = data!
                        setArr(configObj.configs)                                  
                    }               
                })        
            }  
                
            fakeInsertUpdate()     
        })
    }    

    function handleExclusion(e : DragEvent) {
        startTransition(()=> {
            // delete card condition 🦹‍♂️ 
            let key : string | undefined = e.dataTransfer?.getData("key")                
            if(key !== undefined && key !== '' && key.includes('Card')) {                                                                                                                                                             
                configObj.configs.forEach((config : configObjectType) : void => {                        
                    if (config.configObject === undefined) 
                    {                                                                                                 
                        return      
                    }                        
                })
                                            
                let boardIndex : number = -1, cardIndex : number = -1                     
                configObj.configs.forEach(board => {
                    board.configObject.tasks.forEach(cardInBoard => {
                        if(cardInBoard.uniqueKey === key) {
                            boardIndex = configObj.configs.indexOf(board)                                
                            cardIndex = configObj.configs[configObj.configs.indexOf(board)].configObject.tasks.indexOf(cardInBoard)
                        }
                    })
                })
                                                            
                if(boardIndex > -1 && cardIndex > -1)
                {                        
                    configObj.configs[boardIndex].configObject.tasks.splice(cardIndex, 1)
                    setArr(configObj.configs)       

                    let mainTitle : typeof board.mainTitle = {title: board.mainTitle.title, edit: false, save: board.mainTitle.save}
                    setBoard({mainTitle})
                }                                        
            }

            // delete board condition 🦹‍♂️             
            let name : string | undefined= e.dataTransfer?.getData("Name")                          
            let area : string | undefined= e.dataTransfer?.getData("Area")                          
            if(name !== undefined && name !== '' && area?.includes('dragThisAreaDiv')) {                                                                                                                                                             
                configObj.configs.forEach((config : configObjectType) : void => {                        
                    if ( 
                        config !== undefined 
                        && config.configObject !== undefined 
                        && config.configObject.name === name ) 
                    {                            
                        let index : number = configObj.configs.findIndex((x) => { 
                            return (x !== undefined && x.configObject !== undefined) ? x.configObject.name === name : 0                                
                        })

                        if(index > 0) {                        
                            // use this instead of delete, because "delete arr[index]" set arr[index] to undefined
                            // using "delete" create future problems for card manipulation on Card Area     
                            configObj.configs.splice(index, 1) 
                            setArr(configObj.configs)                                   
                        }                                                                       
                    }                        
                })

                let mainTitle : typeof board.mainTitle = {title: board.mainTitle.title, edit: false, save: board.mainTitle.save}
                setBoard({mainTitle})
            }
        })
    }

    function handleCardDropOnContainer(e : DragEvent) {
        cardContainerDropConfig!.style.border = ""

        let name = e.dataTransfer?.getData('Name')!                
        let area = e.dataTransfer?.getData('Area')!  

        if(name !== undefined && area.includes('dragThisAreaDiv')) {                                                                                                                                                             
            configObj.configs.forEach((config : configObjectType) : void => {                        
                if (config.configObject === undefined) 
                {                                                                             
                    cardContainerDropConfig!.style.border = ""                                                          
                    return      
                }                        
            })
                                       
            let index : number = -1
            configObj.configs.forEach(cardContainer => {                       
                if(cardContainer.configObject.name === name) {
                    index = configObj.configs.indexOf(cardContainer)                                
                }                        
            })
                                                        
            if(index > -1)
            {                        
                let obj = configObj.configs[index]
                configObj.configs.splice(index, 1)                        
                setArr(configObj.configs)       

                arr.push(obj)
                setArr(configObj.configs)       

                let mainTitle : typeof board.mainTitle = {title: board.mainTitle.title, edit: false, save: board.mainTitle.save}
                setBoard({mainTitle})
            }                                        
        }
    }

    // Hooks ------------------------------> (useEffect : Drag & Drop) ------------------------------>
    // Exclude board area drop config
    React.useEffect(() : any => {
        setExclusionDropConfig(excludeDivRef.current!)
        if(excludeDropConfig !== undefined)
        {
            excludeDropConfig.ondragover = function (e) {                
                e.preventDefault()                
                excludeDropConfig.style.border = "2px solid red"        
            }

            excludeDropConfig.ondragleave = function (e) {                
                e.preventDefault()                
                excludeDropConfig.style.border = ""
            }

            excludeDropConfig.ondrop = function (e) : void {                                        
                e.preventDefault()                
                handleExclusion(e)
                excludeDropConfig.style.border = ""               
            }            
        }
    }, [excludeDropConfig])  
    
    // container drop
    React.useEffect(() : any => {
        setCardContainerDropConfig(cardContainerDivRef.current!)
        if(cardContainerDropConfig !== undefined)
        {
            cardContainerDropConfig.ondragover = function (e) {                
                e.preventDefault()
                cardContainerDropConfig.style.border = "2px solid gray"        
            }

            cardContainerDropConfig.ondragleave = function (e) {                
                e.preventDefault()
                cardContainerDropConfig.style.border = ""
            }

            cardContainerDropConfig.ondrop = function (e) : void {        
                cardContainerDropConfig.style.border = ""
                handleCardDropOnContainer(e)
            }            
        }
    }, [cardContainerDropConfig]) 

    // Jsx------------------------------> ------------------------------>
    return (
        <div id={id} className='boardContainerBg'>                    
            <React.Fragment>        
                {/* Board Title */}
                <div className='flex w-full p-5 text-white font-bold bg-transparent'>   
                    <React.Fragment>
                    {
                        // Edit title
                        board.mainTitle.edit ?
                        (           
                            <React.Fragment>                            
                                <div className="relative mb-3" data-te-input-wrapper-init>
                                    <input                                    
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
                                        type="text"    
                                        placeholder='Change'                                                                     
                                        id="cardTitle" 
                                        ref={boardTitleInputRef}
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
                                    }}>
                                        Close
                                    </div>
                                </div>
                            </React.Fragment>                                         
                        )
                        :
                        (
                            // Title
                            <div className='flex w-full mt-7'>
                                <div className='btn w-10 h-12 rounded ml-10' onClick={()=>{
                                        let mainTitle = {title: board.mainTitle.title, edit : true, save: board.mainTitle.save}
                                        setBoard({mainTitle})
                                    }}>
                                    <img 
                                        alt='edit' 
                                        src={editIcon} 
                                        className='hover:cursor-pointer z-10 w-10 h-10 p-1 justify-right transition ease-in-out delay-350 bg-zinc-600 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-700 duration-100'
                                    />
                                </div>
                                <div className='select-none text-4xl ml-3'>{board.mainTitle.title}</div>
                                <div 
                                    className="select-none w-24 text-md ml-16 h-12 ml-2 p-3 hover:cursor-pointer transition ease-in-out delay-350 bg-zinc-600 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-700 duration-100" 
                                    onClick={()=>addNewCardArea()}
                                >
                                    Add Area
                                </div>                                                                                    
                            </div>
                        )
                    }   
                    </React.Fragment>    

                    {/* Exclusion Area */}
                    <div
                        className='flex w-full'                                                                                              
                    >                                                   
                        <div className='ml-auto'>
                            <div id={excludeAreaId} ref={excludeDivRef} className='rounded ml-auto bg-zinc-900 w-16 h-16 p-2'>                                                                            
                                <img className='invert w-12 h-12 ml-auto' alt='' src={trashIcon}/>                                                                            
                            </div>
                            <p className='select-none ml-auto bg-transparent text-sm p-5 opacity-25 animate-pulse'>Drag here to delete</p>
                        </div>                                                                                                                                                                                             
                    </div>              
                </div>
                {/* Cards Area */}
                <div id='cardContainerDiv' ref={cardContainerDivRef} className='flex w-auto h-screen bg-transparent p-8'>          
                    <div id={cardAreaId} ref={cardContainer_AreaDivRef} className='inline-flex flex-nowrap p-2 Flipped overflow-x-auto'>
                        {
                            arr.map((config : configObjectType) => {
                                return (                                                           
                                    <CardContainer                                    
                                        key={'cArea' + Math.random()}                                                                                     
                                        configObject={{
                                            name : config.configObject.name,
                                            boardColor : config.configObject.boardColor,
                                            ready : false,
                                            tasks : config.configObject.tasks,
                                            parentCallback : callback
                                        }}                                        
                                    />                                                                                  
                                )
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default BoardContainer; // !_☄