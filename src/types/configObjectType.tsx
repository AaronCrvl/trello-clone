import { cardType } from "./cardType"

export type configObjectType = {    
    configObject: {
        name: string,
        tasks : Array<cardType>
    }
}