from deck import Deck
from player import *

class CardGame:
    def __init__(self):
        self.name = "Card Game"
        self.players = []
        self.deck = None
        self.max_players = 2
        self.allow_variable_players = False

    def setup_game(self):
        self.create_players()
        self.create_deck()
        print(f"Started a game of {self.name}, with {len(self.players)} players.")

    def play_game(self):
        pass

    def create_players(self):
        pass

    def create_deck(self):
        self.deck = Deck(False)

class War(CardGame):
    def __init__(self):
        super().__init__()
        self.name = "War"

    def play_game(self):
        round = 0
        # while there are enough cards for each player to draw
        while len(self.deck.cards) >= self.max_players:
            # Check if the player wants to quit or play
            message = "Press Q to quit\nPress any key to play\n"
            response = input(message)
            if response.upper() == "Q":
                break
            # Display the round to the players so they know the progress of the game
            round += 1
            print(f"--- Round {round} ---")
            print(f"Deck contains {len(self.deck.cards)} cards")
            # draws cards for each player
            drawn_cards = {}
            for player in self.players:
                card = self.deck.remove_card()
                drawn_cards[player] = card
                print(f"{player.name} drew {card.card_info()}")
            # determine which player had the best card
            best_player = list(drawn_cards.keys())[0]
            for key in drawn_cards.keys():
                if drawn_cards[key] > drawn_cards[best_player]:
                    best_player = key
            # add points to the winner of the round and continue the game
            print(f"{best_player.name} won this round!")
            for player in self.players:
                if player == best_player:
                    player.add_win()
                    break

        # Once all cards are gone, determine the winner of the whole game
        winner = self.players[0]
        for player in self.players:
            print(f"{player.name} wins = {player.wins}")
            if player.wins > winner.wins:
                winner = player
        print(f"{winner.name} won the game of war!")

    def create_players(self):
        for i in range(1, self.max_players + 1):
            self.players.append(Player_War("Player " + str(i)))

    def create_deck(self):
        self.deck = Deck(True)

#########################################################################
# Run the card game program
#########################################################################

# A list of all the games created that the players can choose from
games = ["War"]
print("Choose a game to play: ")
for game in games:
    print(f"\t{game}")

# Get the game the players want to play; keep asking until they enter a valid game
chosen_game = ""
while chosen_game not in games:
    chosen_game = input("Please enter a game to play from the list above: ")

# Create the card game based on what was chosen
card_game = None
if chosen_game == "War":
    card_game = War()

# TODO Could add input to allow the user to choose how many players, but maybe only do that depending on the game
if card_game.allow_variable_players:
    player_amt = input("Choose how many players will play: ")
    card_game.max_players = player_amt

card_game.setup_game()
card_game.play_game()