export enum Suit {
  Spades = "spades",
  Hearts = "hearts",
  Diamonds = "diamonds",
  Clubs = "clubs",
}

export enum Rank {
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Ten = "10",
  Jack = "J",
  Queen = "Q",
  King = "K",
  Ace = "A",
}

export type Card = {
  suit: Suit;
  rank: Rank;
  imgUrl: string;
};

function getCardImageUrl(suit: Suit, rank: Rank): URL {
  const path = `../assets/cards/${suit}/${rank}.png`;
  return new URL(path, import.meta.url);
}

export function generateDeck(): Card[] {
  const suits = Object.values(Suit);
  const ranks = Object.values(Rank);
  const cards: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      const card: Card = {
        suit,
        rank,
        imgUrl: getCardImageUrl(suit, rank).href,
      };
      cards.push(card);
    }
  }

  return cards;
}
