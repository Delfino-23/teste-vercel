import React from 'react'
import './banner_styles.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules';
import img1 from '../../images/PastorAzul3.png'
import img2 from '../../images/pastor-verde.png'
import img3 from '../../images/PastorLaranja4.png'
import img4 from '../../images/pastor-youtube2.png'
import img5 from '../../images/caixa3.png'
import img6 from '../../images/pix3.png'

const Banner = () => {
  return (
    <div className='carrossel'>
      <Swiper
        modules={EffectFade}
        effect="fade"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay
        speed={3000}
      >
          <SwiperSlide>
            <img 
              src={img1}
              alt='Slider'
              className='slide-item img1'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src={img2}
              alt='Slider'
              className='slide-item img2'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src={img3}
              alt='Slider'
              className='slide-item img3'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src={img4}
              alt='Slider'
              className='slide-item img3'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src={img5}
              alt='Slider'
              className='slide-item img3'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src={img6}
              alt='Slider'
              className='slide-item img3'
            />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner;