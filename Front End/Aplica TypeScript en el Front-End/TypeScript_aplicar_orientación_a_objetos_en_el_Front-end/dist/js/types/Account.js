import { TransactionType } from "./TransactionType.js";
export class Account {
    // Atributos
    name;
    balance;
    transactions;
    //Constructor
    constructor(name) {
        this.name = name;
        const savedBalance = localStorage.getItem('balance');
        this.balance = savedBalance ? JSON.parse(savedBalance) : 0;
        const savedTransactions = localStorage.getItem('transactions');
        this.transactions = savedTransactions ? JSON.parse(savedTransactions, (key, value) => {
            if (key === 'date') {
                return new Date(value);
            }
            return value;
        }) : [];
    }
    //Metodos
    getName() {
        return this.name;
    }
    getBalance() {
        return this.balance;
    }
    getAccessDate() {
        return new Date();
    }
    debit(value) {
        if (value <= 0) {
            throw new Error('El valor a ser debitado debe ser mayor que cero!');
        }
        if (value > this.balance) {
            throw new Error('Saldo insuficiente!');
        }
        this.balance -= value;
        localStorage.setItem('balance', this.balance.toString());
    }
    deposit(value) {
        if (value <= 0) {
            throw new Error('El valor a ser depositado debe ser mayor que cero!');
        }
        this.balance += value;
        localStorage.setItem('balance', this.balance.toString());
    }
    getTransactionGroups() {
        const transactionGroups = [];
        const transactionList = structuredClone(this.transactions);
        const sortedTransactions = transactionList.sort((t1, t2) => t2.date.getTime() - t1.date.getTime());
        let currentGroupLabel = '';
        for (let transaction of sortedTransactions) {
            let groupLabel = transaction.date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
            if (currentGroupLabel !== groupLabel) {
                currentGroupLabel = groupLabel;
                transactionGroups.push({
                    label: groupLabel,
                    transactions: [],
                });
            }
            transactionGroups.at(-1).transactions.push(transaction);
        }
        return transactionGroups;
    }
    registerTransaction(newTransaction) {
        if (newTransaction.transactionType == TransactionType.DEPOSIT) {
            this.deposit(newTransaction.value);
        }
        else if (newTransaction.transactionType == TransactionType.TRANSFER ||
            newTransaction.transactionType == TransactionType.BILL_PAYMENT) {
            this.debit(newTransaction.value);
            newTransaction.value *= -1;
        }
        else {
            throw new Error('Tipo de Transacción es inválido!');
        }
        this.transactions.push(newTransaction);
        console.log(this.getTransactionGroups());
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }
}
export default new Account('Juana Ferreira');
export class AccountPremium extends Account {
    premiumBonus;
    constructor(name, bonus) {
        super(name);
        this.premiumBonus = bonus;
    }
    registerTransaction(newTransaction) {
        if (newTransaction.transactionType === TransactionType.DEPOSIT) {
            newTransaction.value += this.premiumBonus;
        }
        super.registerTransaction(newTransaction);
    }
}
const luis = new AccountPremium("Luis Lopez", 100);
const newUser = new Account("Laura");
console.log(newUser.getName());
