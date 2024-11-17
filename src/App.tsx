import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ExplorePage from './pages/ExplorePage';
import MuseumPage from './pages/MuseumPage';
import mockMuseum from "./data/MockMuseum";
const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ExplorePage />} />
                <Route path="/museum/mock" element={<MuseumPage museum={mockMuseum} />} />
            </Routes>
        </Router>
    );
};

export default App;
