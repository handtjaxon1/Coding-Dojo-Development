from enum import Enum

class CardSuits(Enum):
    CLUBS = 1
    DIAMONDS = 2
    HEARTS = 3
    SPADES = 4

class CardTypes(Enum):
    ACE = 1
    TWO = 2
    THREE = 3
    FOUR = 4
    FIVE = 5
    SIX = 6
    SEVEN = 7
    EIGHT = 8
    NINE = 9
    TEN = 10
    JACK = 11
    QUEEN = 12
    KING = 13

class Card:
    def __init__(self, suit: CardSuits, card: CardTypes):
        self.suit = suit
        self.card = card

    def card_info(self):
        print(f"{self.card_name()} of {self.card_suit()} : {self.card_value()} points")

    def card_suit(self) -> str:
        return self.suit.name

    def card_value(self) -> int:
        return self.card.value

    def card_name(self) -> str:
        return self.card.name