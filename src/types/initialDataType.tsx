import { configObjectType } from "./configObjectType"

export type initialDataType = {    
    configObj : {
        boardName: string,
        configs : configObjectType[]
    }
}