import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../src/Styling/btn_styling.css";
import { ClerkProvider } from "@clerk/clerk-react";
import MyExhibitionsPage from './Pages/MyExhibitions.jsx';
import ExploreExhibitionsPage from './Pages/ExploreExhibitions.jsx';

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MyExhibitions" element={<MyExhibitionsPage />} />
        <Route path="/ExploreExhibitions" element={<ExploreExhibitionsPage />} />
      </Routes>
    </Router>
  </ClerkProvider>
);