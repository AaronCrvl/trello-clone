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
                    { configObject: { name: 'Done☑ 🆕', ready: false, tasks: []}}
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
                    { configObject: { name: 'Done☑ 🎇', ready: false, tasks: cardData[3] } },
                    { configObject: { name: 'Daily 🔛', ready: false, tasks: cardData[4] }},      
                ]            

            resolve(boardData)
        })        
    }

    getEditorialCalendarData () : Promise<Array<configObjectType>> {
        return new Promise((resolve, reject) => {
            let cardData = new CardDataControl().getEditorialCalendarData()                
            let boardData : Array<configObjectType> = 
                [
                    { configObject: { name: 'Keep in mind 🧠', ready: false, tasks: cardData[0] } },
                    { configObject: { name: 'Articles Ideas', ready: false, tasks: cardData[1] } },                    
                    { configObject: { name: 'Searching', ready: false, tasks: cardData[3] } },
                    { configObject: { name: 'Writing ✏', ready: false, tasks: cardData[4] }},      
                    { configObject: { name: 'Editing💻', ready: false, tasks: cardData[5] }},      
                    { configObject: { name: 'Graphs and Images🖼', ready: false, tasks: cardData[6] }},      
                    { configObject: { name: 'Published Content', ready: false, tasks: cardData[7] }},      
                    { configObject: { name: 'Support', ready: false, tasks: cardData[8] }},      
                ]            

            resolve(boardData)
        })        
    }

    getIntegrationOfNewEmployeesData () : Promise<Array<configObjectType>> {
        return new Promise((resolve, reject) => {
            let cardData = new CardDataControl().getIntegrationOfNewEmployeesData()                
            let boardData : Array<configObjectType> = 
                [
                    { configObject: { name: 'Before the first day📅', ready: false, tasks: cardData[0] } },
                    { configObject: { name: 'Fisrt Day & First Week', ready: false, tasks: cardData[1] } },                    
                    { configObject: { name: 'Done☑', ready: false, tasks: cardData[3] } },
                    { configObject: { name: 'What we talking about?', ready: false, tasks: cardData[4] }},      
                    { configObject: { name: 'Our culture', ready: false, tasks: cardData[5] }},      
                    { configObject: { name: 'Who is who?', ready: false, tasks: cardData[6] }},                                              
                ]            

            resolve(boardData)
        })        
    }

    constructor () {}
}

export default BoardDataControl; // !_☄