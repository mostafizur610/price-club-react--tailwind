import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className=''>
            <div className='bg-indigo-300 m-3 rounded-md p-3'>
                <h3>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/month</span>
                </h3>
                <p className='text-3xl my-4'>{option.name}</p>
                {
                    features.map((feature, idx) => <Feature
                        key={idx} feature={feature}>
                    </Feature>)
                }
                <button className='bg-green-500 w-full rounded-md mt-4 py-2 text-white font-bold'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;