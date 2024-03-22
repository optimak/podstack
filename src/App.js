import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <SearchBar /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
