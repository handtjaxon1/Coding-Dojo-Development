import BankAccount from "./BankAccount";

class User {
    constructor(userName, emailAddress) {
        this.name = userName;
        this.email  = emailAddress;
        this.account = new BankAccount(intRate=0.1, balance=0);
    }

    makeDeposit(amount) {
        return this.account.deposit(amount);
    }

    makeWithdrawal(amount) {
        return this.account.withdraw(amount);
    }

    transferMoney(amount, otherUser) {
        if (this.canWithdraw(amount)) {
            this.makeWithdrawal(amout);
            otherUser.makeDeposit(amount);
        }
        return this; // Allows function chaining
    }

    displayBalance() {
        this.account.displayAccountInfo();
    }
};

export default User;