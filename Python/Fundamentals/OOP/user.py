import bankAccount

class User:
    # class attributes are defined in the class
    bank_name = "First National Dojo"
    
    def __init__(self, name, email_address):
        # instance attributes are defined within the "constructor"
        self.name = name
        self.email_address = email_address
        self.account = bankAccount.BankAccount(0, 0.02)
    
    # called to add to the user's account balance
    def makeDeposit(self, amount):
        self.account.deposit(amount)
        #print(f"Deposited ${amount} into {self.name}'s account.")
        return self
    
    # called to remove money from the user's account
    def makeWithdrawal(self, amount):
        self.account.withdraw(amount)
        #print(f"Withdrew ${amount} from {self.name}'s account.")
        return self
    
    # displays the account user and balance
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account.balance}")
        return self
    
    # transfer money from this user to another
    def transfer_user_money(self, other_user, amount):
        self.account.withdraw(amount)
        other_user.account.deposit(amount)
        #print(f"Transferred ${amount} from {self.name} to {other_user.name}")
        return self

# Create users
michael = User("Michael Scott", "scottstots@aol.com")
kevin = User("Kevin Malone", "phoneymaloney@yahoo.com")
pam = User("Pam Beesly", "pamalabeesington@dundermifflin.com")

# Michael deposits/withdrawals
michael.makeDeposit(500).makeDeposit(200).makeDeposit(95).makeWithdrawal(170).display_user_balance()

# Kevin deposits/withdrawals
kevin.makeDeposit(1000).makeDeposit(27).makeWithdrawal(550).makeWithdrawal(200).display_user_balance()

# Pam deposits/withdrawals
pam.makeDeposit(3000).makeWithdrawal(750).makeWithdrawal(750).makeWithdrawal(750).display_user_balance()

# Transfer money from Michael to Pam
michael.transfer_user_money(pam,50)
michael.display_user_balance()
pam.display_user_balance()