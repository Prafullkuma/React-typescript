import React from 'react'
import Hero from '../Ecommerce/Images/Hero.svg'
const HeroComponent = () => {
    return (
        <div className='md:flex md:flex-row mt-20'>
            <div className='md:w-2/5 flex flex-col justify-center'>
                <h2 className='font-serif text-5xl text-gray-600 mb-4'>Some catchy title Here</h2>
                <p className='uppercase text-gray-600 tracking-wide'>Our brand name tagline goes here</p>
                <p className='uppercase text-gray-600 tracking-wide'>Out brand  matto goes here</p>
                <a href="#" className='bg-gradient-to-r from-purple-600 to-green-900 md:p-4 md:m-3 p-3 m-7 rounded-full text-white md:text-2xl text-lg uppercase'>Shop now</a>
            </div>
            <div className='md:w-3/5'>
                <img src={Hero} alt="hero" className='w-full' />
            </div>
        </div >
    )
}

export default HeroComponent
