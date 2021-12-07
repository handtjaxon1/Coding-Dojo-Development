from card import *

class Deck:
    def __init__(self):
        self.cards = []

        for suit in (CardSuits):
            for val in (CardTypes):
                self.cards.append(Card(suit, val))
    
    def show_cards(self):
        for card in self.cards:
            card.card_info()

if __name__ == "__main__":
    test = Deck()
    test.show_cards()