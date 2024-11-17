import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navigation/Header';
import ExplorePage from './pages/ExplorePage';
import MuseumPage from './pages/MuseumPage';
import mockMuseum from "./data/MockMuseum";
import VisitsPage from './pages/VisitsPage';
import AccountPage from './pages/AccountPage';
const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ExplorePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/saved" element={<MuseumPage museum={mockMuseum} />} />
                <Route path="/visits" element={<VisitsPage />} />
                <Route path="/account" element={<AccountPage />} />
            </Routes>
        </Router>
    );
};

export default App;
