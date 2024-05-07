import React from 'react';
import { FaSearch, FaWallet } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#002147', color: 'white' }} className="navbar px-4 py-2">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img style={{ height: '30px', width: '150px' }} src="bluemoon_logo_360.png" alt="Bluemoon Logo" />
        </a>
      </div>

      <div className="flex-none flex items-center gap-4" style={{ marginLeft: '200px' }}>
        <label
          className="input input-bordered flex items-center gap-2 h-8 w-96"
          style={{ backgroundColor: '#002147', border: '1px solid white' }}
        >
          <FaSearch className="w-4 h-4 text-white opacity-70" />
          <input
            type="text"
            className="grow text-white bg-transparent border-none"
            placeholder="Search Items, Collections, and Accounts"
          />
        </label>
      </div>

      <div className="flex-none" style={{ marginRight: '300px' }}>
        <ul className="menu menu-horizontal px-1">
          <li><a className="font-bold">Explore</a></li>
          <li><a className="font-bold">Stats</a></li>
          <li>
            <details>
              <summary className="font-bold">Feature</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Create NFT</a></li>
                <li><a>Competitions</a></li>
                <li><a>NFT Collection</a></li>
                <li><a>Rent NFT</a></li>
                <li><a>Swap NFT</a></li>
                <li><a>Compare NFT</a></li>
              </ul>
            </details>
          </li>
        </ul>

        <label
          className="input input-bordered flex items-center gap-2 h-8"
          style={{ backgroundColor: '#002147', border: '1px solid white', width: '180px', height: '30px' }}
        >
          <FaWallet className=" w-4 h-4 text-white opacity-70" />
          <span className="font-bold ">
            Connect Wallet
          </span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
