import { configObjectType } from "../configObjectType";

export default class SystemBoardTemplates {
    eBoardsTemplates = {
        0: "getProjectManagementData",
        1: "getHabitControlData",
        2: "getEditorialCalendarData",
        3: "getIntegrationNewEmployees",           
    }
    
    getBoardTemplateID (template : string) : Promise<number> {        
        return new Promise((resolve, reject) => 
        {                                    
            if(template === 'getProjectManagementData') resolve(0)
            if(template === 'getHabitControlData') resolve(1)
            if(template === 'getEditorialCalendarData') resolve(2)
            if(template === 'getIntegrationNewEmployees') resolve(3)                                
        })
    }
     
    constructor(){}
}