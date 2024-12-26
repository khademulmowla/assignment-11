import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const ArtifactDetails = () => {
    const { user } = useContext(AuthContext)
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

    const handleSubmit = async () => {
        // e.preventDefault()
        // const form = e.target;
        // const artiName = form.artifactName.value;
        // const artiImg = form.artifactImage.value;
        // const category = form.artifactType.value;
        // const history = form.historicalContext.value;
        // const create = form.createdAt.value;
        // const discoverAt = form.discoveredAt.value;
        // const discoverBy = form.discoveredBy.value;
        // const location = form.presentLocation.value;
        // const name = form.userName.value;
        // const email = form.userEmail.value;
        // const artLikeId = _id;
        const likeData = {
            artiName: art.artiName,
            artiImg: art.artiImg,
            category: art.category,
            history: art.history,
            create: art.create,
            discoverAt: art.discoverAt,
            discoverBy: art.discoverBy,
            location: art.location,
            name: art.name,
            email: user?.email,
            artLikeId: art._id,
        };
        // console.log(formData)
        // make a post request 
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-like`, likeData)
            // form.reset()
            toast.success('Liked successfully')
            // navigate('/my-posted-jobs')

        }
        catch (err) {
            console.log(err)
            toast.error(err?.response?.data)

        }
    }


    return (
        <div className="px-4 py-7 text-gray-300 rounded-md shadow-md md:min-h-[350px]">
            {/* Image Section */}
            <div className="w-full p-4">
                <img
                    src={artiImg}
                    alt={artiName}
                    className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md mx-auto border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
            </div>

            {/* Content Section */}
            <div className="space-y-4 text-center md:text-left">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{artiName}</span>
                    <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">
                        {category}
                    </span>
                </div>
                <div>
                    <h1 className="mt-2 text-lg font-semibold">Created At: {create}</h1>
                    <p className="mt-2 text-lg">{history}</p>
                    <p className="mt-2 text-lg">Discovered At: {discoverAt}</p>
                    <p className="mt-2 text-lg">Discovered By: {discoverBy}</p>
                    <p className="mt-2 text-lg font-semibold">Present Location: {location}</p>
                    <div className="flex justify-between items-center md:items-start gap-5 mt-4">
                        <div>
                            <p className="text-sm">Artifact Adder: {name}</p>
                            <p className="text-sm">Email: {email}</p>
                        </div>
                        <div>
                            <Link>
                                <button onClick={handleSubmit} className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 w-full">
                                    Like
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ArtifactDetails;