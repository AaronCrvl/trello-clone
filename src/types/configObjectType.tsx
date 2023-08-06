import { cardType } from "./cardType"

export type configObjectType = {    
    configObject: {
        name : string,
        ready : boolean, 
        tasks : Array<cardType>
    }
}