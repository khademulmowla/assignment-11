import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='navbar bg-[#c6a227] text-white shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='font-bold'>Artifacts</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/artifacts'>All Artifacts</Link>
                    </li>
                    <li>
                        <Link to='/add-artifact'>Add Artifact</Link>
                    </li>

                    {!user && (
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    )}
                </ul>

                {user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52'
                        >
                            <li>
                                <Link to='/liked-artifacts'>Liked Artifacts</Link>
                            </li>
                            <li>
                                <Link to='/my-artifacts'>My Artifacts</Link>
                            </li>
                            <li className='mt-2'>
                                <button
                                    onClick={logOut}
                                    className='bg-[#c6a227] hover:bg-gray-800 block text-center'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
