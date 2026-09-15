import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingButtons } from '../components/FloatingButtons';
import { AdminPortal } from '../components/AdminPortal';
import { Appointment } from '../components/Appointment';

export const Layout: React.FC = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleToggleAdmin = () => {
      setShowAdmin(prev => !prev);
      if (!showAdmin) {
        setTimeout(() => {
          document.getElementById('admin')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };
    window.addEventListener('toggleAdmin', handleToggleAdmin);
    return () => window.removeEventListener('toggleAdmin', handleToggleAdmin);
  }, [showAdmin]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>

      <Appointment />

      <Footer />
      <FloatingButtons />
      
      {showAdmin && <AdminPortal />}
    </div>
  );
};
