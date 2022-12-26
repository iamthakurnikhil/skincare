import React from 'react'
import Shade from "../../assets/shade.png"
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import ReactCompareImage from 'react-compare-image'

const Virtual = () => {
  return (
    <div className='mt-20 max-w-screen'>
        <div className='flex justify-between text-gray-800'>
            <div className=' flex flex-col w-full gap-6 ml-12 '>
                <div className='uppercase text-3xl font-bold'>Virtual Try-on</div>
                <div className='mt-2 text-2xl w-72 uppercase '>Never Buy the wrong Shade Again !</div>
                <div className='font-bold text-2xl mt-12'>Try Now!</div>
                <div classname='border-2'>
                    <img className='w-52 h-12 -mt-28'  src={Shade} alt="" />                    
                </div>
            </div>

            <div className=''>
                <div className=' mr-10 w-[30rem] h-[25rem]'>
                    <ReactCompareImage leftImage={Before} rightImage={After}/>
                </div>
            </div>

        </div>

    </div>
  )
}


export default Virtual