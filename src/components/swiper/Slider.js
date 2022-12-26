import React from 'react'
import {SliderProducts} from '../../data/products'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Swiper,SwiperSlide } from "swiper/react";

import { Navigation,Pagination } from "swiper";

const Slider = () => {
  return (
    <div className='relative mb-4'>
        <Swiper 
        modules={[Pagination, Navigation]}
        className="w-[70%] h-[12rem] unset"
        navigation={true}
        loopFillGroupWithBlank={true}

        slidesPerView={3}
        spaceBetween ={40}
        slidesPerGroup ={1}
        loop={true}
        >
            {SliderProducts.map((slide,i)=>(
                <SwiperSlide className='bg-white flex rounded-md p-1 relative overflow-hidden box-border justify-between'>
                    <div className='flex flex-col justify-between'>
                        <div className="flex flex-col">
                            <span className='mb-5'>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>

                        <span>{slide.price}₹</span>
                        <span>Shop Now</span>
                    </div>

                    <img src={slide.img} alt="product" className='' />
                </SwiperSlide>

                ))}
       
        </Swiper>
    </div>
  )
}

export default Slider