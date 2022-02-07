import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login-page/login';
import HomePage from './pages/home-page/home';
import DetailsPage from './pages/details-page/details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="/details-page" element={<HomePage />} />
        <Route path="/edit-details-page" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
