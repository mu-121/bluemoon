import React from 'react';

function TopSeller() {
  const featureItems = [
    { src: 'Avatar1.png', title: 'Crispin Berry', subtitle: '214.2 ETH' },
    { src: 'Avatar2.png', title: 'Crispin Berry', subtitle: '214.2 ETH' },
    { src: 'Avatar3.png', title: 'Crispin Berry', subtitle: '214.2 ETH' },
    { src: 'Avatar4.png', title: 'Crispin Berry', subtitle: '214.2 ETH' },
    { src: 'Avatar5.png', title: 'Crispin Berry', subtitle: '214.2 ETH' },
    { src: 'Avatar6.png', title: 'Crispin Berry', subtitle: '214.2 ETH' },
  ];

  return (
    <div className="container mx-auto px-4 py-8"> 
      <h1 className="text-center text-2xl font-bold mb-8">Top Sellers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {featureItems.map((item, index) => (
          <div className="flex flex-col items-center text-center p-4" key={index}> 
            <img src={item.src} alt={item.title} className="w-32 h-32 mb-4 squared-full" /> 
            <h3 style={{fontSize:'15px'}} className="text-lg font-bold mb-2">{item.title}</h3> 
            <p style={{fontSize:'13px',fontWeight:'bold',color:'gray',marginTop:'-10px'}} className="text-gray-600">{item.subtitle}</p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSeller;
