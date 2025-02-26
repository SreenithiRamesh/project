import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QuestionsPage from './pages/QuestionsPage';
import ImageUploadPage from './pages/ImageUploadPage';
import ProductSuggestionPage from './pages/ProductSuggestionPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/upload" element={<ImageUploadPage />} />
        <Route path="/suggestions" element={<ProductSuggestionPage />} />
      </Routes>
    </div>
  );
};

export default App;
