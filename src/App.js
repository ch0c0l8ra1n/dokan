import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './HomePage';
import SearchResultsPage from './SearchResultsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<SearchResultsPage/>} />
        <Route path="about" element={<div>About Page</div>} />
      </Routes>
    {/*
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
    </Routes>
    */}

    </BrowserRouter>
  );
}

export default App;
