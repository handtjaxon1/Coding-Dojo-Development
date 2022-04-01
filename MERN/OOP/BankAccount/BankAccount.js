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
}

const jaxonBankAcct = new BankAccount(0.5, 1000);
const alecBankAcct = new BankAccount(0.125, 250);

jaxonBankAcct.deposit(50).deposit(75).deposit(100).withdraw(600).yieldInterest().displayAccountInfo();
alecBankAcct.deposit(250).deposit(250).withdraw(50).withdraw(40).withdraw(30).withdraw(20).yieldInterest().displayAccountInfo();