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
        
    // card functions
    function addNewCard() : void {
        if(cardArea.titleTextEdit.new)
        {
            let txt = document.getElementById("newCardInput")! as HTMLInputElement            
            let newCard : cardType = {
                uniqueKey : 'Card' + Math.random(),
                text :  txt.value,
                description : [],
                tags : [],
                owner: '' 
            }             

            configObject.tasks.push(newCard)                      
            let titleTextEdit : typeof cardArea.titleTextEdit = {name: cardArea.titleTextEdit.name, edit: false, new: false, save : cardArea.titleTextEdit.save}
            setCardArea({titleTextEdit})
        }
    }

    function removeCardFromList(key : string) : void
    {        
        let index : number = configObject.tasks.findIndex((x) => { 
            return x.uniqueKey === key ? x.uniqueKey : 0
        })
        
        console.log('Index: ' + index)
        if(index >= 0)
        {                        
            configObject.tasks.splice(index, 1)            
            let titleTextEdit : typeof cardArea.titleTextEdit = {name: cardArea.titleTextEdit.name, edit: false, new: false, save : cardArea.titleTextEdit.save}
            setCardArea({titleTextEdit})            
        }
    }

    // Card drop on this component
    React.useEffect(() : void => {
        setDropConfig(document.getElementById(cardsDivId)!)
        if(dropConfig !== undefined)
        {
            dropConfig.ondragover = function (e) {                
                e.preventDefault()
                dropConfig.style.border = "4px solid white"        
            }

            dropConfig.ondragleave = function (e) {                
                e.preventDefault()                
            }

            dropConfig.ondrop = function (e) {                        
                let _id = e.dataTransfer!.getData("card") // card id
                let key = e.dataTransfer!.getData("key"); // card key
                
                // get card with exclude button div
                let element = document.getElementById(key)!                
                dropConfig.appendChild(element)      

                // get card data and edit array                
                dropConfig.style.border = ""
            }            
        }
    })

    // Card area drag
    React.useEffect(() : void => {        
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
 
    return (
        <div           
            id={areaId}
            draggable
            className="rounded Content h-auto p-3 w-96 "            
        >               
            <div className={'border-2 border-zinc-100 p-10 hover:cursor-grab ' + configObject.boardColor}>                
                {/* Title */}
                <div className="w-full p-1 mb-3">                                
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
                                    className='btn h-10 rounded hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' 
                                    onClick={()=>{
                                        let titleTextEdit : typeof cardArea.titleTextEdit = {name: cardArea.titleTextEdit.name, edit: true, new: false, save : cardArea.titleTextEdit.save}
                                        setCardArea({titleTextEdit})
                                    }}
                                >
                                    <img 
                                        alt='edit' 
                                        src={editIcon} 
                                        className='select-none w-10 h-10 p-1 justify-right invert hover:bg-red-500'
                                    />                                     
                                </div>                                                                                                              
                                <h1 className="select-none ml-2 text-2xl text-white">{cardArea.titleTextEdit.name}</h1>                                                                                                                               
                            </div>
                        )
                    }                                   
                </div>
                {/* Cards */}
                <div
                    id={cardsDivId} 
                    className="rounded bg-zinc-800 p-5 h-auto w-full"
                >
                    {
                        configObject.tasks === undefined ?
                        (
                            <div></div>
                        )
                        :
                        (
                            configObject.tasks.map((card : cardType) => {                         
                                {/* Card */}                       
                                return (                                                                                                                                                                                                                 
                                    <Card             
                                        uniqueKey={card.uniqueKey}                                                                                  
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
                <div className="flex text-center mt-5">
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
                                className="btn select-none rounded text-white w-full text-left hover:bg-zinc-600 hover:cursor-pointer"
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