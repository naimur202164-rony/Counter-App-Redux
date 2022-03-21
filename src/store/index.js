import { createStore } from "redux";


const reducerFn=(state={counter:0},action)=>{
    // it should be synce
    // We should not muted the orginal state

    if(action.type==="INC"){
        return {counter:state.counter+1};
    }else if(action.type ==="DEC"){
        return {counter:state.counter-1}
    }


    if(action.type==="ADD"){
        return {counter:state.counter+action.payload}
    }
    return state
}
const store=createStore(reducerFn)


export default store