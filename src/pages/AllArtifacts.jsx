import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactCard from '../components/ArtifactCard';

const AllArtifacts = () => {
    const [arts, setArts] = useState([])
    useEffect(() => {
        fetchAllArts()
    }, [])
    const fetchAllArts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts`)
        setArts(data)
    }
    return (
        <div>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    arts.map(art => <ArtifactCard art={art} key={art._id}></ArtifactCard>)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;