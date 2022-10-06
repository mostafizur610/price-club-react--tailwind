import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const PriceOption = ({ option }) => {
    return (
        <div className=''>
            <div className='bg-indigo-300 m-3 rounded-md p-3'>
                <h3>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/month</span>
                </h3>
                <p className='text-3xl my-4'>{option.name}</p>
                <div className='flex items-center'>
                    <CheckCircleIcon className="h-5 w-5 text-green-100" />
                    <p className='ml-2'>Awesome Feature</p>
                </div>
            </div>
        </div>
    );
};

export default PriceOption;