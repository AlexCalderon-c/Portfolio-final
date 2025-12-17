import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="bg-banner min-h-screen flex items-center justify-evenly px-5 py-20">
            <div className="banner-name">
                <h1 className="text-7xl md:text-8xl text-white font-bold">Alex Calderon</h1>
                <h2 className="text-4xl md:text-5xl text-subfont font-semibold mt-4">Software Developer</h2>
            </div>
            <div className="flex flex-col gap-5">
                <button className="px-4 py-3 min-w-[200px] rounded-xl text-white border-2 border-white bg-transparent hover:bg-white hover:text-banner transition-all">
                    Download Resume
                </button>
                <button className="px-4 py-3 min-w-[200px] rounded-xl text-white border-2 border-secondary bg-secondary hover:bg-transparent transition-all">
                    Github
                </button>
                <button className="px-4 py-3 min-w-[200px] rounded-xl text-white border-2 border-secondary bg-secondary hover:bg-transparent transition-all">
                    Linkedin
                </button>
            </div>
        </div>
    );
};

export default Banner;
