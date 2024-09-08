import React from 'react';
import AngleSelector from './AngleSelector';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Modern Angle Selector</h1>
        <AngleSelector />
      </div>
    </div>
  );
}

export default App;