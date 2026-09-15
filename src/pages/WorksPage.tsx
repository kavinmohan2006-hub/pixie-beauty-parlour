import React from 'react';
import { Gallery } from '../components/Gallery';
import { OurWorks } from '../components/OurWorks';

export const WorksPage: React.FC = () => {
  return (
    <>
      <OurWorks />
      <Gallery />
    </>
  );
};
