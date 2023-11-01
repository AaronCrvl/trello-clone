import { tagType } from "../../../types/tagType";
import uniqid from 'uniqid';

export default class ScrumProjectModelTemplate {
    public getBoards() : any {

      const tagTypes : Array<tagType[]> = 
      [
        [{"colorHex":'#E74C3C', "description":'Warning'}, {"colorHex":'#F1C40F ', "description":'Attention'}],
        [{"colorHex":'#58D68D', "description":'Go On'}, {"colorHex":'#AF7AC5 ', "description":'Vibez'}, {"colorHex":'#2980B9 ', "description":'Meeting'}],
        [{"colorHex":'#ECF0F1', "description":'Light Work'}, {"colorHex":'#17202A', "description":'A.S.A.P'}, {"colorHex":'#616A6B', "description":'Assigment'}],        
      ]

      const cardsJson = 
      [
        [
          {"uniqueKey":'Card'+uniqid(),"text":"What is Scrum?","description":["Scrum is an agile project management framework that helps teams structure and manage their work through a set of values, principles, and practices. Much like a rugby team (where it gets its name) training for the big game, scrum encourages teams to learn through experiences, self-organize while working on a problem, and reflect on their wins and losses to continuously improve."],"tags":[], "color": "bg-red-700","owner":""},
          {"uniqueKey":'Card'+uniqid(),"text":"Meetings🕸" ,"description":[""],"tags":tagTypes[0], "color":"bg-amber-700", "owner":""},          
        ],
        [
          {"uniqueKey":'Card'+uniqid(),"text":"What is Sprint?🎽","description":[""],"tags":tagTypes[2], "color":"bg-transparent", "owner":""},          
        ],
        [
          {"uniqueKey":'Card'+uniqid(),"text":"Use Tips😄","description":[""],"tags":tagTypes[1], "color":"bg-cyan-700", "owner":""},          
        ],
        [
          {"uniqueKey":'Card'+uniqid(),"text":"Sprint Burndown🔥","description":[""],"tags":["People Relation"], "color":"bg-transparent", "owner":""}
        ],        
      ]
  
      const dataJson = 
      [
        {"configObject":{"uniqId" : uniqid(), "name":"Project Backlog 💻" ,"boardColor":"bg-transparent","ready":false,"tasks": cardsJson[0]}},
        {"configObject":{"uniqId" : uniqid(), "name":"Backlog Sprint🏃" ,"boardColor":"bg-transparent","ready":false,"tasks": cardsJson[1]}},
        {"configObject":{"uniqId" : uniqid(), "name":"To Do🙌", "boardColor":"bg-transparent","ready":false,"tasks": cardsJson[2]}},
        {"configObject":{"uniqId" : uniqid(), "name":"Done🎇","boardColor":"bg-transparent","ready":false,"tasks": cardsJson[3]}}
      ]
      
      return new Response(JSON.stringify(dataJson), {
          status: 200,
          headers: {
            "Content-Type": "application/json; utf-8",
          },
      });
    }
  } // !_☄