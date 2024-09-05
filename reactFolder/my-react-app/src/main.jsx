import { createRoot } from 'react-dom/client'
import HomePage from './Pages/HomePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../src/Styling/btn_styling.css"

createRoot(document.getElementById('root')).render(
    <HomePage />
)
