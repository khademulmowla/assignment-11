import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const MyArtifacts = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [arts, setArts] = useState([])
    useEffect(() => {
        fetchAllArts()
    }, [user])
    const fetchAllArts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts/${user?.email}`)
        setArts(data)
    }
    // delete function //
    const handleDelete = async id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/artifact/${id}`)
            console.log(data)
            toast.success('Data deleted successfully')
            fetchAllArts()

        } catch (err) {
            toast.error(err.message)
        }
    }
    // delete toast yes or no //
    const toastDelete = id => {
        toast(
            (t) => (
                <div className='flex gap-3 items-center'>
                    <div><p>Are you <b>sure?</b></p></div>
                    <div className='flex gap-2'>
                        <button className='bg-red-400 text-white px-3 py-1 rounded-md' onClick={() => {
                            toast.dismiss(t.id)
                            handleDelete(id)
                            navigate('/artifacts')
                        }}>Yes</button>
                        <button className='bg-green-400 text-white px-3 py-1 rounded-md' onClick={() => toast.dismiss(t.id)}>Cancel</button>
                    </div>

                </div>
            )
        );
    }
    return (
        <div>
            <h1 className='text-white'>{arts.length}</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
                {
                    arts.map(art => <div key={art._id}>
                        <div className="flex-1 px-4 py-7 bg-gray-800 border border-gray-600 rounded-md rounded-md shadow-md md:min-h-[350px] flex flex-col justify-between max-w-full">
                            {/* Top Section */}
                            <div>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex-1">
                                        <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">
                                            {art.category}
                                        </span>
                                        <p className="text-xl mt-2 font-light text-gray-200">
                                            {art.artiName}
                                        </p>
                                        <h1 className="text-gray-300">
                                            Created At: {art.create}
                                        </h1>
                                        <h1 className="text-gray-300">
                                            Created At: {art.discoverBy}
                                        </h1>
                                        <p className="text-gray-300">
                                            Location: {art.location}
                                        </p>

                                    </div>
                                    <div className="w-full md:w-48 h-48 overflow-hidden rounded-md flex-shrink-0">
                                        <img
                                            src={art.artiImg}
                                            alt={art.artiName}
                                            className="w-full h-full object-cover border p-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="flex justify-between">
                                <button
                                    onClick={() => toastDelete(art._id)}
                                    className="btn btn-sm bg-red-200">
                                    Delete
                                </button>
                                <Link to={`/update/${art._id}`}>
                                    <button className="btn btn-sm bg-green-200">Update</button>
                                </Link>
                            </div>
                        </div>



                    </div>)
                }
            </div>
        </div>
    );
};

export default MyArtifacts; 