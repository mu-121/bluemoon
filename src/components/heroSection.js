import React from 'react';
import { FaRocket } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div
    className="hero w-full bg-cover bg-center"
    style={{
      height: '500px', 
      backgroundImage: 'url(banner.png)',
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div  style={{marginRight:'500px'}}className="hero-content text-center text-neutral-content py-16">
      <div className="max-w-md mx-auto">
        <h1 className="mb-5 text-4xl font-bold ">Buy, Own & Sell NFTs</h1>
        
       
        <h1 className="mb-5 text-4xl font-bold text-white-500 opacity-100"> 
          In The Bluemoon Planet
        </h1>

        <h1 className="mb-5 text-4xl font-bold">Metaverse Coming Soon!</h1>
        <p  className="mb-5 mr-50"
        style={{
          marginLeft:'-9px'
        }}>
          The World's First NFT Marketplace with An Integrated Metaverse
        </p>
        <button
            className="btn border border-white mr-4 flex items-center" 
            style={{
              backgroundColor: 'transparent', 
              color: 'white', 
              fontWeight: 'bold',
              marginBottom:'-35px',
              
             }}
          >
            <FaRocket className="mr-2" /> 
            Join The Waiting List
          </button>
          <button
            className="btn"
            style={{
            backgroundColor: '#1877F2',
             marginLeft:'80px',
             marginTop:'-100px',
             color:'white',
             borderColor:'#1877F2',
             
            }}
          >
            Learn More
          </button>
      </div>
    </div>
  </div>
  );
};

export default  HeroSection;
