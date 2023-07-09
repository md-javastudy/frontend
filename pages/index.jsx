import Link from "next/link";

const App = () => {
  return (
    <div>
      <h2>Link to 'tomato' Page</h2>
      <Link href="/tomato">Move to '/tomato'</Link>
    </div>
  );
};

export default App;