import React, { KeyboardEvent } from "react";
import { cardType } from "../types/cardType";
import SystemColors from "../types/enums/systemColors";
import cardMoving from '../assets/cardMoving.png';
import imgIcon from '../assets/imageIcon.png';
import editIcon from '../assets/edit-icon.png';
import { useRef, useMemo, useState } from "react";

function Card({ uniqueKey, text, description, tags, owner, color, parentCallback } : cardType ) {  
    // Id's ------------------------------>
    const id : string = useMemo(()=> 'dragContent' + Math.random(), [])
    const modalId : string = useMemo(()=> 'myModal' + Math.random(), [])

    // Refs ------------------------------>
    const modalDivRef = useRef(null)
    const titleInputRef = useRef(null)

    // Types ------------------------------>
    const appColors = new SystemColors()   

    // Hooks ------------------------------> ------------------------------>
    const [isPending, startTransition] = React.useTransition()
    const [cardTitleOnEdit, setTitleOnEdit] = useState<Boolean>(false)    
    const [dragConfig, setDragConfig] = useState<HTMLElement>()   
    const [showBoardColors, setShowBoardColors] = useState<Boolean>(false)              
    const [card, setCard] = useState({ // Component dynamic data
        data: { 
            uniqueKey : uniqueKey,
            text: text,
            description : description,  
            tags : tags,
            owner : owner, 
            color: color,
        }
    })                          

    // Functions ------------------------------>
    function openCardModal() {
        if(cardTitleOnEdit) {
            return             
        }

        let myDialog : any = modalDivRef.current!
        myDialog.showModal()
    }  
    
    function addTextToHistory () {    
        startTransition(() => {                            
            let myDialog : any = modalDivRef.current!
            let txt = (myDialog.getElementsByTagName('input')[0] as HTMLInputElement)        
            card.data.description.push(txt.value)            
            txt.defaultValue = '' 
            
            setCard({
                data: { 
                    uniqueKey : uniqueKey,
                    text: card.data.text,
                    description : card.data.description,  
                    tags : card.data.tags,
                    owner : card.data.owner, 
                    color: card.data.color,
                }
            })                           
        })
    }
    
    function addTextToTag () {  
        startTransition(() => {
            let myDialog : any = modalDivRef.current!                                
            let txt = (myDialog.getElementsByTagName('input')[1] as HTMLInputElement)        
            card.data.tags.push({colorHex:  '', description: txt.value})            
            txt.defaultValue = ''       
            
            setCard({
                data: { 
                    uniqueKey : uniqueKey,
                    text: card.data.text,
                    description : card.data.description,  
                    tags : card.data.tags,
                    owner : card.data.owner, 
                    color: card.data.color,
                }
            })   
        })        
    }

    function setColor (chosenColor : any) {        
        if (appColors.eColors.hasOwnProperty(chosenColor)) {  
            card.data.color = appColors.getSystemColors(chosenColor).toString()

            setCard({
                data: { 
                    uniqueKey : uniqueKey,
                    text: card.data.text,
                    description : card.data.description,  
                    tags : card.data.tags,
                    owner : card.data.owner, 
                    color: card.data.color,
                }
            })               

            parentCallback(card.data.uniqueKey, 'updateColor', card.data.color)
        }                      
    } 

    function alterName() { 
        let input = (titleInputRef.current! as HTMLInputElement)        
        card.data.text = input.value
        input.defaultValue = ''
        
        setCard({
            data: { 
                uniqueKey : uniqueKey,
                text: card.data.text,
                description : card.data.description,  
                tags : card.data.tags,
                owner : card.data.owner, 
                color: card.data.color,
            }
        }) 

        setTitleOnEdit(false)
    }

    function handleCardDrag( e :DragEvent) {
        // deconstruct tag obj array members into a single string
        let tagsDescArr : string[] = [], tagsHexArr : string[] = [] 
        card.data.tags.forEach(tag => {
            tagsDescArr.push(tag.description)   
            tagsHexArr.push(tag.colorHex) 
        })                            

        // Transfer data
        e.dataTransfer!.setData("card", id);                                                                
        e.dataTransfer!.setData("key", uniqueKey);    
        e.dataTransfer!.setData("text", card.data.text);    
        e.dataTransfer!.setData("description", card.data.description.join(':'));    
        e.dataTransfer!.setData("tags_colorHex", tagsHexArr.join(':'));                        
        e.dataTransfer!.setData("tags_description", tagsDescArr.join(':'));                        
        e.dataTransfer!.setData("color", card.data.color);    
        e.dataTransfer!.setData("owner", owner); 
    }

    // Hooks ------------------------------> (useEffect : Drag & Drop) ------------------------------>
    // Drag 
    React.useEffect(() => {        
        setDragConfig(document.getElementById(id)!)        
        if(dragConfig !== undefined)
        {                              
            dragConfig.ondragstart = function (e) {                   
                if((e.target as Element).id === id) {                                                            
                    handleCardDrag(e)
                }
            }
            
            dragConfig.ondrag = function(e) {
                // set card moving image
                let cardM = document.createElement('img')
                cardM.src = cardMoving
                e.dataTransfer?.setDragImage(cardM, 0, 0)
            }        
        }
    }, [dragConfig])    
    
    // Jsx------------------------------> ------------------------------>
    return (
        <div
            id={id}
            draggable                        
            className={`rounded-lg p-5 mb-2 w-full ring-2 ring-zinc-500 ${card.data.color}`}            
        >
            {/* Title */}
            <div>
                {
                    cardTitleOnEdit ?
                    (
                        <div>                            
                            <React.Fragment>                            
                                <div className="relative mb-3 cursor-pointer" data-te-input-wrapper-init>
                                    <input                                    
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
                                        type="text"                                     
                                        placeholder={card.data.text}   
                                        ref={titleInputRef}
                                        id="cardsTitle"
                                    />
                                    <label
                                        htmlFor="exampleFormControlInput"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                        {card.data.text}  
                                    </label>
                                </div>
                                <div className="flex mt-1">
                                    <div 
                                        className="btn p-1 select-none rounded bg-sky-500 text-white text-md mr-1 cursor-pointer" 
                                        onClick={alterName}
                                        onKeyDown={(event : KeyboardEvent) => {
                                            if(event.key === 'Enter') {
                                                alterName()
                                            }
                                        }}
                                    >
                                        Save
                                    </div>                                    
                                    <div 
                                        className="btn p-1 select-none rounded bg-zinc-500 text-white text-md mr-1 cursor-pointer" 
                                        onClick={()=> setTitleOnEdit(false)}
                                        onKeyDown={(event : KeyboardEvent) => {
                                            if(event.key === 'Enter') {
                                                setTitleOnEdit(false)
                                            }
                                        }}
                                    >
                                        Close
                                    </div> 
                                </div>
                            </React.Fragment> 
                        </div>
                    )
                    :
                    (
                        <div className="flex select-none text-gray-300 text-sm font-bold">
                            <div onClick={openCardModal} className="cursor-pointer hover:scale-110 hover:text-lg">{card.data.text}</div>
                            <div className="invert ml-auto cursor-pointer">
                                <img 
                                    alt='' 
                                    className='w-4 h-4' 
                                    src={editIcon} 
                                    onClick={()=> setTitleOnEdit(true)}
                                    onKeyDown={(event : KeyboardEvent) => {
                                        if(event.key === 'Enter') {
                                            setTitleOnEdit(true)
                                        }
                                    }}
                                />
                            </div>
                        </div>  
                    )
                }
                <div className="flex gap-1 mt-2 w-full hover:cursor-pointer" onClick={openCardModal}>
                    {
                        card.data.tags.map((tag) => {
                            return (
                                <div 
                                    key={Math.random()}
                                    className="w-3 h-2"
                                    style={{ backgroundColor: (tag.colorHex === undefined ? '#FDFEFE' : tag.colorHex), borderRadius: "25px" }} 
                                />
                            )
                        })
                    }
                </div>
            </div>
            
            {/* Modal --------------------------------------------------------------------------------------------------------- */}            
            <dialog id={modalId} ref={modalDivRef} className="modal rounded-lg w-1/2 h-3/4 p-5 bg-zinc-700 border-2 border-gray-500 cursor-auto origin-bottom">                                
                <form method="dialog" className="modal-box rounded p-2 ">
                    {/* Close Button */}
                    <div className="modal-action text-white flex w-full mb-0 mt-1">                                                                        
                        <button 
                            className="btn p-4 rounded w-fit h-fit text-white text-right font-bold bg-zinc-800 hover:bg-zinc-900 p-1 ml-auto"
                        >
                            X
                        </button>
                    </div> 
                    
                    {/* Title Div */}
                    <div className="modal-action text-white flex w-full mb-1 mt-1 ">                    
                        {/* Title Text */}
                        <h3 className="font-semibold text-left text-4xl w-full p-2 mb-2">{card.data.text}</h3>                      
                    </div>
                    
                    {/* Title Image Div */}
                    <div className="text-white flex w-full mb-12 mt-1">                                                                                   
                        <div className="opacity-20 w-full p-2 mb-2 border-4 border-zinc-800 rounded-lg">
                            <img className="items-center font-semibold text-left text-4xl justify-center mb-24 ml-80 w-42 h-42" src={imgIcon} />    
                            <input className="hover:cursor-pointer" type="file" alt='' />                                 
                        </div>                                  
                    </div>                                                     

                    {/* Body Div */}
                    {/* History */}
                    <div className="flex w-full">                    
                        <div className="container rounded p-1text-sm p-2 w-full mb-2 mt-2">                             
                            <div className="mt-5"> 
                                <p className="text-2xl text-white select-none font-semibold underline mb-5"
                                > 
                                    History
                                </p>    
                                <div className="relative flex mb-5" data-te-input-wrapper-init>                                    
                                    <input                                    
                                        className="bg-zinc-800 peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
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
                                        className="btn text-white ml-auto select-none bg-zinc-700 p-2 w-fit rounded-lg hover:bg-gray-600 hover:cursor-pointer"
                                        onClick={addTextToHistory}
                                    >
                                        Add
                                    </div>
                                </div>                                                              
                                <div className="mt-2 bg-zinc-800 p-5 rounded-lg">                                                                                                           
                                    <div className="overflow-y-auto">
                                    {                                        
                                        card.data.description.map((item)=>{
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

                        {/* Tags */}
                        <div>
                            <div className="rounded w-72 p-2 ml-10 mb-2 mt-2 text-white h-fit">                                                                  
                                <p className="text-xl text-white select-none font-semibold underline mb-5"
                                > 
                                    Tag List
                                </p>    
                                <div className="bg-zinc-800 rounded-lg">                                                             
                                    <ul className="list-none p-3">
                                        {
                                            card.data.tags.map((tag)=> {
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
                                                                defaultValue={(tag.colorHex === undefined ? '#FDFEFE' : tag.colorHex)}
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
                            
                            {/* Color Hover Set */}
                            <div 
                                className="rounded w-72 p-2 ml-10 mb-2 mt-2 text-white h-fit"
                                onMouseEnter={()=> setShowBoardColors(true)}
                                onMouseLeave={()=> setShowBoardColors(false)}
                            >
                                <p className="opacity-25">Hover</p>Card Color
                                {
                                    showBoardColors &&                                     
                                        <ul className='mt-5 p-1 z-20 opacity-75'>
                                            <li className='hover:bg-red-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(0)} onKeyDown={()=>{}}>Red</li>
                                            <li className='hover:bg-sky-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(1)} onKeyDown={()=>{}}>Blue</li>
                                            <li className='hover:bg-emerald-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(2)} onKeyDown={()=>{}}>Green</li>                                
                                            <li className='hover:bg-amber-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(3)} onKeyDown={()=>{}}>Amber</li>                                
                                            <li className='hover:bg-cyan-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(4)} onKeyDown={()=>{}}>Cyan</li>                                
                                            <li className='hover:bg-transparent p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(5)} onKeyDown={()=>{}}>Transparent</li>                                
                                            <li className='hover:bg-zinc-800 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(6)} onKeyDown={()=>{}}>Zinc</li>                        
                                            <li className='hover:bg-orange-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(7)} onKeyDown={()=>{}}>Orange</li>                        
                                            <li className='hover:bg-yellow-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(8)} onKeyDown={()=>{}}>Yellow</li>                        
                                            <li className='hover:bg-emerald-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(9)} onKeyDown={()=>{}}>Emerald</li>                        
                                            <li className='hover:bg-sky-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(10)} onKeyDown={()=>{}}>Sky</li>                        
                                            <li className='hover:bg-fuchsia-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(11)} onKeyDown={()=>{}}>Fuchsia</li>                        
                                            <li className='hover:bg-rose-700 p-1 rounded text-white cursor-pointer select-none' onClick={()=> setColor(11)} onKeyDown={()=>{}}>Rose</li>                        
                                        </ul>                                    
                                }                      
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