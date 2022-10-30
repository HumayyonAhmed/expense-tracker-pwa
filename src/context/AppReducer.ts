import { ACTION_TYPES } from "./GlobalState";

export const AppReducer = (state: TransactionType, action: Action): TransactionType => {
    switch(action.type){
        case ACTION_TYPES.ADD:
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                transactions: state.transactions.filter(item=>item.id!==action.payload)
            }
        default:
            return state;
    }
}