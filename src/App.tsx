import { useEffect, useState } from "react";
import { Card, generateDeck } from "./lib/deck";

function App() {
  const [deck, setDeck] = useState<Card[]>([]);

  useEffect(() => {
    setDeck(generateDeck());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
      <h1 className="text-5xl font-bold text-center">Deck of Cards</h1>
      <main>
        <section className="grid items-center justify-center gap-4 grid-cols-13">
          {deck.map((card) => (
            <img
              key={`${card.suit}-${card.rank}`}
              src={card.imgUrl}
              alt={`${card.rank} of ${card.suit}`}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
