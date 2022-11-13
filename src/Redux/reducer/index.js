


const initialState = {count:0}
export const AnswerCount =(state=initialState,action)=>{
    switch (action.type) {
        case 'CORRECT_ANSWER':
            return ({count: state.count + 1})
        case 'RESET_ANSWER':
            return({count:0})
        default:
            return ({...state})
    }
}

const initiltime = {time:0}
export const Timing =(state=initiltime,action)=>{
    switch (action.type) {
        case 'SAVE_TIME':
            return ({time: action.time})
        case 'RESET_TIME':
            return({time:0})
        default:
            return ({...state})
    }
}
