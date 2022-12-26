import React from 'react'
import HeroImg from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className=' flex  h-[65vh] '>

        {/* left side */}
        <div className='w-1/6 flex flex-col baseline justify-between relative ml-10'>
            <span className=' text-2xl min-content font-semibold flex flex-col text-gray-800 w-24'>SKIN {" "}PROTECTION {" "} CREAM</span>
        
            <div className='flex flex-col'>
                <div className='font-bold md:text-4xl'>Trendy <div className='md:mt-4 font-bold md:text-4xl'>Collection</div></div>
                <span className='mt-2'>{" "}Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>            
            </div>
        </div>

        {/* middle side */}
        
        <div className='md:w-4/6 flex  md:justify-center justify-end relative'>
            <div className='bg-blue-400 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] -z-99 rounded-full bottom-0'>
                <img className='md:w-[30rem] absolute' src={HeroImg} alt=""/>
            </div>

            
        </div>

        {/* right side */}

        <div className='md:w-1/6 h-[50vh] flex flex-col justify-between text-right mr-6 '>
            <div className='mt-4 flex flex-col '>
                <span className='text-4xl font-bold '>1.5m</span>
                <span className=''>Monthly Traffic</span >
            </div>

            <div className=' flex flex-col  '>
                <span className='text-4xl font-bold '>100k</span>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero