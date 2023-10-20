import { configObjectType } from "./configObjectType"
export type MyBoardsType = {
    boardName: string,
    boardCode? : number, 
    configs : configObjectType[]
}