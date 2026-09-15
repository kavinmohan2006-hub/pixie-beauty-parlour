import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BridalPage } from './pages/BridalPage';
import { WorksPage } from './pages/WorksPage';
import { ContactPage } from './pages/ContactPage';
import { OffersPage } from './pages/OffersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="bridal" element={<BridalPage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="offers" element={<OffersPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
