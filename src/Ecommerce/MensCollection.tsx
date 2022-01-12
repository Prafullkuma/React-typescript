import React from 'react'

const MensCollection = () => {
    return (
        <div className='my-20'>
            <div className='flex flex-row justify-between'>
                <h2 className='text-md'>Men's collection</h2>
                <a href="#" className='text-md'>
                    View All
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
            </div>
            <div className='grid grid-flow-row grid-cols-4 gap-10 '>
                <a href="#">
                    <div className='shadow-lg rounded-lg'>
                        <img className='rounded-lg ' src='https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270' />

                        <div className='p-5'>
                            <h3><a href="#">Men's T-shirt </a></h3>
                        </div>
                    </div>

                </a>

            </div>
        </div>
    )
}

export default MensCollection
