import React from "react";
import BoardArea from "../components/boardArea";
import expandIcon from '../assets/expand-icon.png'
import { initialDataType } from "../types/initialDataType";
import DataGeneratorControl from "./dataGeneratorControl";
import { configObjectType } from "../types/configObjectType";

function EditAreaControl () {        
    const modalId : string = 'myModal' + Math.random()
    const boardModalId : string = 'myBoardModal' + Math.random()
    const dataControl = new DataGeneratorControl()
    // Side Nav
    const [showSideNav, setShowSideNav] = React.useState(false)      
    // Top Options
    const [showTopOptions, setShowTopOptions] = React.useState(false) 
    // Board Color    
    const [showBoardColors, setShowBoardColors] = React.useState<Boolean>(false)

    // Component data    
    let [data, setData] = React.useState<initialDataType>({
        configObj: {
            boardName: '',
            configs: 
            [{
                configObject: 
                {
                    name: 'Area Name',
                    boardColor : ' bg-transparent border-2 border-zinc-200',
                    ready: false,
                    tasks : []
                }                 
            }]
        }
    })

    function validaNewBoardData(name:string, count:string) : Boolean {
        let res = false
        if(name === undefined || count === undefined) {
            return res
        }
        else {
            try {
                let countValue = parseInt(count)    
                countValue <= 0 ? alert('Board areas number must be positive.') : res = true                            
            }
            catch(e) {
                alert("Fill all data to create a new board!")
            }
            return res
        }        
    }

    const createNewBoard = () => {
        let newBoardName = (document.getElementById('boardName') as HTMLInputElement).value
        let newBoardAreaNumber = (document.getElementById('boardNumber') as HTMLInputElement).value  
        if(validaNewBoardData(newBoardName, newBoardAreaNumber) === true)  {
            clearData()
            let boardCount : number = parseInt(newBoardAreaNumber)
            let config : configObjectType = {
                configObject: {
                    name: '',
                    boardColor : data.configObj.configs[0].configObject.boardColor,
                    ready: false,
                    tasks: []
                }
            }

            let arr : configObjectType[] = []                
            arr = [config]            

            for(let i=1; i < (boardCount-1); ++i) {
                let r : configObjectType = {
                    configObject: {
                        name: '',
                        boardColor : data.configObj.configs[0].configObject.boardColor,
                        ready: false,
                        tasks: []
                    }
                }
                arr.push(r)
            }
          
            setData({ configObj: { boardName: newBoardName, configs: arr } })
            closeBoarModal()
        }        
    }

    function changeBoardAreaOpacity() {    
        let div = document.getElementById('externalBoardArea')! as HTMLElement        
        showSideNav ? div.style.opacity = '100%' : div.style.opacity = '25%'
        showSideNav ? div.style.pointerEvents = '' : div.style.pointerEvents = 'none'    
        setShowSideNav(!showSideNav)
    }

    function clearData() {        
        setData({ configObj: { boardName: '', configs: [{ configObject : { name : '', boardColor : '', ready : false, tasks: [] } }] } })                
        closeCleanBoardModal()
    }

    function openBoardModal() {
        let myDialog : any = document.getElementById(modalId)
        myDialog.showModal()
    } 

    function closeBoarModal() {
        let myDialog : any = document.getElementById(modalId)
        myDialog.close()
    }

    function openCleanBoardModal() {
        let myDialog : any = document.getElementById(boardModalId)
        myDialog.showModal()
    } 

    function closeCleanBoardModal() {
        let myDialog : any = document.getElementById(boardModalId)
        myDialog.close()
    }

    function viewBoardColors () { setShowBoardColors(!showBoardColors) }

    function setColor (color : String) {
        switch(color)
        {
            case 'Red':
                data.configObj.configs.forEach(config => config.configObject.boardColor = "bg-red-700")
                setData({ configObj: { boardName: '', configs: data.configObj.configs } })
                break;

            case 'Blue':
                data.configObj.configs.forEach(config => config.configObject.boardColor = "bg-blue-700")
                setData({ configObj: { boardName: '', configs: data.configObj.configs } })
            break;

            case 'Teal':
                data.configObj.configs.forEach(config => config.configObject.boardColor = "bg-emerald-700")
                setData({ configObj: { boardName: '', configs: data.configObj.configs } })
            break;

            case 'Amber':
                data.configObj.configs.forEach(config => config.configObject.boardColor = "bg-amber-700")
                setData({ configObj: { boardName: '', configs: data.configObj.configs } })
            break;

            case 'Cyan':
                data.configObj.configs.forEach(config => config.configObject.boardColor = "bg-cyan-700")
                setData({ configObj: { boardName: '', configs: data.configObj.configs } })
            break;

            case 'Transparent':
                data.configObj.configs.forEach(config => config.configObject.boardColor = "bg-transparent")
                setData({ configObj: { boardName: '', configs: data.configObj.configs } })
            break;

            default:
                break;
        }
    }

    // Board Template Select
    function chooseBoardModel(boardModelId : Number) {                
        clearData()
        switch(boardModelId) {
            case 1:                 
                dataControl.getProjectManagementData()                                          
                .then((data) => { setData({ configObj: { boardName: '', configs: data } }) })                                
            break; 
            
            case 2:                 
                dataControl.getHabitControlData()                            
                .then((data) => { setData({ configObj: { boardName: '', configs: data } }) })                                            
            break; 

            case 3:                 
                dataControl.getEditorialCalendarData()                           
                .then((data) => { setData({ configObj: { boardName: '', configs: data } }) })                                             
            break; 

            case 4:                 
                dataControl.getIntegrationNewEmployees()                            
                .then((data) => { setData({ configObj: { boardName: '', configs: data } }) })                                              
            break; 
        }   
        
        changeBoardAreaOpacity()
    }  

    // Load Initial Board View
    React.useEffect(()=> {
        if(data.configObj.configs[0].configObject.name === 'Area Name') {            
            dataControl.getHabitControlData().then((data) => { setData({ configObj: { boardName: 'New 📋', configs: data } }) })                                
        }
    })

    // Side Nav
    function sideNav () {
        let ml10 = 'float-right', ml0 = 'z-10 float',
        transitionListDiv = 'select-none z-10 text-2xl select-none hover:cursor-pointer p-5 rounded transition ease-in-out delay-150 bg-zinc-600 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300',
        expandBtnDiv = 'select-none z-10 rounded-full w-12 h-12 mt-5 hover:cursor-pointer transition ease-in-out delay-350 bg-zinc-600 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-100'

        return(
            <div 
                className='select-none space-y-8 text-white text-lg font-bold p-2'
            >            
                {/* Expand Icon */}
                <div className={showSideNav ? ml10 : ml0}>                              
                    <img 
                        id="expandIcon"
                        alt='Expand' 
                        src={expandIcon}
                        className={expandBtnDiv}
                        onClick={changeBoardAreaOpacity}
                    />
                </div>      
                {/* Side nav control */}
                <div>
                    {                             
                        showSideNav ? 
                        (
                            // Expanded side nav
                            <div className="z-10 ">
                                <p className='underline select-none text-xl font-bold ml-5 mb-10 text-orange-400'>Board Templates</p>
                                <ul className='space-y-8 p-5'>
                                    <li className={transitionListDiv} onClick={()=>chooseBoardModel(1)}>Project Managment</li>
                                    <li className={transitionListDiv} onClick={()=>chooseBoardModel(2)}>Habit Control</li>
                                    <li className={transitionListDiv} onClick={()=>chooseBoardModel(3)}>Editorial Calendar</li>
                                    <li className={transitionListDiv} onClick={()=>chooseBoardModel(4)}>Integration of New Employees</li>
                                </ul>
                            </div>
                        )
                        :
                        (
                            // Closed side nav
                            <div className='w-0'></div>
                        )
                    }  
                </div>        
            </div>   
        )
    }

    return (
        <div className="bg-zinc-900">  
            <div className="flex shadow-2xl">
                <div className="h-auto bg-zinc-900">
                    {sideNav()}
                </div>
                {/* Boards, Card Area, Cards */}
                <div id="externalBoardArea" className="h-full w-full overflow-x-hidden">     
                    <div 
                        className="transition-colors delay-1000 duration-1000"
                        onMouseEnter={()=>setShowTopOptions(true)}
                        onMouseLeave={()=>setShowTopOptions(false)}
                    >
                        {
                            showTopOptions ?
                            (
                                <div className="flex text-center items-center justify-center w-full bg-zinc-800 p-5 text-gray-300 font-bold">
                                    <div 
                                        className="rounded text-center text-yellow-200 ml-10 p-1 select-none hover:cursor-pointer transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 hover:text-white duration-100"
                                        onClick={openBoardModal}
                                    >
                                        New Board
                                    </div>
                                    <div 
                                        className="rounded text-center text-blue-200 ml-10 p-1 select-none hover:cursor-pointer transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 hover:text-white duration-100"
                                        onClick={openCleanBoardModal}
                                    >
                                        Clear Board
                                    </div>
                                    <div 
                                        className = { 
                                            showBoardColors ? 
                                                "rounded text-center text-teal-200 ml-10 p-1 select-none hover:cursor-pointer"                                        
                                            :
                                                "rounded text-center text-teal-200 ml-10 p-1 select-none hover:cursor-pointer transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 hover:text-white duration-100"                                                                                            
                                        }                            
                                        onClick={viewBoardColors}
                                    >
                                        Set Boards Color
                                        {
                                            showBoardColors ? 
                                            (
                                                <ul className='mt-5 p-1 z-20 opacity-75'>
                                                    <li className='hover:bg-red-700 p-1 rounded text-white' onClick={()=> setColor('Red')}>Red</li>
                                                    <li className='hover:bg-sky-700 p-1 rounded text-white' onClick={()=> setColor('Blue')}>Blue</li>
                                                    <li className='hover:bg-emerald-700 p-1 rounded text-white' onClick={()=> setColor('Teal')}>Green</li>                                
                                                    <li className='hover:bg-amber-700 p-1 rounded text-white' onClick={()=> setColor('Amber')}>Amber</li>                                
                                                    <li className='hover:bg-cyan-700 p-1 rounded text-white' onClick={()=> setColor('Cyan')}>Cyan</li>                                
                                                    <li className='hover:bg-transparent p-1 rounded text-white' onClick={()=> setColor('Transparent')}>Transparent</li>                                
                                                </ul>
                                            )                                            
                                            :
                                            (<div></div>)                                            
                                        }
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="flex w-full bg-zinc-800 text-center p-2 text-gray-300 font-bold">
                                    <p className="w-full opacity-50 text-center text-sm">Expand Options</p>                                    
                                </div>
                            )
                        }   
                    </div>                                           
                    <div className="w-full">
                        <BoardArea
                            configObj={data.configObj}
                        />                            
                    </div>                     
                </div>
            </div>          
            {/* New Board Modal */}
            <dialog id={modalId} className="modal p-5 bg-zinc-800">                
                <form method="dialog" className="modal-box rounded text-white p-2 ">
                    {/* Modal Title  */}
                    <div className="modal-action text-right p-2">                                            
                        <button 
                            className="btn p-1 w-fit h-fit text-white font-bold rounded bg-sky-600 hover:bg-sky-400"
                        >
                            X
                        </button>
                    </div>          
                    {/* Modal Body */}
                    <div className="w-full max-w-xs">
                        <form className="bg-zinc-700 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                                    Board Name
                                </label>
                                <input 
                                    className="shadow text-black appearance-none border rounded w-full py-2 px-3 text-whiteleading-tight focus:outline-none focus:shadow-outline" 
                                    id="boardName" type="text" placeholder="Board Name" 
                                />
                            </div>
                            <div className="relative mb-3 text-black" data-te-input-wrapper-init>
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="boardNumber">
                                    Number of Boards
                                </label>
                                <input
                                    type="number"
                                    className="text-black bg-zinc-600 block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="boardNumber"
                                    placeholder="Example label" 
                                />                             
                                </div>
                            <div className="flex items-center justify-between">
                                <button 
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                    type="button"
                                    onClick={createNewBoard}
                                >
                                    Create Board
                                </button>                          
                            </div>
                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            Trello Clone by Aaron Carvalho
                        </p>
                    </div>
                </form>
            </dialog>  

            {/* Clear Boards Modal */}
            <dialog id={boardModalId} className="modal p-5 bg-zinc-800">                
                <form method="dialog" className="modal-box rounded text-white p-2 ">                 
                    {/* Modal Body */}
                    <div className="w-full max-w-xs">
                        <form className="bg-zinc-700 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block p-2 text-white text-lg font-semibold mb-2 text-red-500" htmlFor="username">
                                    Are you sure you want to clear all data?
                                </label>
                                <div className="flex gap-10">
                                    <div 
                                        onClick={clearData}
                                        className="btn font-bold select-none rounded p-2 bg-sky-500 hover:bg-sky-600 hover:cursor-pointer">
                                            Continue                                        
                                    </div>
                                    <div 
                                        onClick={closeCleanBoardModal}
                                        className="btn font-bold select-none rounded p-2 bg-red-500 hover:bg-red-600 hover:cursor-pointer">
                                            Cancel
                                    </div>
                                </div>
                            </div>                       
                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            Trello Clone by Aaron Carvalho
                        </p>
                    </div>
                </form>
            </dialog>  
        </div>
    )
}

export default EditAreaControl; // !_☄