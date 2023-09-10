import React from "react";
import { cardType } from "../types/cardType";
import SystemColors from "../types/enums/systemColors";
import cardMoving from '../assets/cardMoving.png'
import imgIcon from '../assets/imageIcon.png'

function Card({ uniqueKey, text, description, tags, owner, color, parentCallback } : cardType ) {  
    const id : string = 'dragContent' + Math.random()
    const modalId : string = 'myModal' + Math.random()
    const [dragConfig, setDragConfig] = React.useState<HTMLElement>()   
    const [showBoardColors, setShowBoardColors] = React.useState<Boolean>(false)      
    const appColors = new SystemColors()       

    // Component dynamic data
    const [card, setCard] = React.useState({
        data: { 
            text: text,
            description : description,  
            tags : tags,
            owner : owner, 
            color: color,
        }
    })              

    function openCardModal() {
        let myDialog : any = document.getElementById(modalId)
        myDialog.showModal()
    }  
    
    function addTextToHistory () {                                
        let myDialog : any = document.getElementById(modalId)!                                
        let txt = (myDialog.getElementsByTagName('input')[0] as HTMLInputElement)        
        card.data.description.push(txt.value)            
        txt.value = '' 
        
        setCard({
            data: { 
                text: card.data.text,
                description : card.data.description,  
                tags : card.data.tags,
                owner : card.data.owner, 
                color: card.data.color,
            }
        })    
    }
    
    function addTextToTag () {                                
        let myDialog : any = document.getElementById(modalId)!                                
        let txt = (myDialog.getElementsByTagName('input')[1] as HTMLInputElement)        
        card.data.tags.push({colorHex:  '', description: txt.value})            
        txt.value = ''       
        
        setCard({
            data: { 
                text: card.data.text,
                description : card.data.description,  
                tags : card.data.tags,
                owner : card.data.owner, 
                color: card.data.color,
            }
        })   
    }

    function setColor (chosenColor : any) {        
        if (appColors.eColors.hasOwnProperty(chosenColor)) {                                    
            color = appColors.getSystemColors(chosenColor).toString()
            
            setCard({
                data: { 
                    text: text,
                    description : description,  
                    tags : tags,
                    owner : owner, 
                    color: color,
                }
            })                          
        } 
        else {
            console.log("Something went wrong setting the colors.");
        }        
    } 

    // Drag ------------------------------------------------------------------------------------------------
    // drag settings
    React.useEffect(() => {        
        setDragConfig(document.getElementById(id)!)        
        if(dragConfig !== undefined)
        {               
            dragConfig.ondragstart = function (e) {    
                if((e.target as Element).id === id) {  
                    let tagsDescArr : string[] = [], tagsHexArr : string[] = [] 
                    tags.forEach(tag=>{
                        tagsDescArr.push(tag.description)   
                        tagsHexArr.push(tag.colorHex) 
                    })                            

                    e.dataTransfer!.setData("card", id);                                                                
                    e.dataTransfer!.setData("key", uniqueKey);    
                    e.dataTransfer!.setData("text", text);    
                    e.dataTransfer!.setData("description", description.join(':'));    
                    e.dataTransfer!.setData("tags_colorHex", tagsHexArr.join(':'));                        
                    e.dataTransfer!.setData("tags_description", tagsDescArr.join(':'));                        
                    e.dataTransfer!.setData("color", card.data.color);    
                    e.dataTransfer!.setData("owner", owner);   
                    
                    let cardM = document.createElement('img')
                    cardM.src = cardMoving
                    e.dataTransfer?.setDragImage(cardM, 0, 0)
                }
            }
            
            dragConfig.ondrag = function(e) {
                if((e.target as Element).id === id) {   
                    console.log(`Card ${id} is beeing dragged.`)
                }
            }        
        }
    })
    // -----------------------------------------------------------------------------------------------------    
    
    return (
        <div
            id={id}
            draggable            
            onClick={openCardModal}
            className={`rounded-lg p-5 mb-2 w-full border-2 border-white ${card.data.color}`}            
        >
            {/* Title */}
            <div>
                <div className="select-none text-gray-300 text-sm font-bold">
                    {text}
                </div>  
                <div className="flex gap-1 mt-2 w-full">
                    {
                        tags.map((tag) => {
                            return (
                                <div 
                                    className="w-3 h-2"
                                    style={{ backgroundColor: (tag.colorHex === undefined ? '#FDFEFE' : tag.colorHex), borderRadius: "25px" }} 
                                />
                            )
                        })
                    }
                </div>
            </div>
            
            {/* Modal --------------------------------------------------------------------------------------------------------- */}            
            <dialog id={modalId} className="modal rounded-lg w-1/2 h-3/4 p-5 bg-zinc-700 border-2 border-gray-500 cursor-auto">                                
                <form method="dialog" className="modal-box rounded p-2 ">
                    {/* Close Button */}
                    <div className="modal-action text-white flex w-full mb-12 mt-1">                                                                        
                        <button 
                            className="btn p-4 rounded w-fit h-fit text-white text-right font-bold bg-zinc-800 hover:bg-zinc-900 p-1"
                        >
                            X
                        </button>
                    </div> 
                    
                     {/* Title Image Div */}
                     <div className="text-white flex w-full mb-12 mt-1">                                            
                        <h3 className="opacity-20 font-semibold text-left text-4xl w-full p-2 mb-2 border-4 border-zinc-800 rounde-lg">
                            <img className="items-center justify-center mb-24 ml-80" src={imgIcon} />                            
                        </h3>                                  
                    </div>   
                    
                    {/* Title Div */}
                    <div className="modal-action text-white flex w-full mb-1 mt-1 ">                    
                        {/* Title Text */}
                        <h3 className="font-semibold text-left text-4xl w-full p-2 mb-2">{text}</h3>                      
                    </div>          

                    {/* Body Div */}
                    <div className="flex w-full">                    
                        <div className="container rounded p-1text-sm p-2 w-full mb-2 mt-2">                             
                            <div className="mt-5"> 
                                <p className="text-2xl text-white select-none font-semibold underline mb-5"
                                > 
                                    History
                                </p>    
                                <div className="relative flex mb-5" data-te-input-wrapper-init>                                    
                                    <input                                    
                                        className="bg-gray-800 peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
                                        type="text"                                                                                                                
                                        id="historyText" 
                                    />
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="text-black pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                        💻 Text something
                                    </label>
                                    <div 
                                        className="btn text-white ml-auto select-none bg-gray-700 p-2 w-fit rounded-lg hover:bg-gray-600 hover:cursor-pointer"
                                        onClick={addTextToHistory}
                                    >
                                        Add
                                    </div>
                                </div>                                                              
                                <div className="mt-2 bg-gray-800 p-5 rounded-lg">                                                                                                           
                                    <div className="overflow-y-auto">
                                    {                                        
                                        description.map((item)=>{
                                            return (
                                                <div key={Math.random()} className="text-white bg-gray-600 rounded p-2 mt-5">                                                    
                                                    <p className="text-right opacity-50 text-sm">{new Date().toTimeString()}</p>
                                                    <p className="rounded h-full p-2">
                                                        {item}
                                                    </p> 
                                                </div>
                                            )
                                        })                                                                                
                                    }
                                    </div>
                                </div>                                            
                            </div>                     
                        </div>                        
                        <div className="rounded w-72 p-2 ml-10 mb-2 mt-2 text-white h-fit">      
                            <div
                                className="mb-5" 
                                onMouseEnter={()=> setShowBoardColors(true)}
                                onMouseLeave={()=> setShowBoardColors(false)}
                            >
                                <p className="opacity-25">Hover</p>Card Color
                                {
                                    showBoardColors ? 
                                    (
                                        <ul className='mt-5 p-1 z-20 opacity-75'>
                                            <li className='hover:bg-red-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(0)}>Red</li>
                                            <li className='hover:bg-sky-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(1)}>Blue</li>
                                            <li className='hover:bg-emerald-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(2)}>Green</li>                                
                                            <li className='hover:bg-amber-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(3)}>Amber</li>                                
                                            <li className='hover:bg-cyan-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(4)}>Cyan</li>                                
                                            <li className='hover:bg-transparent p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(5)}>Transparent</li>                                
                                        </ul>
                                    )                                            
                                    :
                                    (<div></div>)                                            
                                }                      
                            </div>                                    
                            <div className="bg-gray-800 rounded-lg">      
                                <p className="p-3 text-2xl-sm select-none font-semibold underline"
                                > 
                                    Tag List
                                </p>                          
                                <ul className="list-none p-3">
                                    {
                                        tags.map((tag)=> {
                                            return (
                                                <li
                                                    className="flex"                                                    
                                                    key={Math.random()}
                                                >      
                                                    <div 
                                                        className="mt-1 mr-5 opacity-50 text-sm text-center"
                                                    >
                                                        <input 
                                                            type="color" 
                                                            className="rounded-full w-5 h-5"                                                           
                                                            value={(tag.colorHex === undefined ? '#FDFEFE' : tag.colorHex)}
                                                        />
                                                    </div>                                          
                                                    <div className="">
                                                        {tag.description}
                                                    </div>
                                                    <div 
                                                        className="mt-1 ml-5 opacity-50 text-sm text-center ml-auto"
                                                    >
                                                        X
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* Add Tag */}
                                <div className="relative flex mb-5 mt-10" data-te-input-wrapper-init>                                    
                                    <input                                    
                                        className="bg-gray-800 peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
                                        type="text"                                                                                                                
                                        id="tagText" 
                                    />
                                    <label
                                        htmlFor="exampleFormControlInput2"
                                        className="text-black opacity-20 pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                        Add Tag
                                    </label>
                                    <div 
                                        className="btn text-white text-sm ml-auto select-none p-1 w-fit rounded-lg hover:bg-gray-600 hover:cursor-pointer"
                                        onClick={addTextToTag}
                                    >
                                        Add
                                    </div>
                                </div>   
                            </div>
                        </div>     
                    </div>
                </form>
            </dialog>
            {/* --------------------------------------------------------------------------------------------------------- */}                                  
        </div>
    );
}

export default Card; // !_☄