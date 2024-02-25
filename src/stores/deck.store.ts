import { create } from "zustand";
import { Card, Rank, Suit, generateDeck } from "../lib/deck";

interface DeckState {
  cards: Card[];
  drawCard: (rank: Rank, suit: Suit) => Card | undefined;
  bringCardBack: (card: Card) => void;
}

export const useDeckStore = create<DeckState>((set, get) => ({
  cards: generateDeck(),
  drawCard: (rank: Rank, suit: Suit) => {
    const card = get().cards.find((c) => c.rank === rank && c.suit === suit);
    if (card) {
      set((state) => ({
        cards: state.cards.filter((c) => c !== card),
      }));
    }
    return card;
  },
  bringCardBack: (card: Card) => {
    set((state) => ({
      cards: [...state.cards, card],
    }));
  },
}));
