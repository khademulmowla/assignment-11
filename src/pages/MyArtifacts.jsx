import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyArtifacts = () => {
    const { user } = useContext(AuthContext)
    const [arts, setArts] = useState([])
    useEffect(() => {
        fetchAllArts()
    }, [user])
    const fetchAllArts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts/${user?.email}`)
        setArts(data)
    }
    return (
        <div>
            <h1 className='text-white'>{arts.length}</h1>
        </div>
    );
};

export default MyArtifacts;