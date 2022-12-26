import React from 'react'
import Hero from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonials = () => {
  return (
    <div className='mt-16 '>
    <div className='flex items-center'>
        <div className='w-1/4 ml-8'>
            <div className='flex flex-col '>
                <span className='text-3xl font-bold'>Top Rated</span>
                <span className='text-sm mt-4'>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
            </div>
        </div>
        
        <div className='w-3/5 ml-48 text-center'>
            <img className=' h-72' src={Hero} alt=""/>            
        </div>

        <div className='w-1/5  '>
            <div className='ml-14 flex flex-col'>
                <span className='text-3xl font-bold'>100k</span>
                <span className='mt-2 text-sm'>Happy Customers</span>
            </div>
        </div>
    </div>

    <div className='w-full text-3xl text-center uppercase font-bold'>Reviews</div>

    <div className=''>
        <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className='w-[90%]'
        >
            {
                TestimonialsData.map((testimonial, i)=>(
                    <SwiperSlide>
                        <div className='bg-white p-2 rounded-lg'>
                            <div className='flex items-center justify-center '>
                                <img className='w-10 text-center ' src={testimonial.image} alt="" />         
                            </div>
                            <div className='p-2'>{testimonial.comment}</div>
                            <hr className='w-[70%] ml-10 mt-4 text-gray-900'/>
                            <div className='w-full text-center p-1 mt-4'>{testimonial.name}</div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
</div>
  )
}

export default Testimonials