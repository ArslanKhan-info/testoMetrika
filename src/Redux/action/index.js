import { CorrectAnswer, ResetCorrectAnswer } from "../types/type"





export const answerCount =()=>({type:CorrectAnswer})

export const resetAnswerCount =()=>({type:ResetCorrectAnswer})