import { tagType } from "../../../types/tagType";
import uniqid from 'uniqid';

export default class IntegrationOfNewEmployeesTemplateLoader {
    public getBoards() : any {   

        const tagTypes : Array<tagType[]> =
        [
            [{"colorHex":'#E74C3C', "description":'Warning⚠'}, {"colorHex":'#F1C40F ', "description":'Attention📶'}],
            [{"colorHex":'#58D68D', "description":'Go On🎨'}, {"colorHex":'#AF7AC5 ', "description":'Vibez📳'}, {"colorHex":'#2980B9 ', "description":'Meeting'}],
            [{"colorHex":'#ECF0F1', "description":'Light Work'}, {"colorHex":'#17202A', "description":'A.S.A.P'}, {"colorHex":'#616A6B', "description":'Assigment'}],        
            [{"colorHex":'#E67E22', "description":'On Fire🔥'}, {"colorHex":'#9B59B6', "description":'💜'}],        
            [{"colorHex":'#515A5A', "description":'Calm🤙'}, {"colorHex":'#2E86C1', "description":'📘'}],        
        ]
        
        const cardsJson = 
        [
            [
                {"uniqueKey":'Card'+uniqid(),"text":"Vision 👀","description":[""],"tags":tagTypes[3], "color":"bg-blue-700","owner":""},
                {"uniqueKey":'Card'+uniqid(),"text":"Year to do list 💛","description":[""],"tags":[], "color":"bg-cyan-700","owner":""}
            ],
            [
                {"uniqueKey":'Card'+uniqid(),"text":"Sessions 🙇","description":[""],"tags":tagTypes[0], "color":"bg-lime-700","owner":""},
                {"uniqueKey":'Card'+uniqid(),"text":"Personal Development","description":[""],"tags":tagTypes[2], "color":"bg-transparent", "owner":""}
            ],
            [
                {"uniqueKey":'Card'+uniqid(),"text":"Implement New Routines","description":[""],"tags":[], "color":"bg-transparent", "owner":""},
                {"uniqueKey":'Card'+uniqid(),"text":"React To The World Around You","description":[""],"tags":tagTypes[3], "color":"bg-transparent", "owner":""}
            ],
            [],
            [
                {"uniqueKey":'Card'+uniqid(),"text":"Unfinished Tasks","description":[""],"tags":tagTypes[4], "color":"bg-transparent", "owner":""},
                {"uniqueKey":'Card'+uniqid(),"text":"Timeline","description":[""],"tags":[], "color":"bg-transparent", "owner":""},
                {"uniqueKey":'Card'+uniqid(),"text":"🎆 Finished 🎆","description":["Just include tasks that was finished"],"tags":tagTypes[1], "color":"bg-lime-700", "owner":""}
            ],
            []
        ]

        const dataJson = 
        [
            {"configObject":{"uniqId" : uniqid(), "name":"Before the first day📅","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[0]}},
            {"configObject":{"uniqId" : uniqid(), "name":"Fisrt Day & First Week","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[1]}},
            {"configObject":{"uniqId" : uniqid(), "name":"Done☑","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[2]}},
            {"configObject":{"uniqId" : uniqid(), "name":"What we talking about?","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[3]}},
            {"configObject":{"uniqId" : uniqid(), "name":"Our culture","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[4]}},
            {"configObject":{"uniqId" : uniqid(), "name":"Who is who?","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[5]}}    
        ]

        return new Response(JSON.stringify(dataJson), {   
            status: 200,
            headers: {        
            "Content-Type": "application/json; utf-8",
            },
        });
    }
   
    constructor(){
        // this IntegrationOfNewEmployeesTemplateLoader class dont need to start it variables 
    }
} // !_☄