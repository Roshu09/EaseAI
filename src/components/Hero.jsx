import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className='flex items-center'> {/* Parent container for logo and text */}
          <img src={logo} alt='sumz_logo' className='w-12 h-auto object-contain' />
          <span className='font-bold text-lg ml-2' style={{ fontSize: '1.5rem' }}> 
            EaseAI 
          </span>
        </div>

        <button
          type='button'
          onClick={() => window.open("https://github.com/Roshu09", "_blank")}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
