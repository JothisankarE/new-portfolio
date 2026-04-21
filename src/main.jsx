import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/index.css';
import { PortfolioProvider } from './context/PortfolioContext';

createRoot(document.getElementById("root")).render(
  <PortfolioProvider>
    <App />
  </PortfolioProvider>
);