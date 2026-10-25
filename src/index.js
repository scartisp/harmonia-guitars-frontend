import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './pages/home/Home';
import SongLibrary from './pages/songLibrary/SongLibrary';
import TechniqueLibrary from './pages/techniqueLibrary/TechniqueLibrary';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='songLibrary' element={<SongLibrary />} />
          <Route path='techniqueLibrary' element= {<TechniqueLibrary />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);