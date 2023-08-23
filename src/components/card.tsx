import React from "react";
import { cardType } from "../types/cardType";

function Card({ uniqueKey, text, description, tags, owner } : cardType ) {  
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
                    e.dataTransfer!.setData("key", uniqueKey);                                                                  
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
            className="rounded-lg p-5 mb-2 w-full border-2 border-zinc-500 hover:bg-zinc-600"
            onClick={openCardModal}
        >
            {/* Title */}
            <div className="select-none text-gray-300 text-xl font-semibold">
                {text}
            </div>  
            
            {/* Modal */}            
            <dialog id={modalId} className="modal rounded-lg w-1/2 h-3/4 p-5 bg-blue-950 border-2 border-slate-500 cursor-auto">                
                <form method="dialog" className="modal-box rounded p-2 ">
                    {/* Title Div */}
                    <div className="modal-action text-white flex w-full mb-1 mt-1 ">                    
                        {/* Title */}
                        <h3 className="font-semibold text-left text-4xl w-full p-2 mb-2">{text}</h3>
                        <button 
                            className="btn p-4 rounded w-fit h-fit text-white text-right font-bold bg-blue-900 hover:bg-blue-800 p-1"
                        >
                            X
                        </button>
                    </div>          

                    {/* Body Div */}
                    <div className="flex w-full">
                        <div className="container rounded p-1 border-solid border-2 border-slate-700 text-sm p-2 w-full mb-2 mt-2">                             
                            <div className="">   
                                <div className="relative flex mb-5" data-te-input-wrapper-init>                                    
                                    <input                                    
                                        className="bg-slate-900 peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"                                    
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
                                        className="btn text-white ml-auto select-none bg-blue-700 p-2 w-fit rounded-lg hover:bg-blue-600 hover:cursor-pointer"
                                        onClick={addTextToHistory}
                                    >
                                        Add
                                    </div>
                                </div>                                                              
                                <div className="mt-2 bg-slate-900 p-5 rounded-lg">                                    
                                    <p className="text-2xl text-white select-none font-semibold underline"
                                    > 
                                        History
                                    </p>                                     
                                    <div className="overflow-y-auto">
                                    {                                        
                                        description.map((item)=>{
                                            return (
                                                <div key={Math.random()} className="text-white bg-slate-600 rounded p-2 mt-5">                                                    
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
                        <div className="rounded border-solid border-2 border-slate-700 w-72 p-2 ml-10 mb-2 mt-2 text-white h-fit">
                            <div className="bg-slate-900">
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
                                                        <input className="rounded-full w-5 h-5" type="color"></input>
                                                    </div>                                          
                                                    <div className="">
                                                        {tag}
                                                    </div>
                                                    <div 
                                                        className="mt-1 ml-5 opacity-50 text-sm text-center"
                                                    >
                                                        X
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>     
                    </div>
                </form>
            </dialog>                      
        </div>
    );
}

export default Card; // !_☄