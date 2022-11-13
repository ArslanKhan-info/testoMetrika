import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {AnswerCount,Timing} from '../reducer'




export const store = configureStore({
    reducer:{AnswerCount,Timing},
    middleware:[logger,thunk]
})