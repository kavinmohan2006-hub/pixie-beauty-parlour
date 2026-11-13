import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BridalPage } from './pages/BridalPage';
import { WorksPage } from './pages/WorksPage';
import { ContactPage } from './pages/ContactPage';
import { OffersPage } from './pages/OffersPage';
import { MaintenancePage } from './pages/MaintenancePage';

function App() {
  // Temporary lock: Website is temporarily unavailable until enabled.
  // Set to true to show the "Temporarily Unavailable / Maintenance" screen.
  const [maintenanceMode] = useState<boolean>(true);

  // Maintenance mode ON → show maintenance page to everyone
  if (maintenanceMode) {
    return <MaintenancePage />;
  }

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
