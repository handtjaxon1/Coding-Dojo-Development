class Player:
    def __init__(self, name: str):
        self.name = name
        self.wins = 0

    def add_win(self):
        self.wins += 1

class Player_War(Player):
    def __init__(self, name: str):
        super().__init__(name)
        self.card = None