import { Routes, Route } from 'react-router-dom';

import './App.css';

import SearchAppBar from './components/AppBar/AppBar';
import Home from './pages/HomePage/Home';
import Tour from './pages/TourPage/Tour';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/:id' element={<Tour/>}/>
      </Routes>
    </div>
  );
}

export default App;
