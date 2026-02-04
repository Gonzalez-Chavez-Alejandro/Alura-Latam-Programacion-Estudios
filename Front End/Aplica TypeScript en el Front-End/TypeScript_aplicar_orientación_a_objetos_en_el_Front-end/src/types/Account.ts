import { Transaction } from "./Transaction";

export class Account {
    // Atributos
    name: string;
    balance: number;
    transactions: Transaction[];

    //Constructor
    constructor(name: string) {
        this.name = name;
        const savedBalance = localStorage.getItem('balance')
        this.balance = savedBalance ? JSON.parse(savedBalance) : 0

        const savedTransactions = localStorage.getItem('transactions')
        this.transactions = savedTransactions ?JSON.parse(
            savedTransactions,
            (key: string, value: string) => {
                if (key === 'date') {
                    return new Date(value)
                }

                return value
            }
        ) : []
    }
    //Metodos
}