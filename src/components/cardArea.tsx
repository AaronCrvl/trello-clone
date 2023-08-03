import React, { useState, useEffect, useRef } from "react";
import Card from "./card";
import { cardType } from "../types/cardType";
import { configObjectType } from "../types/configObjectType";
import editIcon from '../assets/edit-icon.png'

function CardArea({ configObject } : configObjectType) {  
    const id : string = 'dragContent' + Math.random()    
    const [dropArea, setDropArea] = useState<HTMLElement>()                  
    const [cardAreaData, setCardAreaData] = useState({
        titleConfig : {
            name : configObject.name,
            edit : false,
            new : false,
            save : ()=> {
                let txt = document.getElementById("cardAreaTitle")! as HTMLInputElement
                let titleConfig : typeof cardAreaData.titleConfig = {name: txt.value, edit: false, new: false, save : cardAreaData.titleConfig.save}
                setCardAreaData({titleConfig})
            }
        }
    })
    
    useEffect(() : any => {
        setDropArea(document.getElementById(id)!)
        if(dropArea !== undefined)
        {
            dropArea.ondragover = function (e) {                
                e.preventDefault()
                dropArea.style.border = "4px solid white"        
            }

            dropArea.ondragleave = function (e) {                
                e.preventDefault()
                dropArea.style.border = ""
            }

            dropArea.ondrop = function (e) {                                                        
                let _id = e.dataTransfer!.getData("foo");
                let element = document.getElementById(_id)!
                dropArea.appendChild(element)
                dropArea.style.border = ""
            }            
        }
    })

    function addNewCard() {
        if(cardAreaData.titleConfig.new)
        {
            let txt = document.getElementById("newCardInput")! as HTMLInputElement
            console.log(txt.value)

            let newCard : cardType = {
                text :  txt.value,
                description : '',
                tags : [],
                owner: 'Aaron' 
            }             
            configObject.tasks.push(newCard)          
            
            let titleConfig : typeof cardAreaData.titleConfig = {name: cardAreaData.titleConfig.name, edit: false, new: false, save : cardAreaData.titleConfig.save}
            setCardAreaData({titleConfig})
        }
    }
    
    // jsx
    return (
        <div                         
            className="ml-2 w-1/4 rounded w-full h-fit p-5 mt-2 bg-indigo-800 mr-5"            
        >     
            <div className="w-full p-3 mb-3">                
                {
                    cardAreaData.titleConfig.edit ? 
                    (
                        <div className="">                            
                            <div className="relative mb-3" data-te-input-wrapper-init>
                                <input                                    
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
                                    type="text"                                     
                                    placeholder={cardAreaData.titleConfig.name}   
                                    id="cardAreaTitle"
                                />
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >
                                    {cardAreaData.titleConfig.name}  
                                </label>
                            </div>
                            <div className="flex mt-1">
                                <div className="btn p-1 select-none rounded bg-sky-500 text-white text-lg mr-1" onClick={cardAreaData.titleConfig.save}>Save</div>
                                <div className="btn p-1 select-none rounded bg-zinc-500 text-white text-lg" onClick={()=>{                                    
                                    let titleConfig : typeof cardAreaData.titleConfig = {name: cardAreaData.titleConfig.name, edit: false, new: false, save : cardAreaData.titleConfig.save}
                                    setCardAreaData({titleConfig})
                                }}>Close</div>
                            </div>
                        </div>    
                    )
                    :
                    (
                        <div className="flex">
                            <div 
                                className='btn w-10 rounded hover:bg-gray-400 hover:cursor-pointer' 
                                onClick={()=>{
                                    let titleConfig : typeof cardAreaData.titleConfig = {name: cardAreaData.titleConfig.name, edit: true, new: false, save : cardAreaData.titleConfig.save}
                                    setCardAreaData({titleConfig})
                                }}
                            >
                                <img alt='edit' src={editIcon} className='w-10 h-10 p-1 invert justify-right'/>                                                                                      
                            </div>                                                                                                     
                            <h1 className="text-2xl text-white font-semibold">{cardAreaData.titleConfig.name}</h1>    
                        </div>
                    )
                }                
            </div>
            <div
                id={id} 
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
                                    key={card.text}                                                                                  
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
            <div className="flex p-5">
                {
                    cardAreaData.titleConfig.new ?
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
                                onClick={()=>addNewCard()}
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
                                    let titleConfig : typeof cardAreaData.titleConfig = {name : cardAreaData.titleConfig.name, edit : false, new : true, save : cardAreaData.titleConfig.save}
                                    setCardAreaData({titleConfig})
                                }
                            }
                        >
                            + Add new card
                        </div> 
                    )                    
                }
            </div>                                       
        </div>
    );
}

export default CardArea;