import React, { useState } from 'react'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'

const Product = () => {

    const [MenuProducts, setMenuProducts] = useState(ProductsData)

    const filter = (type) =>{
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }

  return (
    <div className='px-4 relative'>
        
        <img className='absolute w-28 -mt-16 ml-[25rem] h-20 flex' src={Plane} alt="" />

        <h1 className='w-full text-center text-3xl font-bold'>Our Featured Products</h1>

        <div className='flex mt-16'>
            <div className='w-1/4'>
                <ul className='text-xl space-y-8 h-40  cursor-pointer font-medium ml-28 '>
                    <li className='hover:text-orange-500' onClick={() => setMenuProducts(ProductsData) }>All</li>
                    <li className='hover:text-orange-500'  onClick={()=> filter("skin care")}>Skin Care</li>
                    <li className='hover:text-orange-500'  onClick={()=> filter("conditioner")}>Conditioners</li>
                    <li className='hover:text-orange-500' onClick={()=> filter("foundation")}>Foundations</li>
                </ul>
            </div>

            <div className='w-[70%]  h-96 overflow-auto  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-slate-100'>
                <div className='flex flex-wrap gap-10 relative  '>
                    {
                        MenuProducts.map((product, i)=>(
                            <div className='bg-white mx-2  p-3 h-36 rounded-2xl ml-8 w-56 flex overflow-hidden'>
                                <div className="">
                                    <div className="name">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>{product.price} ₹</span>
                                    <div>Show Now </div>
                                </div>
                                <img src={product.img} alt="" className="w-24 h-40" />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    </div>
  )
}

export default Product