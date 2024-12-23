import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddArtifacts = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const artiName = form.artifactName.value;
        const artiImg = form.artifactImage.value;
        const category = form.artifactType.value;
        const history = form.historicalContext.value;
        const create = form.createdAt.value;
        const discoverAt = form.discoveredAt.value;
        const discoverBy = form.discoveredBy.value;
        const location = form.presentLocation.value;
        const name = form.userName.value;
        const email = form.userEmail.value;
        const formData = { artiName, artiImg, category, history, create, discoverAt, discoverBy, location, name, email, like_count: 0 }
        console.log(formData)
        // make a post request 
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-artifact`, formData)
            // form.reset()
            toast.success('Data added successfully')
            // navigate('/my-posted-jobs')

        }
        catch (err) {
            console.log(err)
            toast.error(err.message)

        }



    }
    // console.log(user)
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-700 text-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Add Artifact</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Artifact Name */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="artifactName">
                        Artifact Name
                    </label>
                    <input
                        type="text"
                        id="artifactName"
                        name="artifactName"
                        placeholder="Enter artifact name"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Artifact Image */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="artifactImage">
                        Artifact Image (URL)
                    </label>
                    <input
                        type="url"
                        id="artifactImage"
                        name="artifactImage"
                        placeholder="Enter image URL"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Artifact Type */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="artifactType">
                        Artifact Type
                    </label>
                    <select
                        id="artifactType"
                        name="artifactType"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select a type</option>
                        <option value="Tools">Tools</option>
                        <option value="Weapons">Weapons</option>
                        <option value="Documents">Documents</option>
                        <option value="Writings">Writings</option>
                    </select>
                </div>

                {/* Historical Context */}
                <div>
                    <label className="block text-sm font-medium  mb-1" htmlFor="historicalContext">
                        Historical Context
                    </label>
                    <textarea
                        id="historicalContext"
                        name="historicalContext"
                        placeholder="Provide historical context"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="4"
                    ></textarea>
                </div>

                {/* Created At */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="createdAt">
                        Created At
                    </label>
                    <input
                        type="text"
                        id="createdAt"
                        name="createdAt"
                        placeholder="e.g., 100 BC"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Discovered At */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="discoveredAt">
                        Discovered At
                    </label>
                    <input
                        type="text"
                        id="discoveredAt"
                        name="discoveredAt"
                        placeholder="e.g., 1799"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Discovered By */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="discoveredBy">
                        Discovered By
                    </label>
                    <input
                        type="text"
                        id="discoveredBy"
                        name="discoveredBy"
                        placeholder="Enter name"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Present Location */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="presentLocation">
                        Present Location
                    </label>
                    <input
                        type="text"
                        id="presentLocation"
                        name="presentLocation"
                        placeholder="Enter location"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* User Name and Email (Read-Only) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="userName">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="userName"
                            value={user?.displayName}
                            readOnly
                            className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="userEmail">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="userEmail"
                            value={user?.email}
                            readOnly
                            className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Add Artifact
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddArtifacts;