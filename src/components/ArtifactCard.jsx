import React from 'react';
import { Link } from 'react-router-dom';

const ArtifactCard = ({ art }) => {
    const { artiName, artiImg, category, history, create, discoverAt, discoverBy, location, name, email, like_count, _id } = art || {}
    return (
        <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
            <div className='flex items-center justify-between'>
                <span className='text-xs font-light text-gray-800 '>
                    {artiName}
                </span>
                <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
                    {category}
                </span>
            </div>

            <div>
                <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                    {create}
                </h1>

                <p className='mt-2 text-sm text-gray-600 '>
                    {history.substring(0, 70)}....
                </p>
                <p className='mt-2 text-sm font-bold text-gray-600 '>
                    Discover At: {discoverAt}
                </p>
                <div className='flex justify-between items-center'>
                    <p className='mt-2 text-sm font-bold text-gray-600 '>{location}</p>
                    <Link to={`/artifact/${_id}`}><button className='btn btn-sm'>Show Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ArtifactCard;