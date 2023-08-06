import CardDataControl from "./cardDataControl";
import { configObjectType } from "../types/configObjectType";

class BoardDataControl {
    getProjectManagementBoardData () : Promise<Array<configObjectType>> {
        return new Promise((resolve, reject) => {
            let cardData = new CardDataControl().getProjectManagementCardData()               
            let boardData : Array<configObjectType> = 
                [
                    { configObject: { name: 'Project Resources 📰', ready: false, tasks: cardData[0] } },
                    { configObject: { name: 'Next Daily Questions 😆' , ready: false, tasks: cardData[1] } },        
                    { configObject: { name: 'To Do', ready: false, tasks: cardData[2] } },
                    { configObject: { name: 'Pending', ready: false, tasks: cardData[3] } },
                    { configObject: { name: 'Mental Block', ready: false, tasks: cardData[4] } },
                    { configObject: { name: 'Done 🆕', ready: false, tasks: []}}
                ]

            resolve(boardData)
        })        
    }

    getHabitControlData () : Promise<Array<configObjectType>> {
        return new Promise((resolve, reject) => {
            let cardData = new CardDataControl().getHabitControlData()                
            let boardData : Array<configObjectType> = 
                [
                    { configObject: { name: 'Start Here 🗽', ready: false, tasks: cardData[0] } },
                    { configObject: { name: 'Backlog - Year Projects', ready: false, tasks: cardData[1] } },                    
                    { configObject: { name: 'Done 🎇', ready: false, tasks: cardData[3] } },
                    { configObject: { name: 'Daily 🔛', ready: false, tasks: cardData[4] }},      
                ]
            

            resolve(boardData)
        })        
    }

    constructor () {}
}

export default BoardDataControl; // !_☄