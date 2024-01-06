import {createStore} from 'redux'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
     value : valueReducer,
     showLabel : showLabelReducer
})


function valueReducer(prevState = 0, action){
    switch (action.type) {
        case 'increment':
            return prevState+1
        case 'decrement':
            return prevState-1
        default:
            return prevState
    }
}

function showLabelReducer(prevState = true, action){
    switch (action.type) {
        case 'show-label':
            return action.payload;
        default:
            return prevState
    }
}

const store = createStore(appReducer)

export default store