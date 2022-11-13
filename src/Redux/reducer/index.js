


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

