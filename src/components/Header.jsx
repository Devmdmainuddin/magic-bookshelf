
import { NavLink ,Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                <Link
                    to='/'
                    aria-label='HeroGadget'
                    title='HeroGadget'
                    className='inline-flex items-center'
                >
                
                    <span className='ml-2 text-[28px] font-bold tracking-wide text-[#131313] '>
                       Magic Bookshelf
                    </span>
                </Link>
                <ul className='items-center hidden space-x-8 lg:flex gap-x-4'>
                    <li>
                        <NavLink
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className={`${({ isActive }) => (isActive ? 'active border-[#23BE0A]  border rounded-lg ' : 'default')} py-[14px] px-[17px]`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/bookslist'
                            aria-label='Listed Books'
                            title='Listed Books'
                            className={`${({ isActive }) => (isActive ? 'active border-[#23BE0A]  border  rounded-lg ' : 'default')} py-[14px] px-[17px]`}
                        >
                            Listed Books
                        </NavLink>
                    </li>
                  
                    <li>
                        <NavLink
                            to='/readbooks'
                            aria-label='Pages to Read'
                            title='Pages to Read'
                            className={`${({ isActive }) => (isActive ? 'active border-[#23BE0A]  border  rounded-lg ' : 'default')} py-[14px] px-[17px] `}
                        >
                            Pages to Read
                        </NavLink>
                    </li>
                </ul>
                <div className="buttons lg:flex
                hidden">
                    <Link to='/signin' className="py-[14px] px-[17px] bg-[#23BE0A] rounded-lg text-white">sign in </Link>
                    <Link to='/signup' className="ml-4 py-[14px] px-[17px] bg-[#59C6D2] rounded-lg text-white">sign up </Link>
                </div>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                       <MdOutlineMenu></MdOutlineMenu> 
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link
                                            to='/'
                                            aria-label='HeroGadget'
                                            title='HeroGadget'
                                            className='inline-flex items-center'
                                        >
                                            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-cyan-200'>
                                               
                                            </div>
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                HG
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <IoMdClose ></IoMdClose >
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link
                                                to='/shop'
                                                aria-label='Shop'
                                                title='Shop'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Shop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/cart'
                                                aria-label='Cart'
                                                title='Cart'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                <div className='relative py-3'>
                                                    <BsCart2 className='h-6 w-6 text-cyan-400' />
                                                    <p className='absolute bottom-5 left-6'>
                                                      
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/contact'
                                                aria-label='About Us'
                                                title='About Us'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                contact
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;