import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoBanner } from './components/PromoBanner';
import { About } from './components/About';
import { StoreImages } from './components/StoreImages';
import { Services } from './components/Services';
import { Bridal } from './components/Bridal';
import { Gallery } from './components/Gallery';
import { OurWorks } from './components/OurWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Appointment } from './components/Appointment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Feedback } from './components/Feedback';
import { FloatingButtons } from './components/FloatingButtons';
import { AdminPortal } from './components/AdminPortal';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <PromoBanner />
        <About />
        <StoreImages />
        <Services />
        <Bridal />
        <Gallery />
        <OurWorks />
        <WhyChooseUs />
        <Testimonials />
        <Feedback />
        <Appointment />
        <Contact />
        <AdminPortal />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating action buttons — always visible */}
      <FloatingButtons />
    </div>
  );
}

export default App;
