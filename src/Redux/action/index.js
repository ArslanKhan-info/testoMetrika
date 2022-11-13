import { CorrectAnswer, ResetCorrectAnswer, ResetTime, SaveTime } from "../types/type"





export const answerCount =()=>({type:CorrectAnswer})

export const resetAnswerCount =()=>({type:ResetCorrectAnswer})

export const savetime =(time)=>(dispatch)=>(dispatch({type:SaveTime,time}))

export const resetTime =()=>({type:ResetTime})