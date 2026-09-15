import React from 'react';
import { Hero } from '../components/Hero';
import { PromoBanner } from '../components/PromoBanner';
import { StoreImages } from '../components/StoreImages';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { Feedback } from '../components/Feedback';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PromoBanner />
      <WhyChooseUs />
      <StoreImages />
      <Testimonials />
      <Feedback />
      <Contact />
    </>
  );
};
