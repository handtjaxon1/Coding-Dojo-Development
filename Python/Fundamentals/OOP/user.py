from bankAccount import BankAccount

class User:
    # class attributes are defined in the class
    bank_name = "First National Dojo"
    
    def __init__(self, name, email_address):
        # instance attributes are defined within the "constructor"
        self.name = name
        self.email_address = email_address
        # optional multiple accounts
        self.accounts = {
            "Primary": BankAccount(0, 0.2)
        }
    
    # Deposits money into one of the user's accounts
    def makeDeposit(self, amount, account = "Primary"):
        self.accounts[account].deposit(amount)
        return self
    
    # Withdraws money from one of the user's accounts
    def makeWithdrawal(self, amount, account = "Primary"):
        self.accounts[account].withdraw(amount)
        return self
    
    # Displays the total account balances for the user
    def displayAllBalances(self):
        print(f"User: {self.name}")
        sum = 0
        for account in self.accounts:
            sum += self.accounts[account].balance
            print(f"\tAccount: {account} \tBalance: ${self.accounts[account].balance}")
        print(f"\t\t\t\tTotal: ${sum}")
        return self
    
    # Transfer money from this user from a specific account to another user's specificed account
    def transferFunds(self, otherUser, amount, selfAccount = "Primary", otherAccount = "Primary"):
        self.makeWithdrawal(amount, selfAccount)
        otherUser.makeDeposit(amount, otherAccount)
        return self

    # Opens a new account with a give name
    def openAccount(self, name, amount, int_rate):
        self.accounts[name] = BankAccount(amount, int_rate)
        return self

# Create users
michael = User("Michael Scott", "scottstots@aol.com")
jim = User("Jim Halpert", "phoneymaloney@yahoo.com")
pam = User("Pam Beesly", "pamalabeesington@dundermifflin.com")

# Michael deposits/withdrawals
michael.makeDeposit(500).makeDeposit(200).makeDeposit(95).makeWithdrawal(170).displayAllBalances()

# Jim deposits/withdrawals
jim.makeDeposit(1000).makeDeposit(27).makeWithdrawal(550).makeWithdrawal(200).displayAllBalances()

# Pam deposits/withdrawals
pam.makeDeposit(3000).makeWithdrawal(750).makeWithdrawal(750).makeWithdrawal(750).displayAllBalances()

# Transfer money from Michael to Pam
michael.transferFunds(pam, 50)
michael.displayAllBalances()
pam.displayAllBalances()

# Create new accounts
michael.openAccount("Investments", 1000, 0.08)
jim.openAccount("Fun money", 69, 0.01)

michael.displayAllBalances()
jim.displayAllBalances()

# Transferring money between other accounts
michael.transferFunds(michael, 100, "Primary", "Investments")
jim.transferFunds(pam, 69, "Fun money", "Primary")

michael.displayAllBalances()
jim.displayAllBalances()
pam.displayAllBalances()