import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection'; 
import Features from './components/features'
import TopCollection from './components/topCollections'
import LiveCompetitions from './components/liveCompetitions'
import NftSwap from './components/nftSwap'
import  NftRent from './components/nftRent'
import LiveAuctions from './components/liveAuctions'
import TopSeller from './components/topSeller'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Features />
      <TopCollection />
      <LiveCompetitions />
      <NftSwap />
      <NftRent />
      <LiveAuctions />
      <TopSeller />
      <Footer />
    
    </div>
  );
}

export default App;
