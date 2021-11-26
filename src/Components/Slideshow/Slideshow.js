import ImageSlide from './ImageSlide'
import React from 'react'
import './Slideshow.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const Slideshow = () => {
    return(
        <div className='Slideshow'>

            <ImageSlide 
            data={{
                name:'Foto1',
                source:'https://i.ibb.co/0mQvnH4/Copy-of-DSCF3361-1.png'
            }}/>

            <ImageSlide 
            data={{
                name:'Foto1',
                source:'https://i.ibb.co/wCFyV6m/Copy-of-DSCF3150-1.png'
            }}/>

            <ImageSlide 
            data={{
                name:'Foto1',
                source:'https://i.ibb.co/m4Yh9vV/Copy-of-DSCF3629-1.png'
            }}/>

            <ImageSlide 
            data={{
                name:'Foto1',
                source:'https://i.ibb.co/0mQvnH4/Copy-of-DSCF3361-1.png'
            }}/>
           
           <Swiper
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Slideshow