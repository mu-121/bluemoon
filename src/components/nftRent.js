import React from 'react';

function NftSwap() {
  const auctionItems = [
    {
      image: 'img5.png',
      title: 'Hamlet Contemplates',
      description: 'Wehamlet',
      avatar: 'Avatar5.png',
      creatorName: 'Crispin Berry', 
      offer: '214.2 ETH', 
    },
    {
      image: 'img5.png',
      title: 'Hamlet Contemplates',
      description: 'Wehamlet',
      avatar: 'Avatar5.png',
      creatorName: 'Crispin Berry',
      offer: '214.2 ETH',
    },
    {
      image: 'img5.png',
      title: 'Hamlet Contemplates',
      description: 'Wehamlet',
      avatar: 'Avatar5.png',
      creatorName: 'Crispin Berry',
      offer: '214.2 ETH',
    },
    {
      image: 'img5.png',
      title: 'Hamlet Contemplates',
      description: 'Wehamlet',
      avatar: 'Avatar5.png',
      creatorName: 'Crispin Berry',
      offer: '214.2 ETH',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">NFT Rent</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {auctionItems.map((item, index) => (
          <div className="card card-compact w-full bg-base-100 shadow-xl" key={index}>
            <figure>
              <img
                style={{ height: '300px' }}
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 style={{ fontSize: '15px' }} className="card-title">{item.title}</h3>
              <p style={{ marginTop: '-10px', fontSize: '15px' }}>{item.description}</p>
              <div className="card-actions justify-end">
                <button style={{ backgroundColor: '#1877F2', color: 'white' }} className="btn h-2 w-20 text-xs">BSC</button>
              </div>
              <div className="mt-4">
                <div style={{marginLeft:'50px',marginTop:'-10px'}} className="text-sm font-bold">Creator</div> 
                <div className="flex items-center">
                  <img style={{marginTop:'-20px'}}
                    src={item.avatar}
                    alt={item.creatorName}
                    className="w-8 h-8 rounded-corner mr-2"
                  />
                  <div className="text-xs text-gray-600">{item.creatorName}</div>
                </div>
                <div style={{marginLeft:'150px',marginTop:'-37px'}}className="mt-2 text-sm font-bold">Offer</div> 
                <div style={{marginLeft:'140px',marginTop:'1px'}} className="text-xs text-gray-600">{item.offer}</div> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NftSwap;
