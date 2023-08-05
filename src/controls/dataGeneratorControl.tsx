import BoardDataControl from "./boardDataControl";
import { configObjectType } from "../types/configObjectType";

class DataGeneratorControl {    

    getProjectManagementData () : Promise<configObjectType[]> {        
        return new Promise((resolve, reject) => {
            try {
                let boardData = new BoardDataControl().getProjectManagementBoardData()                 
                resolve(boardData)
            }   
            catch(e){
                reject(e)
            }
        })        
    }

    getHabitControlData () : Promise<configObjectType[]> {
        return new Promise((resolve, reject) => {
            try {
                let boardData = new BoardDataControl().getHabitControlData()                 
                resolve(boardData)
            }   
            catch(e){
                reject(e)
            }
        })  
    }

    getEditorialCalendarData () : Promise<configObjectType[]> {
        return new Promise((resolve, reject) => {
            try {
                let boardData = new BoardDataControl().getProjectManagementBoardData()                 
                resolve(boardData)
            }   
            catch(e){
                reject(e)
            }
        })  
    }

    getIntegrationNewEmployees () : Promise<configObjectType[]> {
        return new Promise((resolve, reject) => {
            try {
                let boardData = new BoardDataControl().getProjectManagementBoardData()                 
                resolve(boardData)
            }   
            catch(e){
                reject(e)
            }
        })  
    }

    constructor () {}
}

export default DataGeneratorControl; //!_