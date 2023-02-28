import React, { useContext } from 'react';
import ListCard from '../../Components/ListCard/ListCard';
import { imageLoader } from '../../Contexts/LoadImages';

const ImageContainer = () => {
    const { images } = useContext(imageLoader);
    return (
        <div className='w-11/12 mx-auto my-8 grid grid-cols-1 md:grid-cols-4 gap-6'>
            {
                images.map(image => <ListCard
                    image={image}
                    key={image.id}
                ></ListCard>)
            }
        </div>
    );
};

export default ImageContainer;