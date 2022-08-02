import React from 'react'
import './carouselStyles.css'
import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const CarouselImg = () => {

    return (

        <Carousel>
            <div>
                <img src={BoraBora} alt='/' />
               
            </div>
            <div>
                <img src={BoraBora2} alt='/' />
             
            </div>
            <div>
                <img src={Maldives} alt='/' />
               
            </div>
        </Carousel>

    )
}

export default CarouselImg