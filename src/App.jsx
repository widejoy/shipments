import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import "./style.css";
import Analytics from './Analytics';

function App() {
  return (
    <Router>
       
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/analytics' element={<Analytics/>}/>
        </Routes>
    

    </Router>
  );
}

export default App;
