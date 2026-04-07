import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const RevealSection = ({ children, className = "" }) => {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`${className} reveal ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};
