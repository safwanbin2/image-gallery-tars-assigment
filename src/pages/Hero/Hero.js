import React from 'react';

const Hero = () => {
    return (
        <div className='min-h-[200px] bg-base-200'>
            <div className="hero">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Image Gallery</h1>
                        <p className="mb-5">You can search for images. the results are fetched through unsplash api.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;