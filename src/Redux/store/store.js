import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {AnswerCount} from '../reducer'




export const store = configureStore({
    reducer:{AnswerCount},
    middleware:[logger]
})