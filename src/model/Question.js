import { data } from "../data/data.js";

export class Question {
    /**
     * 
     * @param {string} question 
     * @param {string[]} choices 
     * @param {string} answer 
     */
    constructor(question, choices, answer){
     this.question = question;   
     this.choices= choices;   
     this.answer = answer;   
    }

    /**
     * 
     * @param {string} choices 
     * @returns {boolean}
     */
    correctAnswer(choices){
        return this.answer === choices
    }
    
}

export const question = data.map(questons => new Question(questons.question, questons.choices, questons.answer))
    
