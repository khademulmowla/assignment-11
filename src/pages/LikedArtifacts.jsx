import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";


const LikedArtifacts = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [likes, setLikes] = useState([])
    useEffect(() => {
        fetchAllLikeArts()
    }, [user])
    const fetchAllLikeArts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/liked/${user?.email}`)
        setLikes(data)
    }
    console.log(likes)

    return (
        <div>
            <h2 className="text-2xl text-white font-bold mb-4">Liked Artifacts</h2>
        </div>
    );
};

export default LikedArtifacts;
