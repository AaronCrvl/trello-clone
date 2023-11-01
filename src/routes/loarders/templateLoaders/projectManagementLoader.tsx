import { tagType } from "../../../types/tagType";
import uniqid from 'uniqid';

export default class ProjectManagementLoader {
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
          {"uniqueKey":uniqid(),"text":"Set tags on your cards","description":[""],"tags":tagTypes[0], "color":"bg-amber-700", "owner":""},
          {"uniqueKey":uniqid(),"text":"Launch Timeline","description":[""],"tags":tagTypes[1], "color":"bg-transparent", "owner":""},
          {"uniqueKey":uniqid(),"text":"Weekly Updates","description":["Team and project news."],"tags":tagTypes[2], "color":"bg-blue-700", "owner":""}
        ],
        [
          {"uniqueKey":uniqid(),"text":"HTML Problem","description":[""],"tags":tagTypes[3], "color":"bg-transparent", "owner":""},
          {"uniqueKey":uniqid(),"text":"Unity Tests","description":[""],"tags":["Important","Team"], "color":"bg-transparent", "owner":""}
        ],
        [
          {"uniqueKey":uniqid(),"text":"Implement Site Banner","description":[""],"tags":[], "color":"bg-red-700", "owner":""},
          {"uniqueKey":uniqid(),"text":"React Course","description":[""],"tags":tagTypes[4], "color":"bg-amber-700", "owner":""}
        ],
        [
          {"uniqueKey":uniqid(),"text":"Legal Process","description":[""],"tags":["People Relation"], "color":"bg-lime-700", "owner":""}
        ],
        [
          {"uniqueKey":uniqid(),"text":"Unfinished Tasks","description":[""],"tags":tagTypes[0], "color":"bg-transparent", "owner":""},
          {"uniqueKey":uniqid(),"text":"Timeline","description":[""],"tags":["Launch","Project"], "color":"bg-transparent", "owner":""},
          {"uniqueKey":uniqid(),"text":"Finished","description":["Just include tasks that was finished"],"tags":tagTypes[1], "color":"bg-transparent", "owner":""}
        ]
      ]

      const dataJson = [
        {"configObject":{"uniqId" : uniqid(), "name":"Project Resources 📰","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[0]}},
        {"configObject":{"uniqId" : uniqid(), "name":"Next Daily Questions 😆","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[1]}},
        {"configObject":{"uniqId" : uniqid(),  "name":"To Do","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[2]}},
        {"configObject":{"uniqId" : uniqid(),  "name":"Pending","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[3]}},
        {"configObject":{"uniqId" : uniqid(), "name":"Mental Block","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[4]}},
        {"configObject":{"uniqId" : uniqid(), "name":"Done☑ 🆕","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[5]}}
      ]
      
      return new Response(JSON.stringify(dataJson), {
          status: 200,
          headers: {
            "Content-Type": "application/json; utf-8",
          },
      });
  }  
  
  constructor(){
    // this ProjectManagementLoader class dont need to start it variables 
  }
} // !_☄