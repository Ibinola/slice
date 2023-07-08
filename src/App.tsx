import React from 'react';
import UrlForm from './components/UrlForm/UrlForm';


function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800 mb-8">Slice</h1>
    <UrlForm />
  </div>
  );
}

export default App;
