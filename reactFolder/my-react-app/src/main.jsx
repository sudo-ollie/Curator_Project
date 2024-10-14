import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../src/Styling/btn_styling.css";
import { ClerkProvider } from "@clerk/clerk-react";
import MyExhibitionsPage from './Pages/MyExhibitions.jsx';
import ExploreExhibitionsPage from './Pages/ExploreExhibitions.jsx';
import { LikedItemsProvider } from './Components/LikedItemsProvider';
import ExhibitionPage from './Pages/ExhibitionPage.jsx';
import MyExhibition from './Pages/My Exhibiton.jsx';

createRoot(document.getElementById('root')).render(
  <LikedItemsProvider>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MyExhibitions" element={<MyExhibitionsPage />} />
          <Route path="/ExploreExhibitions" element={<ExploreExhibitionsPage />} />
          <Route path="/Exhibition/:id" element={<ExhibitionPage />} />
          <Route path="/MyExhibition" element={<MyExhibition />} />
        </Routes>
      </Router>
    </ClerkProvider>
  </LikedItemsProvider>
);