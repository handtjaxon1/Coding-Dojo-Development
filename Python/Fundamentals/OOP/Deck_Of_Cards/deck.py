from card import *
from random import shuffle

class Deck:
    def __init__(self, start_shuffled: bool):
        self.cards = []

        # add a card of each value and suit to the deck (52 total)
        for suit in (CardSuits):
            for val in (CardValues):
                self.cards.append(Card(suit, val))

        # optionally shuffle the deck of cards to get a random layout
        if (start_shuffled): shuffle(self.cards)
    
    def show_cards(self):
        for card in self.cards:
            card.display()

    def remove_card(self) -> Card:
        if len(self.cards) == 0:
            return
        return self.cards.pop()

# Only run the code if executing this file
if __name__ == "__main__":
    test = Deck(True)
    test.show_cards()
    example = test.remove_card()
    print(f"Removed card {example.card_info()}")