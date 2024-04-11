import React from 'react';
import Home from './components/Home.jsx';
import totalSum from './totalSum/totalSum.jsx'
import { BrowserRouter, Route, Router, Link } from 'react-router-dom'
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Route>
      <Router path='/' element={<Home />}/>
      <Router path='/totalSum' element={totalSum}/>
      </Route>
    </BrowserRouter>
    </>
  );
}

export default App;
