import { Question } from "./Questions.js"



export class Quiz{
    /**
     * 
     * @param {Question[]} questions 
     */
    constructor (questions){
        this.questions = questions
    }


    /**
     * 
     * @param {string} category 
     * @returns {Quiz[]}
     */
    getCategory(category){
        let quiz = []
        this.questions.forEach(iten =>  {
            if(iten.categoty === category){
                quiz.push(iten)
            }
        } )
        return quiz
    }


    /**
     * 
     * @param {string} category 
     * @returns {number}
     */
    lengthQuestions(category){
        let quiz = []
        this.questions.forEach(iten =>  {
            if(iten.categoty === category){
                quiz.push(iten)
            }
        } )
        return quiz.length
    }

} 








