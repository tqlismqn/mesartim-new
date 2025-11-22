import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import Home from './pages/Home';
import AccountingBox from './pages/AccountingBox';
import AccountingServer from './pages/AccountingServer';
import ITSupport from './pages/ITSupport';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/Layout/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900 antialiased selection:bg-primary/20 selection:text-primary">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/accounting-box" element={<AccountingBox />} />
                        <Route path="/accounting-server" element={<AccountingServer />} />
                        <Route path="/it-support" element={<ITSupport />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
