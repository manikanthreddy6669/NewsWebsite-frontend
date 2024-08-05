// src/App.js
import React from 'react';
import NewsList from './components/NewsList'; // Update the path to point to the components folder
import './App.css'; // Ensure the CSS is imported

const App = () => {
  return (
    <div className="App">
      <header className="App-header centered-header">
        <h1>Welcome to the News Website</h1>
      </header>
      <main>
        <NewsList />
      </main>
    </div>
  );
};

export default App;
