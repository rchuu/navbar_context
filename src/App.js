import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import Wrapper from './components/Wrapper';

function App() {
  const [state, setState] = useState('');
  return (
    <div className="App">
      <Wrapper.Provider value={{ state, setState }}>
        <Navbar />
        <FormWrapper />
      </Wrapper.Provider>
    </div>
  );
}

export default App;
