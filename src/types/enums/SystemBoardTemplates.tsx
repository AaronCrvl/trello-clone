import DataGeneratorControl from "../../controls/dataGeneratorControl";
import { configObjectType } from "../configObjectType";

export default class SystemBoardTemplates {
    eBoardsTemplates = {
        0: "getProjectManagementData",
        1: "getHabitControlData",
        2: "getEditorialCalendarData",
        3: "getIntegrationNewEmployees",           
    }

    getBoardTemplate (templateId : Number) : Promise<configObjectType[]> {        
        return new Promise((resolve, reject) => 
        {
            let generator = new DataGeneratorControl()
            if (templateId === -1) {
                resolve(generator.getHabitControlData().then(data => {return(data)}))
                // resolve([{ configObject: { name: '', boardColor: 'bg-transparent', ready: false, tasks: [] } }])
            }
                        
            if(templateId === 0) resolve(generator.getProjectManagementData().then(data => {return data}))
            if(templateId === 1) resolve(generator.getHabitControlData().then(data => {return(data)}))
            if(templateId === 2) resolve(generator.getEditorialCalendarData().then(data => {return data}))
            if(templateId === 3) resolve(generator.getIntegrationNewEmployees().then(data => {return data}))                                
        })
    }

    constructor(){}
}