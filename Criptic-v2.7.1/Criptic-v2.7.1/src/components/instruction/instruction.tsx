'use client';

import React from 'react';
import Image from 'next/image'; // Importing Image component from Next.js for better optimization

// Import the image directly
import DecentralizationImage from 'src/assets/images/Instruction/decentralization.webp';

const Instruction: React.FC = () => {
  return (
    <>
    <div className="flex flex-col items-center rounded-lg bg-gray-100 p-5 dark:bg-light-dark">
      <div className="flex flex-col items-center sm:flex-row sm:items-start">
      <div className="flex flex-col space-y-2.5">
        <h2>Decentralization</h2>
        <Image
          src={DecentralizationImage}
          alt="Decentralization"
          className="flex-shrink-0 mb-5 sm:mb-0 sm:mr-5 max-h-[350px] rounded-lg"
          // Next.js Image component requires width and height
          width={350} // Replace with actual image width
          height={350} // Replace with actual image height
        />
     
          <div className="text-white">
            What is <b className="font-medium">decentralization?</b> What are its benefits and advantages? Decentralized marketing is created on an automated contract that guarantees you maximum security and stability.
          </div>
          <div className="text-white">
            A <b className="font-medium">smart contract</b> is an algorithm with automatic execution. It exists inside the Smart Chain blockchain*, which is one of the top cryptocurrencies. Smart contracts, like cryptocurrencies themselves, are decentralized. They work strictly according to a certain program, and once they are launched, it is impossible to change their mode of operation. The code that determines the logic of a smart contract is written in a blockchain, and all calculations are performed by millions of computers around the world. This ensures that a smart contract cannot be hacked or stopped.
          </div>
          <div className="bg-gray-100 dark:bg-light-dark p-5 rounded-lg">
            <b className="text-white font-medium">Blockchain</b> is an immutable register of transactions and information, protected from any further manipulation by cryptographic methods. It is simultaneously maintained by thousands of independent computers around the world.
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark">
    <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
      <span className="text-2xl text-white font-medium mb-5 sm:text-xl">
        What is a BUSD token
      </span>
      <div className="flex">
        <div className="space-y-2.5">
          <div>
            <b className="inline text-white font-medium notranslate mr-1.5">BUSD</b> is a cryptocurrency with a fixed exchange rate that is equal to $1. It has a fully verified code and is approved by the New York State Department of Financial Services.
          </div>
          <div>
            5 benefits of <span className="notranslate mr-1.5">BUSD</span> for <span className="notranslate mx-1.5">Forsage</span>:
          </div>
          <ul className="space-y-2.5">
            <li className="flex">
              <span>
                <b className="inline text-white font-medium">1. Fixed Cost.</b> Your Forsage performance is no longer affected by rate fluctuations and market corrections.
              </span>
            </li>
            <li className="flex">
              <span>
                <b className="inline text-white font-medium">2. All the opportunities that cryptocurrency provides.</b> <span className="notranslate mx-1.5">BUSD</span> token can be exchanged for any cryptocurrency on DEX exchangers with negligible fees in a couple of clicks.
              </span>
            </li>
            <li className="flex">
              <span>
                <b className="inline text-white font-medium">3. Simple calculations.</b> Registration fees, upgrades, and cycles are now specified in US Dollar equivalents.
              </span>
            </li>
            <li className="flex">
              <span>
                <b className="inline text-white font-medium">4. Precise planning.</b> You can accurately track costs and estimate results without wasting time converting from one unit to another.
              </span>
            </li>
            <li className="flex">
              <span>
                <b className="inline text-white font-medium">5. Protection of participants' interests.</b><span className="notranslate mx-1.5">BUSD</span> is fully backed by the US Dollar at a ratio of 1:1 and can always be exchanged for Dollars. It was created in a Paxos and Binance partnership.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
    <div className="flex flex-col rounded-lg bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
      <span className="text-2xl text-white font-medium mb-5 sm:text-xl">
        <span className="notranslate mr-1.5">Forsage</span> marketing
      </span>
      <div className="flex">
        <div className="flex mt-5 items-center sm:items-start flex-col">
          <iframe
            className="bg-black w-full mb-7.5 h-300px sm:h-180px"
            src="https://www.youtube.com/embed/YAYAKIp5JeE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Forsage Marketing Video"
          ></iframe>
          <div className="mt-5 space-y-2.5">
            <span>
              <b className="inline text-white font-medium">
                <span className="notranslate mr-1.5">Forsage</span> marketing
              </b> is implemented on the Smart Chain blockchain smart contract technology. The marketing employs the BUSD token in the BEP-20 format with a stable exchange rate of 1 USD. To send 
              <span className="notranslate mx-1.5">BUSD</span> or any other token functioning in the Smart Chain blockchain, you will need a certain amount of 
              <span className="notranslate mx-1.5">BNB</span> to pay the fee.
            </span>
            <ul className="space-y-2.5">
              <li className="flex">
                <svg className="w-5 h-5 flex-shrink-0 inline-block mr-2.5" id="instruction_bnb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                  <defs>
                    <style>{'.cls-1{fill:#f0b90b}'}</style>
                  </defs>
                  <path className="cls-1" d="m60.24 100-16.37 16.31L27.5 100l16.37-16.31L60.24 100zM100 60.4l28.06 27.95 16.38-16.3L100 27.79 55.56 72.05l16.38 16.3L100 60.4zM156.13 83.69 139.76 100l16.37 16.31L172.5 100l-16.37-16.31zM100 139.6l-28.06-27.95-16.38 16.3L100 172.21l44.44-44.26-16.38-16.3L100 139.6z"></path>
                  <path className="cls-1" d="M100 116.31 116.37 100 100 83.69 83.63 100 100 116.31z"></path>
                  <circle cx="100" cy="100" r="91.21" style={{ fill: 'none', stroke: '#f0b90b', strokeMiterlimit: 10, strokeWidth: '12px' }}></circle>
                </svg>
                <span>
                  <b className="inline text-white font-medium notranslate mr-1.5">BNB</b> - This is the internal BEP-20 format coin of the Smart Chain blockchain, which is required to pay the transaction fee.
                </span>
              </li>
              <li className="flex">
                <svg className="w-5 h-5 flex-shrink-0 inline-block mr-2.5" id="instructions_busd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                  <defs>
                    <style>{'.cls-1{fill:#f0b90b}'}</style>
                  </defs>
                  <g id="Layer_2">
                    <g id="Layer_1-2">
                      <path className="cls-1" d="m100 27.28 18 18.4-45.27 45.23-18-18ZM127.27 54.55l18 18.4-72.5 72.5-18-18ZM45.46 81.82l18 18.4-18 18-18-18ZM154.54 81.82l18 18.4-72.54 72.5-18-18Z"></path>
                    </g>
                  </g>
                  <circle cx="100" cy="100" r="91.21" style={{ fill: 'none', stroke: '#f0b90b', strokeMiterlimit: 10, strokeWidth: '12px' }}></circle>
                </svg>
                <span>
                  <b className="inline text-white font-medium notranslate mr-1.5">BUSD</b> - This is the BEP-20 format Smart Chain blockchain coin with a stable rate of 1 USD.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
      
    </>
  );
};

export default Instruction;
