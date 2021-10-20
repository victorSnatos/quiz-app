import { Quiz } from "./Quiz.js";

/**
 * ------------------------------------------------------------------------
 * Class Game
 * ------------------------------------------------------------------------
 */
export class Game {
    score = 0
    nextQuestion = 0
 
    /**
     * 
     * @param {Quiz[]} questions 
     * @param {string} player 
     */
    constructor(questions, player, toAnswer){
        this._questions = questions
        this.player = player
        this.toAnswer = this._questinonToAsnwer(toAnswer)
    }
    
    /**
     * 
     * @returns {object}}
     */
    getQuestinonNext(){
        return this.toAnswer[this.nextQuestion]
    }

    /**
     * 
     * @returns {Quiz[]}}
     */
     _questinonToAsnwer(answer){
         const toAnswer = []
        for(let i = 0 ; i <= answer -1; i++){
            toAnswer.push(this._questions[i])
        }
         return toAnswer
    }

    /**
     * 
     * @param {string} answer 
     */
    guess(answer){
        if(this._questions[this.nextQuestion].answer === answer){
            this.score++ 
        }        
        this.nextQuestion++
    }
    
}