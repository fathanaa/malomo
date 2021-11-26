import ImageSlide from './ImageSlide'
import React from 'react'
import './Slideshow.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const Slideshow = () => {
    return(
        <div className='Slideshow'>
           
           <Swiper
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
                >
                <SwiperSlide>
                    <ImageSlide 
                        data={{
                            name:'Foto1',
                            source:'https://i.ibb.co/0mQvnH4/Copy-of-DSCF3361-1.png'
                        }}/>
                </SwiperSlide>

                <SwiperSlide>
                    <ImageSlide 
                        data={{
                            name:'Foto1',
                            source:'https://i.ibb.co/wCFyV6m/Copy-of-DSCF3150-1.png'
                        }}/>
                </SwiperSlide>

                <SwiperSlide>
                    <ImageSlide 
                        data={{
                            name:'Foto1',
                            source:'https://i.ibb.co/m4Yh9vV/Copy-of-DSCF3629-1.png'
                        }}/>
                </SwiperSlide>

                <SwiperSlide>
                    <ImageSlide 
                        data={{
                            name:'Foto1',
                            source:'https://i.ibb.co/0mQvnH4/Copy-of-DSCF3361-1.png'
                        }}/>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Slideshow