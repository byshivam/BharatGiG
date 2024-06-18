import React from 'react';
import '../styles/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-animated-gradient bg-gradient-to-r from-black from-20% to-red-700">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
