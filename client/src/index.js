import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './component/Index';
import App from './component/App';
import ContentPreview from './component/ContentPreview';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/" element={<ContentPreview />} />
        <Route path="store" element={<App />}>
          <Route path=":productId" element={<App />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('app'),
);
