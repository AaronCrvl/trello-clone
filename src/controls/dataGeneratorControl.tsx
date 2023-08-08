import BoardDataControl from "./boardDataControl";
import { configObjectType } from "../types/configObjectType";

class DataGeneratorControl {    

    getProjectManagementData () : Promise<configObjectType[]> {        
        return new Promise((resolve, reject) => {
            try {
                new BoardDataControl().getProjectManagementBoardData().then(resolve)                                                              
            }   
            catch(e){
                reject(e)
            }
        })        
    }

    getHabitControlData () : Promise<configObjectType[]> {
        return new Promise((resolve, reject) => {
            try {
                new BoardDataControl().getHabitControlData().then(resolve)                                              
            }   
            catch(e){
                reject(e)
            }
        })  
    }

    getEditorialCalendarData () : Promise<configObjectType[]> {
        return new Promise((resolve, reject) => {
            try {
                new BoardDataControl().getEditorialCalendarData().then(resolve)                              
            }   
            catch(e){
                reject(e)
            }
        })  
    }

    getIntegrationNewEmployees () : Promise<configObjectType[]> {
        return new Promise((resolve, reject) => {
            try {
                new BoardDataControl().getIntegrationOfNewEmployeesData().then(resolve)                                              
            }   
            catch(e){
                reject(e)
            }
        })  
    }

    constructor () {}
}

export default DataGeneratorControl; // !_☄