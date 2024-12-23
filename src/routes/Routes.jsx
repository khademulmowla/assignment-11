import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AllArtifacts from "../pages/AllArtifacts";
import PrivateRoute from "./PrivateRoute";
import AddArtifacts from "../pages/AddArtifacts";
import MyArtifacts from "../pages/MyArtifacts";
import LikedArtifacts from "../pages/LikedArtifacts";
import ArtifactDetails from "../pages/ArtifactDetails"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/artifacts',
                element: <AllArtifacts></AllArtifacts>

            },
            {
                path: '/add-artifact',
                element: <PrivateRoute><AddArtifacts></AddArtifacts></PrivateRoute>

            },
            {
                path: '/liked-artifacts',
                element: <PrivateRoute><LikedArtifacts></LikedArtifacts></PrivateRoute>
            },
            {
                path: '/my-artifacts',
                element: <PrivateRoute><MyArtifacts></MyArtifacts></PrivateRoute>

            },
            {
                path: '/artifact/:id',
                element: <PrivateRoute><ArtifactDetails></ArtifactDetails></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Register></Register>
            }
        ]
    }
])
export default router;