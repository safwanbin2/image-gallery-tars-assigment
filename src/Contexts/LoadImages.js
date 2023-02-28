import React, { createContext, useEffect, useState } from 'react';

export const imageLoader = createContext();

const LoadImages = ({ children }) => {
    const [searchText, setSearchText] = useState(null);
    const [images, setImages] = useState([]);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (!searchText) {
            fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_client_id}`)
                .then(res => res.json())
                .then(data => {
                    setImages(data)
                });
        }
        if (searchText) {
            fetch(`https://api.unsplash.com/search/photos?query=${searchText}&client_id=${process.env.REACT_APP_client_id}`)
                .then(res => res.json())
                .then(data => setImages(data.results));
        }
    }, [searchText])

    const imageInfo = {
        searchText,
        setSearchText,
        images,
        setImages,
        isDark,
        setIsDark
    }
    return (
        <div>
            <imageLoader.Provider
                value={imageInfo}>
                {
                    children
                }
            </imageLoader.Provider>
        </div>
    );
};

export default LoadImages;