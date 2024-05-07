import React from 'react';

function LiveCompetitions() {
  const auctionItems = [
    {
      images: [
        { src: 'img1.png', height: '150px', width: '70%',borderRadius: 'rounded-lg' },
        { src: 'img2.png', height: '70px', width: '60%', marginTop:'0px',marginLeft:'40px' },
        { src: 'img3.png', height: '70px', width: '60%',marginLeft:'80px',marginTop:'-165px' },
        { src: 'img4.png', height: '80px', width: '120%',marginTop:'-80px',marginRight:'100px' },
        
      ],
      avatar: 'Avatar4.png',
      creatorName: 'Creative Art Collection',
      offer: 'Created by Ralph Garraway',
    },
    {
      images: [
        { src: 'img1.png', height: '150px', width: '70%' },
        { src: 'img2.png', height: '70px', width: '60%', marginTop:'0px',marginLeft:'40px' },
        { src: 'img3.png', height: '70px', width: '60%',marginLeft:'80px',marginTop:'-165px' },
        { src: 'img4.png', height: '80px', width: '120%',marginTop:'-80px',marginRight:'100px' },
       
      ],
      avatar: 'Avatar4.png',
      creatorName: 'Creative Art Collection',
      offer: 'Created by Ralph Garraway',
    },
    {
        images: [
            { src: 'img1.png', height: '150px', width: '70%' },
            { src: 'img2.png', height: '70px', width: '60%', marginTop:'0px',marginLeft:'40px' },
            { src: 'img3.png', height: '70px', width: '60%',marginLeft:'80px',marginTop:'-165px' },
            { src: 'img4.png', height: '80px', width: '120%',marginTop:'-80px',marginRight:'100px' },
          
        ],
        avatar: 'Avatar4.png',
        creatorName: 'Creative Art Collection',
        offer: 'Created by Ralph Garraway',
      },
      {
        images: [
          { src: 'img1.png', height: '150px', width: '70%' },
          { src: 'img2.png', height: '70px', width: '60%', marginTop:'0px',marginLeft:'40px' },
          { src: 'img3.png', height: '70px', width: '60%',marginLeft:'80px',marginTop:'-165px' },
          { src: 'img4.png', height: '80px', width: '120%',marginTop:'-80px',marginRight:'100px' },
          
        ],
        avatar: 'Avatar4.png',
        creatorName: 'Creative Art Collection',
        offer: 'Created by Ralph Garraway',
      },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Live Competitions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {auctionItems.map((item, index) => (
          <div className="card card-compact w-full bg-base-100 shadow-xl" key={index}>
            <div className="card-body">
              <div className="flex items-center mb-4">
                <img
                  src={item.avatar}
                  alt={item.creatorName}
                  className="w-8 h-8 squared-full mr-2"
                />
                <div>
                  <h4 className="text-sm font-bold">{item.creatorName}</h4>
                  <p className="text-xs text-gray-600">{item.offer}</p>
                </div>
              </div>
             
              <div className="grid grid-cols-2 gap-4">
                {item.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image.src}
                    style={{ height: image.height, width: image.width, marginTop:image.marginTop, marginLeft: image.marginLeft,marginRight:image.marginRight, borderRadius:image.borderRadius }}
                    alt={`image ${imgIndex}`}
                    //className="object-cover"
                    className="object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveCompetitions;
