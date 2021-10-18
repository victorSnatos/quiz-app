// @ts-check
import { Question } from "./Question.js"

export class Quiz{

    score = 0
    indexCurrentQuestion = 0

    /**
     * 
     * @param {Question[]} question 
     */
    constructor(question, jugador){
        this.question = question
        this.jugador = jugador
    }


    /**
     * 
     * @returns {boolean}
     */
    isEnded(){
        return this.question.length === this.indexCurrentQuestion
    }

    /**
     * 
     * @returns {Question}
     */
    getQuestionIndex(){
        return this.question[this.indexCurrentQuestion]
    }


    /**
     * 
     * @param {string} choices 
     */
    guess(choices){
        if(this.getQuestionIndex().correctAnswer(choices)){
            this.score++
        }
        this.indexCurrentQuestion++
    }



}

