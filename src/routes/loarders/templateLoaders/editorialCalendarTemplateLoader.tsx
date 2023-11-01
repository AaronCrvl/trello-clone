import { tagType } from "../../../types/tagType";
import uniqid from 'uniqid';

export default class EditorialCalendarTemplateLoader {
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

    // dont declare type beceause of callbackfunction
    // data is converted into the Array<cardType> on loader finish
    const cardsJson = 
    [
      [
        {"uniqueKey":"Card"+uniqid(),"text":"What can't miss on the article","description":[""],"tags": tagTypes[0], "color":"bg-transparent", "owner":""},
        {"uniqueKey":"Card"+uniqid(),"text":"Blog Guideline","description":[""],"tags":tagTypes[5],"color":"bg-red-700", "owner":""},
        {"uniqueKey":"Card"+uniqid(),"text":"Blog Checlist","description":[""],"tags":tagTypes[4],"color":"bg-transparent", "owner":""}
      ],
      [
        {"uniqueKey":"Card"+uniqid(),"text":"No wory's week","description":[""],"tags":[],"color":"bg-lime-700", "owner":""},
        {"uniqueKey":"Card"+uniqid(),"text":"What part of the day is you more creative","description":[""],"tags":[],"color":"bg-sky-700", "owner":""},
        {"uniqueKey":"Card"+uniqid(),"text":"Remote Week","description":[""],"tags":tagTypes[1],"color":"bg-blue-700", "owner":""}
      ],
      [
        {"uniqueKey":"Card"+uniqid(),"text":"Browsing..","description":[""],"tags":tagTypes[0],"color":"bg-amber-700","owner":""},
        {"uniqueKey":"Card"+uniqid(),"text":"Digital Results","description":[""],"tags":["Important","Team"],"color":"bg-amber-700", "owner":""}
      ],
      [],
      [
        {"uniqueKey":"Card"+uniqid(),"text":"Unfinished Tasks","description":[""],"tags":tagTypes[0],"color":"bg-indigo-700", "owner":""},
        {"uniqueKey":"Card"+uniqid(),"text":"🎆 Finished 🎆","description":["Just include tasks that was finished"],"tags":tagTypes[4],"color":"bg-lime-700", "owner":""}
      ],
      [
        {"uniqueKey":"Card"+uniqid(),"text":"SitNew ","description":[""],"tags":tagTypes[3],"color":"bg-cyan-700", "owner":""},
        {"uniqueKey":"Card"+uniqid(),"text":"Photoshop Course","description":[""],"tags":tagTypes[5],"color":"bg-red-700", "owner":""}
      ],
      [],
      []
    ]
    
    const dataJson = [
      {"configObject":{"uniqId" : uniqid(), "name":"Keep in mind 🧠","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[0]}},
      {"configObject":{"uniqId" : uniqid(), "name":"Articles Ideas","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[1]}},
      {"configObject":{"uniqId" : uniqid(), "name":"Searching","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[2]}},
      {"configObject":{"uniqId" : uniqid(), "name":"Writing ✏","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[3]}},
      {"configObject":{"uniqId" : uniqid(), "name":"Editing💻","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[4]}},
      {"configObject":{"uniqId" : uniqid(), "name":"Graphs and Images🖼","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[5]}},
      {"configObject":{"uniqId" : uniqid(), "name":"Published Content","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[6]}},
      {"configObject":{"uniqId" : uniqid(), "name":"Support","boardColor":"bg-transparent","ready":false,"tasks":cardsJson[7]}}
    ]

    return new Response(JSON.stringify(dataJson), {
        status: 200,
        headers: {
          "Content-Type": "application/json; utf-8",
        },
    });
  }  

  constructor(){
    // this EditorialCalendarTemplateLoader class dont need to start it variables 
  }
} // !_☄