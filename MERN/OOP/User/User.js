class User {
    constructor(userName, emailAddress) {
        this.name = userName;
        this.email  = emailAddress;
        this.accountBalance = 0;
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
        return this; // Allows function chaining
    }

    canWithdraw(amount) {
        return this.accountBalance - amount >= 0;
    }

    makeWithdrawal(amount) {
        if (this.canWithdraw(amount)) {
            this.accountBalance -= amount;
        }
        return this; // Allows function chaining
    }

    transferMoney(amount, otherUser) {
        if (this.canWithdraw(amount)) {
            this.makeWithdrawal(amout);
            otherUser.makeDeposit(amount);
        }
        return this; // Allows function chaining
    }

    displayBalance() {
        console.log(this.userName + ", Balance: $" + this.accountBalance);
    }
}

const guido = new User("Guido vn Rossum", 150);
const jaxon = new User("Jaxon", 100);
const alec = new User("Alec", 200);

guido.makeDeposit(50).makeDeposit(100).makeDeposit(175).makeWithdrawal(12);
jaxon.makeDeposit(420).makeDeposit(666).makeWithdrawal(100).makeWithdrawal(1);
alec.makeDeposit(20000).makeWithdrawal(15).makeWithdrawal(16).makeWithdrawal(17);

// Bonus
guido.transferMoney(50, alec).displayBalance();