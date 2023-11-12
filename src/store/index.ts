import {dataReducer} from "./reduser";
import {combineReducers} from 'redux'

export const rootReducer = combineReducers ({
    fetchData:dataReducer
})
 export type RootState = ReturnType<typeof rootReducer>