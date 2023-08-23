export default class SystemColor {
    eColors = {
        0: "Red",
        1: "Blue",
        2: "Green",
        3: "Amber",
        4: "Cyan",
        5: "Transparent",        
    }

    getSystemColors (colorId : Number) : String {
        if(colorId === 0) return "bg-red-700 border-none";
        if(colorId === 1) return "bg-blue-700 border-none";
        if(colorId === 2) return "bg-amber-700 border-none";
        if(colorId === 3) return "bg-green-700 border-none";
        if(colorId === 4) return "bg-cyan-700 border-none";
        if(colorId === 5) return "bg-transparent";
        return ''    
    }

    constructor(){}
}