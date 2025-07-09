import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching items:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Items</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
