class BankAccount:
    # class attributes
    bank_name = "First National Dojo"
    all_accounts = []

    def __init__(self, balance = 0, int_rate = 0.05):
        self.balance = balance
        self.int_rate = int_rate
        BankAccount.all_accounts.append(self)

    # Changes the bank name
    @classmethod
    def change_bank_name(cls, name):
        cls.bank_name = name

    # Gets the total balance of all accounts
    @classmethod
    def all_balances(cls):
        sum = 0
        for account in cls.all_accounts:
            sum += account.balance
        return sum
    
    # Deposits money into the account
    def deposit(self, amount):
        self.balance += amount
        return self

    # Withdraws money from the account, optionally deducting an insufficient funds fee
    def withdraw(self, amount):
        if self.balance - amount < 0:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        # Still deducst the funds even if insufficient funds. Can easily be wrapped in "else" to only deduct if there's sufficient funds
        self.balance -= amount
        return self

    # Displays the account balance/info
    def displayAccountInfo(self):
        print(f"Balance: ${self.balance}")

    # Adds interest to the account based on the current balance
    def yieldInterest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        return self

# Testing the bank account functionality
# account1 = BankAccount(1000, 0.02)
# account2 = BankAccount(5000,0.075)

# account1.deposit(500).deposit(750.50).deposit(587.25).withdraw(3000).yieldInterest().displayAccountInfo()
# account2.deposit(87.23).withdraw(750).withdraw(625.99).withdraw(220).yieldInterest().displayAccountInfo()