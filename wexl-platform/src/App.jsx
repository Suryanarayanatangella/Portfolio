import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import { initEmailJS } from './services/emailService';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    // Initialize EmailJS on app load
    initEmailJS();
  }, []);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router basename="/Portfolio">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="quote" element={<Demo />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
