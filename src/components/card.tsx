import React from "react";
import { cardType } from "../types/cardType";
import editIcon from '../assets/edit-icon.png'

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
                save : ()=>{
                    let txt = document.getElementById("cardTitle")! as HTMLInputElement
                    let data = {
                        text:txt.value, 
                        description: description, 
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
    
    return (
        <div
            id={id}
            draggable            
            className="rounded bg-indigo-900 hover:bg-indigo-400 hover:cursor-pointer p-5 mb-2 w-full"
            onClick={openCardModal}
        >
            {/* Title */}
            <div className="select-none text-gray-300 text-xl font-semibold">
                {text}
            </div>  
            
            {/* Modal */}            
            <dialog id={modalId} className="modal w-1/2 h-3/4 p-5 bg-zinc-800">                
                <form method="dialog" className="modal-box rounded text-white p-2 ">
                    {/* Title Div */}
                    <div className="modal-action flex w-full mb-1 mt-1 ">                    
                        <h3 className=" rounded font-semibold text-left text-4xl bg-blue-900 w-full p-2 mb-2">{text}</h3>
                        <button 
                            className="btn p-4 w-fit h-fit text-white text-right font-bold rounded bg-indigo-600 hover:bg-indigo-400 p-1"
                        >
                            X
                        </button>
                    </div>          

                    {/* Body Div */}
                    <div className="flex w-full">
                        <div className="w-full mb-2 mt-2">  
                            <p className="text-sm mb-2 select-none font-semibold underline"
                            > 
                                Description
                            </p>    
                            <div className="h-1/2 bg-zinc-700 overflow-y-scroll">                                                                                                                           
                                <p className="rounded h-full p-1">
                                    {description}
                                </p>                                             
                            </div>
                            <p className="text-sm select-none mt-10 mb-2 font-semibold underline w-full"
                            > 
                                Owners
                            </p>   
                            <div className="h-1/2 flex">                                
                                <p className="text-sm mb-2">
                                    {owner}
                                </p>                                                          
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