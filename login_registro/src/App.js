import React, { useState } from 'react';
import Login from './components/Login';
import Registro from './components/Registro';
import './App.css';

function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="App" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '2rem' }}>
      {isLoginView ? (
        <Login switchToRegister={() => setIsLoginView(false)} />
      ) : (
        <Registro switchToLogin={() => setIsLoginView(true)} />
      )}
    </div>
  );
}

export default App;