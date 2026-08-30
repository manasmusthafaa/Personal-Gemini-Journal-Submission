import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="app">
      <h1>Personal Gemini Journal</h1>
      <p>Project scaffold is ready.</p>
      <p>Cloud Run URL: https://tensile-imprint-507111-j0.asia-southeast1.run.app</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
