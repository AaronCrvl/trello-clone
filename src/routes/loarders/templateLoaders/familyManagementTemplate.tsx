import { tagType } from "../../../types/tagType";

export default class FamilyManagementTemplate {
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
          {"uniqueKey":'Card'+Math.random(),"text":"Hi Family!😄","description":[""],"tags":tagTypes[4], "color":"bg-red-700", "owner":""},                   
        ],
        [
          {"uniqueKey":'Card'+Math.random(),"text":"Training👟","description":[""],"tags":tagTypes[0], "color":"bg-transparent", "owner":""},
          {"uniqueKey":'Card'+Math.random(),"text":"Baby room👉","description":[""],"tags":[], "color":"bg-red", "owner":""},        
        ],
        [
          {"uniqueKey":'Card'+Math.random(),"text":"Day Off Policy🚨","description":[""],"tags":[], "color":"bg-transparent", "owner":""},
          {"uniqueKey":'Card'+Math.random(),"text":"Medical License👨‍⚕️","description":[""],"tags":[], "color":"bg-transparent", "owner":""},
        ],
        [],
        [],        
        [
          {"uniqueKey":'Card'+Math.random(),"text":"Home Office Policy🚨","description":[""],"tags":tagTypes[5], "color":"bg-transparent", "owner":""},
        ],
        [],
        [
          {"uniqueKey":'Card'+Math.random(),"text":"Banana🍌","description":[""],"tags":tagTypes[1],"color":"bg-transparent", "owner":""},
          {"uniqueKey":'Card'+Math.random(),"text":"Melon🍈","description":[""],"tags":[],"color":"bg-transparent", "owner":""},
          {"uniqueKey":'Card'+Math.random(),"text":"Grapes🍇","description":[""],"tags":[],"color":"bg-transparent", "owner":""},
          {"uniqueKey":'Card'+Math.random(),"text":"Lemon🍋","description":[""],"tags":[],"color":"bg-transparent", "owner":""},
          {"uniqueKey":'Card'+Math.random(),"text":"Tangerine🍊","description":[""],"tags":tagTypes[3],"color":"bg-transparent", "owner":""},
        ],      
      ]
  
      const dataJson = 
      [
        {"configObject":{"name":"Let's organize!🏡","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[0]}},
        {"configObject":{"name":"Goals⚡","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[1]}},
        {"configObject":{"name":"Dates📅","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[2]}},
        {"configObject":{"name":"Finance💰","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[3]}},
        {"configObject":{"name":"Family Tasks😔","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[4]}},
        {"configObject":{"name":"House Tasks🏠","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[5]}},
        {"configObject":{"name":"Week Menu🍲","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[6]}},
        {"configObject":{"name":"Groceries🍌","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[7]}}
      ]
      
      return new Response(JSON.stringify(dataJson), {
          status: 200,
          headers: {
            "Content-Type": "application/json; utf-8",
          },
      });
    }
  } // !_☄