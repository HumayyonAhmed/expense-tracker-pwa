import React, {createContext, useReducer} from 'react'
import {AppReducer} from './AppReducer';

const initialState: TransactionType = {
    transactions: Array<Transaction>(),
}
export enum ACTION_TYPES {
    ADD, UPDATE, DELETE, LIST
}

export const GlobalContext = createContext<GlobalContextType>(undefined as any);

export const GlobalProvider = (props: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //ACTIONS
    function deleteTransaction(id: number){
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        });
    }
    function addTransaction(transaction: Transaction){
        dispatch({
            type: ACTION_TYPES.ADD,
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
                {props.children}
            </GlobalContext.Provider>);
}