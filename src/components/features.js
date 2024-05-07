import React from 'react';

function Features() {
  const featureItems = [
    { src: 'IMG blue.png', title: 'NFT Competitions', subtitle: 'Buy Land, Structures and Spaces in the Bluemoon Metaverse to showcase your NFTs and bring utility to your collections' },
    { src: 'IMG green.png', title: 'Swap NFTs', subtitle: 'Explore the Bluemoon Marketplace and offer to swap one or more of your NFTs with other users ' },
    { src: 'IMG purple.png', title: 'Rent NFTs', subtitle: 'Put up a colletral and a rental rate and rent NFTs for days weeks or months ' },
    { src: 'IMG red.png', title: 'Compare NFTs', subtitle: 'Compare the triats and rarities each NFTs directly within the Marketplace' },
  ];

  return (
    <div className="container mx-auto px-4 py-8"> 
      <h1 style={{textAlign:'center'}} className="text-2xl font-bold mb-6">Bluemoon Unique Features</h1> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {featureItems.map((item, index) => (
          <div className="flex flex-col items-center text-center" key={index}> 
            <img style={{height:'50px', width:'50px'}}src={item.src} alt={item.title} className="w-full h-auto mb-4" />
            <h3 className="text-lg font-bold">{item.title}</h3> 
            <p style={{marginTop:'10px',fontSize:'14px'}}  className="text-black-600">{item.subtitle}</p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features; 
