type Transaction = {
    id: number,
    text: string,
    category: number,
    amount: number
}
type TransactionType = {
    transactions: Transaction[],
}
type Action = {
    type: ACTION_TYPES,
    payload: any | number
}
interface GlobalContextType {
    deleteTransaction(id: number): void;
    addTransaction(transaction: Transaction): void;
    transactions: Transaction[];
}