import { cardType } from "../types/cardType"

class CardDataControl {
    getProjectManagementCardData () : Array<Array<cardType>> {
        let cardData : Array<Array<cardType>> = [
            [
                { text : "Set tags on your cards", description: "", tags: ['Tag1', 'Tag2', 'Tag3'], owner : "" },
                { text : "Launch Timeline", description: "", tags: ['Dev', 'Launch', 'Project'], owner : "" },
                { text : "Weekly Updates", description: "Team and project news.", tags: [], owner : "" }
            ],

            [
                { text : "HTML Problem", description: "", tags: ['HTML 5', 'CSS', 'Javascript'], owner : "" },
                { text : "Unity Tests", description: "", tags: ['Important', 'Team',], owner : "" },                
            ],

            [
                { text : "Implement Site Banner", description: "", tags: ['HTML 5', 'CSS', 'Javascript'], owner : "" },
                { text : "React Course", description: "", tags: ['Important', 'Team',], owner : "" },                
            ],

            [
                { text : "Legal Process", description: "", tags: ['People Relation',], owner : "" },                    
            ],

            [
                { text : "Unfinished Tasks", description: "", tags: ['Tag1', 'Tag2', 'Tag3'], owner : "" },
                { text : "Timeline", description: "", tags: ['Launch', 'Project'], owner : "" },
                { text : "Finished", description: "Just include tasks that was finished", tags: [], owner : "" }
            ],
        ]
        return cardData
    }

    getHabitControlData () : Array<Array<cardType>> {
        let cardData : Array<Array<cardType>> = [
            [
                { text : "Vision 👀", description: "", tags: [], owner : "" },
                { text : "Year to do list 💛", description: "", tags: ['🍲' , '🍖', '🥝'], owner : ""},       
            ],

            [
                { text : "Gym Sessions 🙇" , description: "Get it running with the new training routine.", tags: ['Sat', 'Tue', 'Frid'], owner : "" },
                { text : "Development Course", description: "", tags: ['Important', 'Career',], owner : "" },                
            ],

            [
                { text : "Implement Site Banner", description: "", tags: ['HTML 5', 'CSS', 'Javascript'], owner : "" },
                { text : "React Course", description: "", tags: ['Important', 'Team',], owner : "" },                
            ],

            [                                  
            ],

            [
                { text : "Unfinished Tasks", description: "", tags: ['Task 1', 'Task 2', 'Task 3'], owner : ""  },
                { text : "Timeline", description: "", tags: ['Launch', 'Project'], owner : "" },
                { text : "🎆 Finished 🎆", description: "Just include tasks that was finished", tags: [],owner : "" }
            ],
        ]
        return cardData
    }

    constructor () {}
}

export default CardDataControl; // !_☄