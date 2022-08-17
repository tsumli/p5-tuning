import React from "react";
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  return <h1>Hello, world!</h1>;
}
