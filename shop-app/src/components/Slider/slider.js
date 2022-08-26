import styled from 'styled-components';
import { useState } from 'react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

const SliderContainer = styled.div`
    display: flex;
    width 100%;
    justify-content: center;
    align-items: center;

    @keyframes fade {
        0% {
          opacity: 0;
        }
      
        100% {
          opacity: 1;
        }
    }

    .slide1, .slide2, .slide3 { 
        display: none;
        max-width: 100%;  
        max-height: 100%;
        justify-content: center;
    
        img {
             object-fit: cover;
             margin: 0 auto;   
             max-width: 100%;  
             height: 300px;  
        }
    }

    .bannerText {
        position: absolute;
        width: 70%;
        max-width: 800px;

        h1{
            position: relative;
            margin-top: 50px;
            font-size: 40px;
        }

        div {
            position: relative;
            margin-top: 50px;
            font-size: 16px;
            max-height: 90px;
            overflow:hidden;
        }
    }

    .fade {
        animation: fade 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }

    .active {
        display: flex;
    }

    .prev, .next {
        color: white;
        background: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 3px;
        width: 40px;
        height: 60px;
        font-size: 30px;
        cursor: pointer;
        z-index: 1;
    }

    .prev {
        position: absolute;
        left: 20px;
    }

    .next {
        position: absolute;
        right: 20px;
    }
`

const Slider  = () => {
    const   [activeSlide, setActiveSlide] = useState(0);
    const slides = [banner1, banner2, banner3];

    const nextSlide = () => {
        if (activeSlide < slides.length-1) {
        setActiveSlide(activeSlide + 1);
        } else {
            setActiveSlide(0);
        }
    }
    
    const prevSlide = () => {
        if (activeSlide > 0) {
            setActiveSlide(activeSlide - 1);
            } else {
                setActiveSlide(slides.length-1);
            }
    }
 
    return (
        <SliderContainer>
            <button onClick={prevSlide} className='prev'>&#10094;</button>
            <div className={activeSlide === 0 ? 'slide1 fade active' : 'slide1 fade'}>
                <img src={banner1} alt=''></img>
                <div className='bannerText'>
                <h1>eShopp</h1>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                </div>
            </div>
            <div className={activeSlide === 1 ? 'slide2 fade active' : 'slide2 fade'}>
                <img src={banner2} alt=''></img>
            </div>
            <div className={activeSlide === 2 ? 'slide3 fade active' : 'slide3 fade'}>
                <img src={banner3} alt=''></img>
            </div>
            <button onClick={nextSlide} className='next'>&#10095;</button>
        </SliderContainer>
    )
}

export default Slider