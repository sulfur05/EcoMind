
import React from 'react';

const Home = () => {
  return (
    <>
      <div className='hero bg-cover bg-no-repeat h-screen flex items-center justify-center'></div>
      <img src='images/bg.jpg' className='bgimg'></img>
      <div className='container'>
        <div className="title">
          <img src='images/logo2.png' ></img>
          <p>sustainability made easy </p>
        </div>
      </div>
      <div className='feature-section'>
        <div className='container mx-auto py-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-4'>Our Features</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <div className='bg-white p-4 shadow-md rounded'>
                <h3 className='text-lg font-semibold mb-2'>Products - Discover Sustainable Brands</h3>
                <p className='text-xs text-black leading-relaxed'>Explore our collection of sustainable products across fashion, beauty, home goods, and more. Support brands that prioritize ethical and eco-conscious production practices.</p>
              </div>
              <div className='bg-white p-4 shadow-md rounded'>
                <h3 className='text-lg font-semibold mb-2'>Articles Related to Sustainability - Stay Informed!</h3>
                <p className='text-sm text-black leading-relaxed'>Stay Informed: Dive into articles covering a range of topics related to sustainability, from eco-friendly tips to latest trends in sustainable living. Expand your knowledge and inspire others to join the movement.</p>
              </div>
              <div className='bg-white p-4 shadow-md rounded'>
                <h3 className='text-lg font-semibold mb-2'>EcoChat Forum - Join the Sustainable Conversation!</h3>
                <p className='text-sm text-black leading-relaxed'>Welcome to EcoChat, your virtual hub for meaningful discussions on sustainability! EcoChat is a vibrant online forum where like-minded individuals gather to exchange ideas, insights, and experiences related to various topics in sustainability. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
