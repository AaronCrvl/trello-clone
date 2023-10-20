import { configObjectType } from "./configObjectType"

export type initialDataType = {    
    configObj : {
        boardName: string,
        boardCode? : number, 
        configs : configObjectType[]
    }
}