class BankAccount {
    constructor(intRate, balance) {
        this.intRate = intRate;
        this.balance = this.balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this;
    }

    withdraw(amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds: Charge a $5 fee");
            this.balance -= 5;
        }
        return this;
    }

    displayAccountInfo() {
        console.log("Balance: $" + this.balance);
        return this;
    }

    yieldInterest() {
        if (this.balance > 0) {
            this.balance += (this.balance * this.intRate);
        }
        return this;
    }
};

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