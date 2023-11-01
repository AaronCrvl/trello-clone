import { tagType } from "../../../types/tagType";
import uniqid from 'uniqid';

export default class HabitControlLoader {
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
        {"uniqueKey":'Card'+uniqid(),"text":"Set tags on your cards","description":[""], "tags":tagTypes[4], "color":"bg-transparent", "owner":""},
        {"uniqueKey":'Card'+uniqid(),"text":"Launch Timeline","description":[""],"tags":tagTypes[0], "color":"bg-blue-700", "owner":""},
        {"uniqueKey":'Card'+uniqid(),"text":"Weekly Updates","description":["Team and project news."],"tags":[], "color":"bg-sky-700", "owner":""}
      ],
      [
        {"uniqueKey":'Card'+uniqid(),"text":"HTML Problem","description":[""],"tags":[], "color":"bg-green-700","owner":""},
        {"uniqueKey":'Card'+uniqid(),"text":"Unity Tests","description":[""],"tags":tagTypes[3], "color":"bg-lime-700", "owner":""}
      ],
      [
        {"uniqueKey":'Card'+uniqid(),"text":"Implement Site Banner","description":[""],"tags":[], "color":"bg-white", "owner":""},
        {"uniqueKey":'Card'+uniqid(),"text":"React Course","description":[""],"tags":tagTypes[2], "color":"bg-transparent", "owner":""}
      ],
      [
        {"uniqueKey":'Card'+uniqid(),"text":"Legal Process","description":[""],"tags":tagTypes[1], "color":"bg-transparent", "owner":""}
      ],
      [
        {"uniqueKey":'Card'+uniqid(),"text":"Unfinished Tasks","description":[""],"tags":[], "color":"bg-transparent", "owner":""},
        {"uniqueKey":'Card'+uniqid(),"text":"Timeline","description":[""],"tags":tagTypes[0],"color":"bg-sky-700", "owner":""},
        {"uniqueKey":'Card'+uniqid(),"text":"Finished","description":["Just include tasks that was finished"],"tags":[],"color":"bg-transparent", "owner":""}
      ]
    ]

    const dataJson = 
    [
      {"configObject":{"uniqId" : uniqid(),"name":"Start Here 🗽","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[0]}},
      {"configObject":{"uniqId" : uniqid(),"name":"Backlog - Year Projects","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[1]}},
      {"configObject":{"uniqId" : uniqid(),"name":"Done☑ 🎇","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[2]}},
      {"configObject":{"uniqId" : uniqid(),"name":"Daily 🔛","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[3]}}
    ]
    
    return new Response(JSON.stringify(dataJson), {
        status: 200,
        headers: {
          "Content-Type": "application/json; utf-8",
        },
    });
  }

  constructor(){
    // this HabitControlLoader class dont need to start it variables 
  }
} // !_☄