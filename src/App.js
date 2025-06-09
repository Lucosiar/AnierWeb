import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ShowsPage from './pages/ShowsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shows" element={<ShowsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
