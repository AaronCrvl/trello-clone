import { cardType } from "../types/cardType"

class CardDataControl {
    getProjectManagementCardData () : Array<Array<cardType>> {
        let cardData : Array<Array<cardType>> = [
            [
                { uniqueKey: 'Card' + Math.random(), text : "Set tags on your cards", description: [""], tags: ['Tag1', 'Tag2', 'Tag3'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Launch Timeline", description: [""], tags: ['Dev', 'Launch', 'Project'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Weekly Updates", description: ["Team and project news."], tags: [], owner : "" }
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "HTML Problem", description: [""], tags: ['HTML 5', 'CSS', 'Javascript'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Unity Tests", description: [""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Implement Site Banner", description: [""], tags: ['HTML 5', 'CSS', 'Javascript'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "React Course", description: [""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Legal Process", description:[ ""], tags: ['People Relation',], owner : "" },                    
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Unfinished Tasks", description: [""], tags: ['Tag1', 'Tag2', 'Tag3'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Timeline", description: [""], tags: ['Launch', 'Project'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Finished", description: ["Just include tasks that was finished"], tags: [], owner : "" }
            ],
        ]
        return cardData
    }

    getHabitControlData () : Array<Array<cardType>> {
        let cardData : Array<Array<cardType>> = [
            [
                { uniqueKey: 'Card' + Math.random(), text : "Vision 👀", description: [""], tags: [], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Year to do list 💛", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Gym Sessions 🙇" , description:[ "Get it running with the new training routine."], tags: ['Sat', 'Tue', 'Frid'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Development Course", description: [""], tags: ['Important', 'Career',], owner : "" },                
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Implement Site Banner", description: [""], tags: ['HTML 5', 'CSS', 'Javascript'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "React Course", description:[""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [                                  
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Unfinished Tasks", description: [""], tags: ['Task 1', 'Task 2', 'Task 3'], owner : ""  },
                { uniqueKey: 'Card' + Math.random(), text : "Timeline", description: [""], tags: ['Launch', 'Project'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "🎆 Finished 🎆", description: ["Just include tasks that was finished"], tags: [],owner : "" }
            ],
        ]
        return cardData
    }

    getEditorialCalendarData () : Array<Array<cardType>> {
        let cardData : Array<Array<cardType>> = [
            [
                { uniqueKey: 'Card' + Math.random(), text : "What can't miss on the article", description: [""], tags: [], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Blog Guideline", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
                { uniqueKey: 'Card' + Math.random(), text : "Blog Checlist", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "No wory's week", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
                { uniqueKey: 'Card' + Math.random(), text : "What part of the day is you more creative", description:[ ""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
                { uniqueKey: 'Card' + Math.random(), text : "Remote Week", description:[ ""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Browsing..", description: [""], tags: [], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Digital Results", description: [""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [                                  
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Unfinished Tasks", description: [""], tags: ['Task 1', 'Task 2', 'Task 3'], owner : ""  },                
                { uniqueKey: 'Card' + Math.random(), text : "🎆 Finished 🎆", description: ["Just include tasks that was finished"], tags: [],owner : "" }
            ],

            [ 
                { uniqueKey: 'Card' + Math.random(), text : "SitNew ", description: [""], tags: [], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Photoshop Course", description: [""], tags: ['Important', 'Team',], owner : "" },                                                 
            ],

            [                                  
            ],

            [                                  
            ],
        ]
        return cardData
    }

    getIntegrationOfNewEmployeesData () : Array<Array<cardType>> {
        let cardData : Array<Array<cardType>> = [
            [
                { uniqueKey: 'Card' + Math.random(), text : "Vision 👀", description: [""], tags: [], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Year to do list 💛", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Sessions 🙇" , description: [""], tags: ['Sat', 'Tue', 'Frid'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "Personal Development", description: [""], tags: ['Important', 'Career',], owner : "" },                
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Implement New Routines", description:[""], tags: [], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "React To The World Around You", description: [""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [                                  
            ],

            [
                { uniqueKey: 'Card' + Math.random(), text : "Unfinished Tasks", description: [""], tags: ['Task 1', 'Task 2', 'Task 3'], owner : ""  },
                { uniqueKey: 'Card' + Math.random(), text : "Timeline", description: [""], tags: ['Launch', 'Project'], owner : "" },
                { uniqueKey: 'Card' + Math.random(), text : "🎆 Finished 🎆", description: ["Just include tasks that was finished"], tags: [],owner : "" }
            ],

            [                                  
            ],
        ]
        return cardData
    }

    constructor () {}
}

export default CardDataControl; // !_☄