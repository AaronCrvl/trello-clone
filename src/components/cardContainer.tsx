import React from "react";
import Card from "./card";
import { cardType } from "../types/cardType";
import { configObjectType } from "../types/configObjectType";
import editIcon from '../assets/edit-icon.png'
import { tagType } from "../types/tagType";
import { useMemo, useRef, useState } from "react";

function CardContainer({ configObject : { name, boardColor, ready, tasks, parentCallback }} : configObjectType) {  
    // Id's ------------------------------>
    const cardsDivId : string = useMemo(()=> 'dragCardDiv' + Math.random(), [])
    const areaId : string = useMemo(()=>  'dragThisAreaDiv' + Math.random(), [])

    // Refs ------------------------------>
    const cardAreaTitleInputRef = useRef(null)
    const newCardNameInputRef = useRef(null)
    
    // Hooks ------------------------------> ------------------------------>
    const [isPending, startTransition] = React.useTransition();
    const [dropConfig, setDropConfig] = useState<HTMLElement>()  // drag
    const [dragConfig, setDragConfig] = useState<HTMLElement>()  // drop   
    const [onEditTitle, setOnEditTitle] = useState<Boolean>(false)
    const [onAddNewCard, setOnAddNewCard] = useState<Boolean>(false)
      
    const [containerData, setContainerData] = useState<configObjectType>({ // card list  
        configObject : {
            name: name,
            boardColor: boardColor,
            ready: ready,
            tasks: tasks,
            parentCallback : parentCallback,
        }
    })    
        
    // Functions ------------------------------>
    function addNewCard() : void {
        startTransition(()=> {                        
            let txt = newCardNameInputRef.current! as HTMLInputElement            
            let newCard : cardType = {
                uniqueKey : 'Card' + Math.random(),
                text :  txt.value,
                description : [],
                tags : [],
                owner: '',
                color: '',
                parentCallback : parentCallback,
            }    
                        
            containerData.configObject.tasks.push(newCard)
            setContainerData({ configObject : containerData.configObject })     
            parentCallback(name)                            
        })
    }

    function handleCardDrop(e : DragEvent) {        
        // remove drag div highlight
        dropConfig!.style.border = ""

        // get event data            
        //let _id = e.dataTransfer!.getData("card")   
        let key = e.dataTransfer?.getData("key")                               
        let text = e.dataTransfer!.getData("text")                                                                  
        let color = e.dataTransfer!.getData("color") 
        let owner = e.dataTransfer!.getData("owner")                
        let description = e.dataTransfer!.getData("description")  
        let tags_colorHex = e.dataTransfer!.getData("tags_colorHex")                                        
        let tags_description = e.dataTransfer!.getData("tags_description")            
        
        let tags : tagType[] = []
        let hexArr = tags_colorHex.split(':')
        let descArr = tags_description.split(':')                

        for(let i = 0; i < hexArr.length; ++i) {
            tags.push({colorHex: hexArr[i], description: descArr[i]})
        }

        // insert new card and update obj state
        containerData.configObject.tasks.push({uniqueKey: 'Card' + Math.random(), text: text, description: description.split(':'), tags: tags, color: color, owner: owner, parentCallback : parentCallback })                                
        setContainerData({ configObject : containerData.configObject })                

        // remove dragged card from older cardContainer                
        parentCallback(key, 'excludeCard')  
    }     

    // Hooks ------------------------------> (useEffect : Drag & Drop) ------------------------------>
    // Drop 
    React.useEffect(() : void => {
        setDropConfig(document.getElementById(cardsDivId)!)
        if(dropConfig !== undefined)
        {
            dropConfig.ondragover = function (e) {                  
                e.preventDefault()
                dropConfig.style.border = "2px solid white"      

                let name = e.dataTransfer?.getData('Name')                
                let area = e.dataTransfer?.getData('Area')
                if(
                    (area && area !== undefined)
                    && (name && name !== undefined)) {

                    dropConfig.style.position = "absolute"      
                }
            }

            dropConfig.ondragleave = function (e) {                
                e.preventDefault()    
                dropConfig.style.border = ""      
                dropConfig.style.position = "relative"            
            }

            // dont use React.UseTransition on drag and drop features
            // drop config should block UI for a very short limited time
            dropConfig.ondrop = function (e) {  
                e.preventDefault()   
                let key = e.dataTransfer?.getData("key") 
                if(key && key!== undefined) {
                    handleCardDrop(e)                    
                }
            }            
        }
    }, [dropConfig])

    // drag
    React.useEffect(() : void => {        
        setDragConfig(document.getElementById(areaId)!)        
        if(dragConfig !== undefined)
        {               
            dragConfig.ondragstart = function (e) {     
                if((e.target as Element).id === areaId) {
                    e.dataTransfer!.setData("Name", containerData.configObject.name);                                            
                    e.dataTransfer!.setData("Area", areaId);                                            
                }
            }
            
            // dragConfig.ondrag = function(e) {
            //     if((e.target as Element).id === areaId) {                    
            //         // console.log(`Area ${areaId} is beeing dragged.`)
            //     }
            // }        
        }
    }, [dragConfig])

    // Jsx------------------------------> ------------------------------>
    return (
        <div           
            id={areaId}
            draggable
            className="rounded Content h-auto p-2 w-96"            
        >               
            <div className={`rounded-lg ring-2 ring-zinc-500 p-4 hover:cursor-grab ${boardColor} scale-95 hover:scale-100`}>                
                {/* Title */}
                <div className="w-full p-1 mb-3">                                
                    {
                        onEditTitle ? 
                        (
                            // Edit Card Area Title
                            <React.Fragment>                            
                                <div className="relative mb-3 cursor-pointer" data-te-input-wrapper-init>
                                    <input                                    
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
                                        type="text"                                     
                                        placeholder={containerData.configObject.name}   
                                        id="cardAreaTitle"
                                        ref={cardAreaTitleInputRef}
                                    />
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                        {name}  
                                    </label>
                                </div>
                                <div className="flex mt-1">
                                    <div className="btn p-1 select-none rounded bg-sky-500 text-white text-md mr-1" onClick={()=>{
                                        let txt : string | undefined  = (cardAreaTitleInputRef.current! as HTMLInputElement).value
                                        if(txt !== undefined) {
                                            name = txt
                                            setContainerData({configObject : {name : name, boardColor : boardColor, ready: ready, tasks : containerData.configObject.tasks, parentCallback : parentCallback }})
                                            setOnEditTitle(false)
                                        }
                                    }}>Save</div>
                                    <div className="btn p-1 select-none rounded bg-zinc-500 text-white text-md" onClick={()=>{
                                        setOnEditTitle(false)
                                    }}>Close</div>
                                </div>
                            </React.Fragment>    
                        )
                        :
                        (
                            // Title div
                            <div className="flex w-auto">       
                                <h1 className="select-none ml-2 text-lg text-white">{containerData.configObject.name}</h1>                                                                                                                                                        
                                <div 
                                    className='btn h-10 rounded hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' 
                                    onClick={()=>{setOnEditTitle(true)}}
                                >                                    
                                    <img 
                                        alt='edit' 
                                        src={editIcon} 
                                        className='select-none ml-auto w-8 h-8 p-1 justify-right invert hover:bg-red-500'
                                    />                                    
                                </div>                                                                                                                                              
                            </div>
                        )
                    }                                   
                </div>
                {/* Cards ------------------------------------------------------------------------------------------------- */}
                <div
                    id={cardsDivId} 
                    className="rounded bg-transparent p-8 h-auto w-full hover:scale-110"
                >
                    {
                        containerData.configObject.tasks &&                      
                            containerData.configObject.tasks.map((card : cardType) => {                         
                                {/* Card */}                       
                                return (                                                                                                                                                                                                                 
                                    <Card   
                                        key={Math.random()}
                                        uniqueKey={card.uniqueKey}                                                                                  
                                        text={card.text}
                                        description={card.description}
                                        tags={card.tags}
                                        owner={card.owner}
                                        color={card.color}
                                        parentCallback={parentCallback}
                                    />                                                                                                                                                         
                                )
                            })                                   
                    }          
                </div>    
                {/* ------------------------------------------------------------------------------------------------- */}
                {/* Add new Card */}
                <div className="flex text-center mt-5">
                    {
                        onAddNewCard ?
                        (
                            <div className="flex">
                                <div className="relative mb-3 bg-zinc-800 rounded" data-te-input-wrapper-init>
                                    <input            
                                        type="text"                    
                                        id="newCardInput"
                                        placeholder="Enter Name"
                                        defaultValue='New 📇 Title'   
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                                                                                                                                     
                                        ref={newCardNameInputRef}
                                    />
                                    <label                                
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >                                          
                                    </label>                            
                                </div>
                                <div 
                                    className="rounded bg-sky-800 h-fit text-white p-2 ml-3 hover:bg-sky-700 hover:cursor-pointer"
                                    onClick={addNewCard}
                                >
                                    Save
                                </div>
                            </div>
                        )
                        :
                        (
                            <div 
                                className="btn select-none rounded text-white w-full text-left hover:bg-zinc-600 hover:cursor-pointer"
                                onClick={()=>{ 
                                        setOnAddNewCard(true)                                       
                                    }
                                }
                            >
                                + Add new card
                            </div> 
                        )                    
                    }
                </div>  
            </div>                                       
        </div>
    );
}

export default CardContainer; // !_☄