import React from 'react'
import HeroComponent from './HeroComponent'
import MensCollection from './MensCollection'

const Ecommerce = () => {
    return (
        <div className='container mx-auto p-5'>
            {/*Navigation */}
            <div className='md:flex md:flex-row md:justify-between text-center md:text-left'> {/**Greate Than md */}
                <div className='flex flex-row justify-center mb-3'>
                    <div className='bg-gradient-to-r from-purple-400 rounded-md to-red-600 w-10 h-10'></div>
                    <h1 className='text-2xl text-gray-300 ml-2'> Logo</h1>
                </div>
                <div>
                    <a href="#" className='text-gray-600 hover:text-purple-600 p-4'>Home</a>
                    <a href="#" className='text-gray-600 hover:text-purple-600 p-4'>Shop</a>
                    <a href="#" className='text-gray-600 hover:text-purple-600 p-4'>Blog</a>
                    <a href="#" className='text-gray-600 hover:text-purple-600 p-4'>Contact</a>
                    <a href="#" className='text-white hover:bg-purple-300 p-4 px-2 bg-purple-700 rounded-md '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Cart (0)</a>
                </div>
            </div>
            <HeroComponent />
            <MensCollection />
        </div>
    )
}

export default Ecommerce
