from enum import Enum

# An enum of card suits, ordered alphabetically
class CardSuits(Enum):
    CLUBS = 1
    DIAMONDS = 2
    HEARTS = 3
    SPADES = 4

# An enum of card values
class CardValues(Enum):
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
    def __init__(self, suit: CardSuits, card: CardValues):
        self.suit = suit
        self.card = card

    def __lt__(self, other):
        if self.card_value() < other.card_value():
            return True
        if self.card_value() == other.card_value():
            if self.card_suit_value() < other.card_suit_value():
                return True
            else:
                return False
        return False

    def __gt__(self, other):
        if self.card_value() > other.card_value():
            return True
        if self.card_value() == other.card_value():
            if self.card_suit_value() > other.card_suit_value():
                return True
            else:
                return False
        return False       

    def display(self):
        print(self.card_info())

    def card_info(self) -> str:
        return f"{self.card_name()} of {self.card_suit()} : {self.card_value()} points"

    def card_suit(self) -> str:
        return self.suit.name

    def card_suit_value(self) -> int:
        return self.suit.value

    def card_value(self) -> int:
        return self.card.value

    def card_name(self) -> str:
        return self.card.name