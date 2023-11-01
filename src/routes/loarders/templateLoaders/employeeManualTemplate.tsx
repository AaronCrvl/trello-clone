import { tagType } from "../../../types/tagType";

export default class EmployeeManualTemplate {
    public getBoards() : any {

      const tagTypes : Array<tagType[]> = 
      [
        [{"colorHex":'#E74C3C', "description":'Warning⚠'}, {"colorHex":'#F1C40F ', "description":'Attention📶'}],
        [{"colorHex":'#58D68D', "description":'Go On🎨'}, {"colorHex":'#AF7AC5 ', "description":'Vibez📳'}, {"colorHex":'#2980B9 ', "description":'Meeting'}],
        [{"colorHex":'#ECF0F1', "description":'Light Work'}, {"colorHex":'#17202A', "description":'A.S.A.P'}, {"colorHex":'#616A6B', "description":'Assigment'}],        
        [{"colorHex":'#E67E22', "description":'On Fire🔥'}, {"colorHex":'#9B59B6', "description":'💜'}],        
        [{"colorHex":'#515A5A', "description":'Calm🤙'}, {"colorHex":'#2E86C1', "description":'📘'}],        
        [{"colorHex":'#186A3B', "description":'🥗' }, {"colorHex":'#A9DFBF', "description":'🥬'}],        
      ]

      const cardsJson = 
      [
        [
          {"uniqueKey":'Card'+Math.random(),"text":"On your first day? Read This🎉","description":[""],"tags":tagTypes[5], "color":"bg-red-700", "owner":""},         
          {"uniqueKey":'Card'+Math.random(),"text":"Weekly Updates","description":["Team and project news."],"tags":[], "color":"bg-red-700", "owner":""}
        ],
        [
          {"uniqueKey":'Card'+Math.random(),"text":"Health Insurance🏥","description":[""],"tags":[],"color":"bg-indigo-700", "owner":""},
          {"uniqueKey":'Card'+Math.random(),"text":"Secure👮","description":[""],"tags":tagTypes[3], "color":"bg-transparent", "owner":""},
          {"uniqueKey":'Card'+Math.random(),"text":"Dental🧪","description":[""],"tags":tagTypes[2],"color":"bg-transparent","owner":""},
        ],
        [
          {"uniqueKey":'Card'+Math.random(),"text":"Day Off Policy🚨","description":[""],"tags":[],"color":"bg-transparent","owner":""},
          {"uniqueKey":'Card'+Math.random(),"text":"Medical License👨‍⚕️","description":[""],"tags":tagTypes[5], "color":"bg-purple-700", "owner":""},
        ],
        [],
        [],
        [
          {"uniqueKey":'Card'+Math.random(),"text":"Home Office Policy🚨","description":[""],"tags":tagTypes[4], "color":"bg-transparent", "owner":""},
        ]
        
      ]
  
      const dataJson = 
      [
        {"configObject":{"name":"Your first day✉","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[0]}},
        {"configObject":{"name":"Benefits👋","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[1]}},
        {"configObject":{"name":"Vacation / Days Off📅","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[2]}},
        {"configObject":{"name":"Trips / Conferences📅","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[3]}},
        {"configObject":{"name":"QG 🏗","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[4]}},
        {"configObject":{"name":"Home Office 🏠","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[5]}}
      ]
      
      return new Response(JSON.stringify(dataJson), {
          status: 200,
          headers: {
            "Content-Type": "application/json; utf-8",
          },
      });
    }

    constructor(){
      // this class dont need to start it variables 
    }
  } // !_☄