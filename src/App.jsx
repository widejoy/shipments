import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage';

function App() {
  const [isOpen, setIsOpen] = useState(false); // State to manage drawer open/close

  return (
    <Router>
       
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        </Routes>
    

    </Router>
  );
}

export default App;
