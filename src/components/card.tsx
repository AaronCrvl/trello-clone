import React from "react";
import { cardType } from "../types/cardType";
import editIcon from '../assets/edit-icon.png';

function Card({ text, description, tags, owner } : cardType ) {  
    const id : string = 'dragContent' + Math.random()
    const modalId : string = 'myModal' + Math.random()
    const [dragConfig, setDragConfig] = React.useState<HTMLElement>()          
    
    // Component dynamic data
    const [card, setCard] = React.useState({
        data: {
            // default
            text: text,  description : description,  tags : tags,  owner : owner,
            
            // configs
            cardTitleConfig : {            
                edit : false,
                save : (desc? : string[] | undefined) =>{
                    // let txt = document.getElementById("cardTitle")! as HTMLInputElement
                    let data = {
                        text:'', 
                        description: desc === undefined ? description : desc, 
                        tags: tags, 
                        owner: owner, 
                        cardTitleConfig : {
                            edit: false,
                            save: card.data.cardTitleConfig.save
                        }
                    }
                    setCard({data})
                }
            }
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
        card.data.cardTitleConfig.save()         
        txt.value = ''       
    }

    // drag settings
    React.useEffect(() => {        
        setDragConfig(document.getElementById(id)!)        
        if(dragConfig !== undefined)
        {               
            dragConfig.ondragstart = function (e) {    
                if((e.target as Element).id === id) {                                              
                    e.dataTransfer!.setData("card", (e.target as Element).id);                                            
                }
            }
            
            dragConfig.ondrag = function(e) {
                if((e.target as Element).id === id) {   
                    console.log(`Card ${id} is beeing dragged.`)
                }
            }        
        }
    })

    React.useEffect(()=>{
        card.data.cardTitleConfig.save()
    }, [card.data.description])
    
    return (
        <div
            id={id}
            draggable            
            className="rounded-75 p-5 mb-2 w-full border-2 border-zinc-500 hover:bg-zinc-600"
            onClick={openCardModal}
        >
            {/* Title */}
            <div className="select-none text-gray-300 text-xl font-semibold">
                {text}
            </div>  
            
            {/* Modal */}            
            <dialog id={modalId} className="modal rounded-lg w-1/2 h-3/4 p-5 bg-slate-800 border-2 border-slate-500">                
                <form method="dialog" className="modal-box rounded text-white p-2 ">
                    {/* Title Div */}
                    <div className="modal-action flex w-full mb-1 mt-1 ">                    
                        {/* Title */}
                        <h3 className="font-semibold text-left text-4xl bg-slate-700 w-full p-2 mb-2">{text}</h3>
                        <button 
                            className="btn p-4 w-fit h-fit text-white text-right font-bold bg-slate-700 hover:bg-slate-400 p-1"
                        >
                            X
                        </button>
                    </div>          

                    {/* Body Div */}
                    <div className="flex w-full">
                        <div className="w-full mb-2 mt-2">  
                            <p className="text-sm mb-5 select-none font-semibold underline"
                            > 
                                History
                            </p>    
                            <div className="h-1/2 ">   
                                <div className="relative mb-10" data-te-input-wrapper-init>                                    
                                    <input                                    
                                        className="border-3 border-white peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
                                        type="text"                                                                                                                
                                        id="historyText" 
                                    />
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                        💻 Text something
                                    </label>
                                    <div 
                                        className="btn select-none bg-blue-700 hover:bg-blue-600 hover:cursor-pointer p-1 w-fit rounded-lg mt-5"
                                        onClick={addTextToHistory}
                                    >
                                        Insert History
                                    </div>
                                </div>
                                <div className="mt-5 bg-slate-900 p-5 overflow-y-auto rounded-lg">
                                    {
                                        description.map((item)=>{
                                            return (
                                                <div key={Math.random()} className="bg-slate-700 rounded p-2 mt-5">
                                                    
                                                    <p className="text-right opacity-50 text-sm p-2">{new Date().toTimeString()}</p>
                                                    <p className="rounded h-full p-5">
                                                        {item}
                                                    </p> 
                                                </div>
                                            )
                                        })                                        
                                    }
                                </div>                                            
                            </div>
                            <div className="mt-10">                                 
                                <div className="h-1/2 flex">                                
                                    <p className="text-sm mb-2">
                                        {owner}
                                    </p>                                                          
                                </div>
                            </div>
                        </div>                        
                        <div className="w-32 ml-20 mb-2 mt-2">
                            <p className="text-sm mb-2 select-none font-semibold underline"
                            > 
                                Tag List
                            </p>    
                            <ul className="list-disc">
                                {
                                    tags.map((tag)=>{
                                        return (
                                            <li
                                                key={Math.random()}
                                            >
                                                {tag}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>     
                    </div>
                </form>
            </dialog>                      
        </div>
    );
}

export default Card; // !_☄