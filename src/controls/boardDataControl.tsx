import CardDataControl from "./cardDataControl";
import { configObjectType } from "../types/configObjectType";

class BoardDataControl {
    getProjectManagementBoardData () : Promise<Array<configObjectType>> {
        return new Promise((resolve, reject) => {
            let cardData = new CardDataControl().getProjectManagementCardData()               
            let boardData : Array<configObjectType> = 
                [
                    { configObject: { name: 'Project Resources 📰', boardColor: 'bg-transparent', ready: false, tasks: cardData[0] } },
                    { configObject: { name: 'Next Daily Questions 😆' , boardColor: 'bg-transparent', ready: false, tasks: cardData[1] } },        
                    { configObject: { name: 'To Do', boardColor: 'bg-transparent', ready: false, tasks: cardData[2] } },
                    { configObject: { name: 'Pending', boardColor: 'bg-transparent', ready: false, tasks: cardData[3] } },
                    { configObject: { name: 'Mental Block', boardColor: 'bg-transparent', ready: false, tasks: cardData[4] } },
                    { configObject: { name: 'Done☑ 🆕', boardColor: 'bg-transparent', ready: false, tasks: []}}
                ]

            resolve(boardData)
        })        
    }

    getHabitControlData () : Promise<Array<configObjectType>> {
        return new Promise((resolve, reject) => {
            let cardData = new CardDataControl().getHabitControlData()                
            let boardData : Array<configObjectType> = 
                [
                    { configObject: { name: 'Start Here 🗽', boardColor: 'bg-transparent', ready: false, tasks: cardData[0] } },
                    { configObject: { name: 'Backlog - Year Projects', boardColor: 'bg-transparent', ready: false, tasks: cardData[1] } },                    
                    { configObject: { name: 'Done☑ 🎇', boardColor: 'bg-transparent', ready: false, tasks: cardData[3] } },
                    { configObject: { name: 'Daily 🔛', boardColor: 'bg-transparent', ready: false, tasks: cardData[4] }},      
                ]            

            resolve(boardData)
        })        
    }

    getEditorialCalendarData () : Promise<Array<configObjectType>> {
        return new Promise((resolve, reject) => {
            let cardData = new CardDataControl().getEditorialCalendarData()                
            let boardData : Array<configObjectType> = 
                [
                    { configObject: { name: 'Keep in mind 🧠', boardColor: 'bg-transparent', ready: false, tasks: cardData[0] } },
                    { configObject: { name: 'Articles Ideas', boardColor: 'bg-transparent', ready: false, tasks: cardData[1] } },                    
                    { configObject: { name: 'Searching', boardColor: 'bg-transparent', ready: false, tasks: cardData[3] } },
                    { configObject: { name: 'Writing ✏', boardColor: 'bg-transparent', ready: false, tasks: cardData[4] }},      
                    { configObject: { name: 'Editing💻', boardColor: 'bg-transparent', ready: false, tasks: cardData[5] }},      
                    { configObject: { name: 'Graphs and Images🖼', boardColor: 'bg-transparent', ready: false, tasks: cardData[6] }},      
                    { configObject: { name: 'Published Content', boardColor: 'bg-transparent', ready: false, tasks: cardData[7] }},      
                    { configObject: { name: 'Support', boardColor: 'bg-transparent', ready: false, tasks: cardData[8] }},      
                ]            

            resolve(boardData)
        })        
    }

    getIntegrationOfNewEmployeesData () : Promise<Array<configObjectType>> {
        return new Promise((resolve, reject) => {
            let cardData = new CardDataControl().getIntegrationOfNewEmployeesData()                
            let boardData : Array<configObjectType> = 
                [
                    { configObject: { name: 'Before the first day📅', boardColor: 'bg-transparent', ready: false, tasks: cardData[0] } },
                    { configObject: { name: 'Fisrt Day & First Week', boardColor: 'bg-transparent', ready: false, tasks: cardData[1] } },                    
                    { configObject: { name: 'Done☑', boardColor: 'bg-transparent', ready: false, tasks: cardData[3] } },
                    { configObject: { name: 'What we talking about?', boardColor: 'bg-transparent', ready: false, tasks: cardData[4] }},      
                    { configObject: { name: 'Our culture', boardColor: 'bg-transparent', ready: false, tasks: cardData[5] }},      
                    { configObject: { name: 'Who is who?', boardColor: 'bg-transparent', ready: false, tasks: cardData[6] }},                                              
                ]            

            resolve(boardData)
        })        
    }

    constructor () {}
}

export default BoardDataControl; // !_☄