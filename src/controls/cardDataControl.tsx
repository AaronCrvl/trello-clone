import { cardType } from "../types/cardType"

class CardDataControl {
    getProjectManagementCardData () : Array<Array<cardType>> {
        let cardData : Array<Array<cardType>> = [
            [
                { text : "Set tags on your cards", description: [""], tags: ['Tag1', 'Tag2', 'Tag3'], owner : "" },
                { text : "Launch Timeline", description: [""], tags: ['Dev', 'Launch', 'Project'], owner : "" },
                { text : "Weekly Updates", description: ["Team and project news."], tags: [], owner : "" }
            ],

            [
                { text : "HTML Problem", description: [""], tags: ['HTML 5', 'CSS', 'Javascript'], owner : "" },
                { text : "Unity Tests", description: [""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [
                { text : "Implement Site Banner", description: [""], tags: ['HTML 5', 'CSS', 'Javascript'], owner : "" },
                { text : "React Course", description: [""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [
                { text : "Legal Process", description:[ ""], tags: ['People Relation',], owner : "" },                    
            ],

            [
                { text : "Unfinished Tasks", description: [""], tags: ['Tag1', 'Tag2', 'Tag3'], owner : "" },
                { text : "Timeline", description: [""], tags: ['Launch', 'Project'], owner : "" },
                { text : "Finished", description: ["Just include tasks that was finished"], tags: [], owner : "" }
            ],
        ]
        return cardData
    }

    getHabitControlData () : Array<Array<cardType>> {
        let cardData : Array<Array<cardType>> = [
            [
                { text : "Vision 👀", description: [""], tags: [], owner : "" },
                { text : "Year to do list 💛", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
            ],

            [
                { text : "Gym Sessions 🙇" , description:[ "Get it running with the new training routine."], tags: ['Sat', 'Tue', 'Frid'], owner : "" },
                { text : "Development Course", description: [""], tags: ['Important', 'Career',], owner : "" },                
            ],

            [
                { text : "Implement Site Banner", description: [""], tags: ['HTML 5', 'CSS', 'Javascript'], owner : "" },
                { text : "React Course", description:[""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [                                  
            ],

            [
                { text : "Unfinished Tasks", description: [""], tags: ['Task 1', 'Task 2', 'Task 3'], owner : ""  },
                { text : "Timeline", description: [""], tags: ['Launch', 'Project'], owner : "" },
                { text : "🎆 Finished 🎆", description: ["Just include tasks that was finished"], tags: [],owner : "" }
            ],
        ]
        return cardData
    }

    getEditorialCalendarData () : Array<Array<cardType>> {
        let cardData : Array<Array<cardType>> = [
            [
                { text : "What can't miss on the article", description: [""], tags: [], owner : "" },
                { text : "Blog Guideline", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
                { text : "Blog Checlist", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
            ],

            [
                { text : "No wory's week", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
                { text : "What part of the day is you more creative", description:[ ""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
                { text : "Remote Week", description:[ ""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
            ],

            [
                { text : "Browsing..", description: [""], tags: [], owner : "" },
                { text : "Digital Results", description: [""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [                                  
            ],

            [
                { text : "Unfinished Tasks", description: [""], tags: ['Task 1', 'Task 2', 'Task 3'], owner : ""  },                
                { text : "🎆 Finished 🎆", description: ["Just include tasks that was finished"], tags: [],owner : "" }
            ],

            [ 
                { text : "SitNew ", description: [""], tags: [], owner : "" },
                { text : "Photoshop Course", description: [""], tags: ['Important', 'Team',], owner : "" },                                                 
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
                { text : "Vision 👀", description: [""], tags: [], owner : "" },
                { text : "Year to do list 💛", description: [""], tags: ['🍲' , '🍖', '🥝'], owner : ""},       
            ],

            [
                { text : "Sessions 🙇" , description: [""], tags: ['Sat', 'Tue', 'Frid'], owner : "" },
                { text : "Personal Development", description: [""], tags: ['Important', 'Career',], owner : "" },                
            ],

            [
                { text : "Implement New Routines", description:[""], tags: [], owner : "" },
                { text : "React To The World Around You", description: [""], tags: ['Important', 'Team',], owner : "" },                
            ],

            [                                  
            ],

            [
                { text : "Unfinished Tasks", description: [""], tags: ['Task 1', 'Task 2', 'Task 3'], owner : ""  },
                { text : "Timeline", description: [""], tags: ['Launch', 'Project'], owner : "" },
                { text : "🎆 Finished 🎆", description: ["Just include tasks that was finished"], tags: [],owner : "" }
            ],

            [                                  
            ],
        ]
        return cardData
    }

    constructor () {}
}

export default CardDataControl; // !_☄