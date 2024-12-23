import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArtifactDetails = () => {
    const { id } = useParams()
    const [art, setArt] = useState([])
    useEffect(() => {
        fetchAllArts()
    }, [id])
    const fetchAllArts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifact/${id}`)
        setArt(data)
    }
    const { artiName, artiImg, category, history, create, discoverAt, discoverBy, location, name, email, like_count, _id } = art || {}


    return (
        <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
            <div className='flex items-center justify-between'><span className='text-sm font-light text-gray-800 '>
                {artiName}
            </span>
                <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
                    {category}
                </span>
            </div>
            <div>
                <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                    {create}
                </h1>

                <p className='mt-2 text-lg text-gray-600 '>
                    {history}
                </p>
                <div className='flex items-center gap-5'>
                    <div>
                        <p className='mt-2 text-sm  text-gray-600 '>
                            {name}
                        </p>
                        <p className='mt-2 text-sm  text-gray-600 '>
                            {email}
                        </p>
                    </div>
                </div>
                <p className='mt-6 text-lg font-bold text-gray-600 '>
                    {location}
                </p>
            </div>
        </div>
    );
};

export default ArtifactDetails;