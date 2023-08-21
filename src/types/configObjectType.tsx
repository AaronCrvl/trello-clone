import { cardType } from "./cardType"

export type configObjectType = {    
    configObject: {
        // board name
        name : string,
        // board color
        boardColor : string, 
        // no use yet
        ready : boolean, 
        // card in the card Area (configObjectType)
        tasks : Array<cardType>
    }
}