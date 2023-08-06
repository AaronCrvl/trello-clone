import React from "react";
import Card from "./card";
import { cardType } from "../types/cardType";
import { configObjectType } from "../types/configObjectType";
import editIcon from '../assets/edit-icon.png'

function CardArea({ configObject } : configObjectType) {  
    const cardsDivId : string = 'dragCardDiv' + Math.random()    
    const areaId : string = 'dragThisAreaDiv' + Math.random()       

    // Component dynamic data
    const [dropConfig, setDropConfig] = React.useState<HTMLElement>()  
    const [dragConfig, setDragConfig] = React.useState<HTMLElement>()                               
    const [cardArea, setCardArea] = React.useState({
        titleTextEdit : {
            name : configObject.name,
            edit : false,
            new : false,
            save : ()=> {
                let txt = document.getElementById("cardAreaTitle")! as HTMLInputElement
                let titleTextEdit : typeof cardArea.titleTextEdit = {name: txt.value, edit: false, new: false, save : cardArea.titleTextEdit.save}
                setCardArea({titleTextEdit})
            }
        }
    })
    
    // Card drop on this component
    React.useEffect(() : any => {
        setDropConfig(document.getElementById(cardsDivId)!)
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

            dropConfig.ondrop = function (e) {                                                        
                let _id = e.dataTransfer!.getData("card");
                let element = document.getElementById(_id)!
                dropConfig.appendChild(element)
                dropConfig.style.border = ""
            }            
        }
    })

    // Card area drag
    React.useEffect(() => {        
        setDragConfig(document.getElementById(areaId)!)        
        if(dragConfig !== undefined)
        {               
            dragConfig.ondragstart = function (e) {     
                if((e.target as Element).id === areaId) {
                    e.dataTransfer!.setData("dragCardArea", areaId);                                            
                    e.dataTransfer!.setData("cardAreaName", cardArea.titleTextEdit.name);                                            
                }
            }
            
            dragConfig.ondrag = function(e) {
                if((e.target as Element).id === areaId) {                    
                    // console.log(`Area ${areaId} is beeing dragged.`)
                }
            }        
        }
    })

    // card functions
    function addNewCard() {
        if(cardArea.titleTextEdit.new)
        {
            let txt = document.getElementById("newCardInput")! as HTMLInputElement            
            let newCard : cardType = {
                text :  txt.value,
                description : '',
                tags : [],
                owner: '' 
            }             

            configObject.tasks.push(newCard)                      
            let titleTextEdit : typeof cardArea.titleTextEdit = {name: cardArea.titleTextEdit.name, edit: false, new: false, save : cardArea.titleTextEdit.save}
            setCardArea({titleTextEdit})
        }
    }
 
    return (
        <div           
            id={areaId}
            className="ml-2 w-1/4 rounded w-fit h-fit p-12 mt-2 bg-indigo-900 mr-5 hover:bg-indigo-700"            
        >               
            <div className="bg-indigo-800 p-5">                
                {/* Title */}
                <div className="w-full p-3 mb-3">                                
                    {
                        cardArea.titleTextEdit.edit ? 
                        (
                            // Edit Card Area Title
                            <div className="">                            
                                <div className="relative mb-3" data-te-input-wrapper-init>
                                    <input                                    
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
                                        type="text"                                     
                                        placeholder={cardArea.titleTextEdit.name}   
                                        id="cardAreaTitle"
                                    />
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                        {cardArea.titleTextEdit.name}  
                                    </label>
                                </div>
                                <div className="flex mt-1">
                                    <div className="btn p-1 select-none rounded bg-sky-500 text-white text-lg mr-1" onClick={cardArea.titleTextEdit.save}>Save</div>
                                    <div className="btn p-1 select-none rounded bg-zinc-500 text-white text-lg" onClick={()=>{                                    
                                        let titleTextEdit : typeof cardArea.titleTextEdit = {name: cardArea.titleTextEdit.name, edit: false, new: false, save : cardArea.titleTextEdit.save}
                                        setCardArea({titleTextEdit})
                                    }}>Close</div>
                                </div>
                            </div>    
                        )
                        :
                        (
                            // Title div
                            <div className="flex">                                
                                <div 
                                    className=' btn w-10 rounded hover:bg-gray-400 hover:cursor-pointer' 
                                    onClick={()=>{
                                        let titleTextEdit : typeof cardArea.titleTextEdit = {name: cardArea.titleTextEdit.name, edit: true, new: false, save : cardArea.titleTextEdit.save}
                                        setCardArea({titleTextEdit})
                                    }}
                                >
                                    <img alt='edit' src={editIcon} className='select-none w-10 h-10 p-1 invert justify-right'/>                                     
                                </div>                                                                                                              
                                <h1 className="select-none text-2xl text-white font-semibold">{cardArea.titleTextEdit.name}</h1>                                                                                                                               
                            </div>
                        )
                    }                
                </div>
                {/* Cards */}
                <div
                    id={cardsDivId} 
                    className="rounded bg-zinc-800 p-5 h-auto w-full mb-3"
                >
                    {
                        configObject.tasks === undefined ?
                        (
                            <div></div>
                        )
                        :
                        (
                            configObject.tasks.map((card : cardType)=> {
                                return (
                                    <Card             
                                        key={Math.random()}                                                                                  
                                        text={card.text}
                                        description={card.description}
                                        tags={card.tags}
                                        owner={card.owner}
                                    />                                                            
                                )
                            })           
                        )
                    }          
                </div>    
                {/* Add new Card */}
                <div className="flex p-5">
                    {
                        cardArea.titleTextEdit.new ?
                        (
                            <div className="flex">
                                <div className="relative mb-3 bg-zinc-800 rounded" data-te-input-wrapper-init>
                                    <input            
                                        type="text"                    
                                        id="newCardInput"
                                        placeholder="Enter Name"
                                        defaultValue='New Card Title'   
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                                                                                                                                     
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
                                className="btn p-2 select-none rounded text-white w-full text-left hover:bg-zinc-600 hover:cursor-pointer"
                                onClick={()=>{
                                        let titleTextEdit : typeof cardArea.titleTextEdit = {name : cardArea.titleTextEdit.name, edit : false, new : true, save : cardArea.titleTextEdit.save}
                                        setCardArea({titleTextEdit})
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

export default CardArea; // !_☄