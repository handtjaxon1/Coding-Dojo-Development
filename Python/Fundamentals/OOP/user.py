class User:
    # class attributes are defined in the class
    bank_name = "First National Dojo"
    def __init__(self, name, email_address):
        # instance attributes are defined within the "constructor"
        self.name = name
        self.email_address = email_address
        self.account_balance = 0
    # called to add to the user's account balance
    def makeDeposit(self, amount):
        self.account_balance += amount
    # called to remove money from the user's account
    def makeWithdrawal(self, amount):
        if self.account_balance - amount < 0:
            print(f"Can't withdraw {amount} due to insufficient funds.")
            return False
        else:
            self.account_balance -= amount
            return True
    # displays the account user and balance
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")
    
    def transfer_user_money(self, other_user, amount):
        if self.makeWithdrawal(amount):
            other_user.makeDeposit(amount)

# Create users
michael = User("Michael Scott", "scottstots@aol.com")
kevin = User("Kevin Malone", "phoneymaloney@yahoo.com")
pam = User("Pam Beesly", "pamalabeesington@dundermifflin.com")

# Michael deposits/withdrawals
michael.makeDeposit(500)
michael.makeDeposit(200)
michael.makeDeposit(95)
michael.makeWithdrawal(170)
michael.display_user_balance()

# Kevin deposits/withdrawals
kevin.makeDeposit(1000)
kevin.makeDeposit(27)
kevin.makeWithdrawal(550)
kevin.makeWithdrawal(200)
kevin.display_user_balance()

# Pam deposits/withdrawals
pam.makeDeposit(3000)
pam.makeWithdrawal(750)
pam.makeWithdrawal(750)
pam.makeWithdrawal(750)
pam.display_user_balance()

# Transfer money from Michael to Pam
michael.transfer_user_money(pam,50)
michael.display_user_balance()
pam.display_user_balance()