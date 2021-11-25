import ImageSlide from './ImageSlide'
import React from 'react'
import './Slideshow.css'


const Slideshow = () => {
    return(
        <div className='Slideshow'>
            <ImageSlide 
            data={{
                name:'Foto1',
                source:'https://raw.githubusercontent.com/fathanaa/malomo/main/src/Asset/Image/Innovation_GA1.png'
            }}/>

            <ImageSlide 
            data={{
                name:'Foto1',
                source:'https://raw.githubusercontent.com/fathanaa/malomo/main/src/Asset/Image/Innovation_GA1.png'
            }}/>

            <ImageSlide 
            data={{
                name:'Foto1',
                source:'https://raw.githubusercontent.com/fathanaa/malomo/main/src/Asset/Image/Innovation_GA1.png'
            }}/>

           
        </div>
    )
}

export default Slideshow