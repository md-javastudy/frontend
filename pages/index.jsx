import Link from "next/link";

const App = () => {
  return (
    <div>
      <h2>Link to 'Poteto' Page</h2>
      <Link href="/vegetable/poteto">Move to '/poteto'</Link>
    </div>
  );
};

export default App;