import { useDeckStore } from "./stores/deck.store";

function App() {
  const { cards } = useDeckStore();

  return (
    <div className="flex flex-col gap-8 h-full p-8 justify-center items-center">
      <h1 className="text-5xl font-bold text-center">Deck of Cards</h1>
      <main>
        <section className="grid justify-center items-center gap-4 grid-cols-13">
          {cards.map((card) => (
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
