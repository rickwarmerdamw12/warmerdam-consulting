'use client';

import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

/**
 * PageWrapper component
 *
 * Wrapper component die elke pagina omhult met:
 * - Navigation component bovenaan
 * - Children (pagina-inhoud) in het midden
 * - Footer component onderaan
 *
 * Gebruik dit component in je layout of rond individuele pagina's.
 */

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A]">
      {/* Navigatie bovenaan */}
      <Navigation />

      {/* Hoofdinhoud */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer onderaan */}
      <Footer />
    </div>
  );
}
