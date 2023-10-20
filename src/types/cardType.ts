import { tagType } from "./tagType"

export type cardType = {    
    uniqueKey : string,
    text : string,
    description : Array<string>,
    tags : Array<tagType>,
    owner : string,
    color : string,
    parentCallback : Function
}
