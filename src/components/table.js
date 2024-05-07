import React from 'react';

const data = [
  {
    name: 'Bored Ape Yacht',
    floorPrice: '100 ETH',
    volume24hr: '12K ETH',
    change24hr: '+2000%',
    image: '/path/to/image1.jpg', 
  },
  {
    name: 'goblintown.wth',
    floorPrice: '100 ETH',
    volume24hr: '12K ETH',
    change24hr: '-200',
    image: '/path/to/image2.jpg',
  },
  {
    name: 'Mutant Ape Yacht',
    floorPrice: '100 ETH',
    volume24hr: '12k ETH',
    change24hr: '+2000%',
    image: '/path/to/image3.jpg',
  },
];

function CollectionsTable() {
  return (
    <div className="container mx-auto px-4 py-8"> 
      <h1 style={{textAlign:'center'}} className="text-2xl font-bold mb-6">Top Collections Over Last 24 Hours</h1> 
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Collection</th>
            <th>Floor Price</th>
            <th>24-Hour Volume</th>
            <th>24-Hour Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                  <div className="font-bold">{item.name}</div>
                </div>
              </td>
              <td>{item.floorPrice}</td>
              <td>{item.volume24hr}</td>
              <td>{item.change24hr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default CollectionsTable;
