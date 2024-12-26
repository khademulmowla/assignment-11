import React from 'react';
import { Link } from 'react-router-dom';

const ArtifactCard = ({ art }) => {
    const { artiName, artiImg, category, history, create, discoverAt, discoverBy, location, name, email, like_count, _id } = art || {}
    return (
        <div className="w-full max-w-sm px-4 py-3 bg-gray-800 text-gray-200 border border-gray-600 rounded-md shadow-lg hover:shadow-xl hover:scale-[1.05] transition-transform duration-300 flex flex-col">
            {/* Image Section */}
            <div className="w-full h-48 overflow-hidden rounded-t-md">
                <img
                    src={artiImg}
                    alt={artiName}
                    className="w-full h-full"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-4">
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">{artiName}</span>
                    <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full">
                        {category}
                    </span>
                </div>

                <p className="mt-2 text-sm text-gray-400">
                    {history.substring(0, 70)}....
                </p>
                <p className="mt-2 text-sm font-bold text-gray-300">
                    Discover At: {discoverAt}
                </p>

                <p className="mt-2 text-sm font-bold text-gray-300">
                    Location: {location}
                </p>
                <p className='mt-2 text-sm font-bold text-gray-400 '>Total Like: {like_count}</p>
            </div>

            {/* Button Section */}
            <div className="mt-auto p-4">
                <Link to={`/artifact/${_id}`}>
                    <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 w-full">
                        Show Details
                    </button>
                </Link>
            </div>
        </div>



    );
};

export default ArtifactCard;