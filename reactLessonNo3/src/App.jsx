import Suitcase from "./components/Item";
import items from "./data/itemsForTrip.json";

function App() {
  return items.map((i) => 
  <Suitcase 
  name = {i.item}
  isPaked={i.isPaked}
  importance={i.importance}
  />
  );
}

export default App;
