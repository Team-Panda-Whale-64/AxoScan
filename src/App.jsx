import React from 'react';
import Home from './components/Home.jsx';
import TotalSum from './totalSum/TotalSum.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/totalSum' element={<TotalSum/>}/>
      {/* <Route path='/login' element={<Login />}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
