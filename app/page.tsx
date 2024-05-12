'use client'
import React, { useState } from 'react';
import Chatbot from '../components/Chatbot';

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl md:text-6xl text-center text-transparent font-bold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-red-500 absolute top-0 w-full mt-8">
        Welcome to Intelli Med.
      </h1>
      <Chatbot />
    </div>
    </>
    
  );
};

export default Home;
