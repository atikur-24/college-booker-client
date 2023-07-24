import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import avatarImg from '../../../assets/images/avatar/avatar.jpg'
import { useAuth } from '../../../hooks/useAuth';

const Avatar = () => {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout().then(() => { })
    }

    return (
        <div className='relative'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='p-2 md:p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
            >
                <HiMenu className='hidden md:block' />
                <div>
                    <img
                        className='rounded-full'
                        src={user && user.photoURL ? user.photoURL : avatarImg}
                        alt='profile'
                        height='30'
                        width='30'
                    />
                </div>
            </div>
            <div>
                {isOpen && (
                    <div className='absolute z-10 bg-white rounded-xl overflow-hidden shadow-md right-0 top-16 text-sm'>
                        <div className='flex flex-col cursor-pointer'>
                            {user ? (
                                <>
                                    <Link to='/profile' className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>
                                        {user?.displayName}
                                    </Link>
                                    <div onClick={handleLogout} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>
                                        Logout
                                    </div>
                                </>

                            ) : (
                                <>
                                    <Link
                                        to='/login'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to='/signUp'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold whitespace-nowrap'
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
};

export default Avatar;