export default class SystemColor {
    eColors = {
        0: "Red",
        1: "Blue",
        2: "Green",
        3: "Amber",
        4: "Cyan",
        5: "Transparent",        
        6: "Zinc", 
        7: "Orange", 
        8: "Yellow", 
        9: "Emerald", 
        10: "Sky", 
        11: "Fuchsia", 
        12: "Rose",         
    }

    getSystemColors (colorId : Number) : String {
        if(colorId === 0) return "bg-red-700";
        else if(colorId === 1) return "bg-blue-700";
        else if(colorId === 2) return "bg-green-700";
        else if(colorId === 3) return "bg-amber-700";
        else if(colorId === 4) return "bg-cyan-700 ";
        else if(colorId === 5) return "bg-transparent";
        else if(colorId === 6) return "bg-zinc-700";
        else if(colorId === 7) return "bg-orange-700";
        else if(colorId === 8) return "bg-yellow-700";
        else if(colorId === 9) return "bg-emerald-700";
        else if(colorId === 10) return "bg-sky-700";
        else if(colorId === 11) return "bg-fuchsia-700";
        else if(colorId === 12) return "bg-rose-700";
        else return ''
    }

    constructor(){
        // this class dont need to start it variables 
    }
}