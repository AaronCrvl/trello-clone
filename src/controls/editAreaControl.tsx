import React from "react";
import BoardArea from "../components/boardArea";
import expandIcon from '../assets/expand-icon.png'
import { initialDataType } from "../types/initialDataType";
import DataGeneratorControl from "./dataGeneratorControl";

function EditAreaControl () {        
    const dataControl = new DataGeneratorControl()
    const [showSideNav, setShowSideNav] = React.useState(false)              
    let [data, setData] = React.useState<initialDataType>({
        configObj: {
            configs:
                [
                    {
                        configObject: {
                            name: 'Area Name',
                            ready: false,
                            tasks : []
                        }                 
                    },
                ]
        }
    })

    function changeBoardAreaOpacity(){    
        let div = document.getElementById('externalBoardArea')! as HTMLElement        
        showSideNav ? div.style.opacity = '100%' : div.style.opacity = '25%'
        showSideNav ? div.style.pointerEvents = '' : div.style.pointerEvents = 'none'    
        setShowSideNav(!showSideNav)
    }

    function clearData() {
        setData({
            configObj: {
                configs: [{
                    configObject : {
                        name : '',
                        ready : false,
                        tasks: []
                    }
                }]
            }
        })
    }

    function chooseBoardModel(boardModelId : Number) {                
        clearData()
        switch(boardModelId) {
            case 1:                 
                let projectManagementTemplate = dataControl.getProjectManagementData()                                          
                projectManagementTemplate.then((data) => {                    
                    setData({
                        configObj: {
                            configs: data
                        }
                    })                                        
                })                                
            break; 
            
            case 2:                 
                let habitControlTemplate = dataControl.getHabitControlData()                            
                habitControlTemplate.then((data) => {                    
                    setData({
                        configObj: {
                            configs: data
                        }
                    })                                        
                })                
            break; 

            case 3:                 
                let editorialCalendarTemplate = dataControl.getEditorialCalendarData()                           
                editorialCalendarTemplate.then((data) => {                    
                    setData({
                        configObj: {
                            configs: data
                        }
                    })                                        
                })             
            break; 

            case 4:                 
                let newEmpolyeesTemplate = dataControl.getIntegrationNewEmployees()                            
                newEmpolyeesTemplate.then((data) => {                    
                    setData({
                        configObj: {
                            configs: data
                        }
                    })                                        
                })              
            break; 
        }   
        
        changeBoardAreaOpacity()
    }  

    // Side Nav
    function sideNav () {
        let ml10 = 'float-right', ml0 = 'float-right w-10',
        transitionListDiv = 'select-none text-2xl select-none hover:cursor-pointer p-5 rounded transition ease-in-out delay-150 bg-zinc-600 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300',
        expandBtnDiv = 'select-none z-10 rounded-full w-12 h-12 mt-5 hover:cursor-pointer transition ease-in-out delay-350 bg-zinc-600 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-100'

        return(
            <div 
                className='select-none space-y-8 text-white text-lg font-bold p-2'
            >            
                <div className={showSideNav ? ml10 : ml0}>          
                    <img 
                        id="expandIcon"
                        alt='Expand' 
                        src={expandIcon}
                        className={expandBtnDiv}
                        onClick={changeBoardAreaOpacity}
                    />
                </div>      
                <div>
                    {                    
                        showSideNav ? 
                        (
                            <div className="z-10 ">
                                <p className='underline select-none text-xl font-bold ml-5 mb-10 text-orange-400'>Board Models</p>
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
                            <div className='w-0'></div>
                        )
                    }  
                </div>        
            </div>   
        )
    }

    return (
        <div className="flex bg-zinc-900">
            <div className="h-auto bg-zinc-600">
                {sideNav()}
            </div>
            <div id="externalBoardArea" className="h-full w-full">                               
                <BoardArea
                    configObj={data.configObj}
                />                                
            </div>
        </div>
    )
}

export default EditAreaControl; //!_