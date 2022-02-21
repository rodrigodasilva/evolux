import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

import { Counter } from './features/counter/Counter'

function App() {
  return (
    <div className="App"> 
      <Button>123</Button> 
      <Counter />
    </div>
  );
}

export default App;
