import React from 'react'
import { useTranslation,Trans } from 'react-i18next';
import './Section2.css'

import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import client from "../../../client";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/material';

export default function Section2() {
  const [places,setplaces] = useState(null);
  useEffect(() => {
    client
      .fetch(
  `
  *[_type == "place"] {
        id,
        slug,
        name,
        city,
        rooms,
        cutomers,
        bathrooms,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }  
  `)
  .then((data) => setplaces(data))
  .catch(console.error)
    
  },[]);
  
  const { t,i18n } = useTranslation();
  let len = {
      767: { slidesPerView: 2 },
      800: { slidesPerView: 2 },
      1200: { slidesPerView: 3 }
    };

  return (
    <div>
    <Box
              sx={{
                bgcolor: "background.default",
                color: "text.primary",
              }}
            >
      <section className='section2 sec'>
    
          <div className='container'>
            <div className='sec_title'>
              <h1>
                {t('العقارات حسب المنطقة')}
                
              </h1>
            </div>
            
            <Swiper
              // install Swiper modules
              modules={[ Pagination,  A11y]}
              spaceBetween={50}
              breakpoints={len}      
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {
                places && 
                places.map((place) => (
                  <SwiperSlide key={place.slug.current} >
                    
                      <div className='box'>
                          <img src={place.mainImage.asset.url} alt="" />
                          <div className='over'></div>
                        <div className='text'>
                          <h2>
                            {t(place.city)}
                            </h2>
                          <button className='btn'>
                            {t('مشروع')}  {place.slug.current} </button>
                        </div>
                      </div>
                  </SwiperSlide>
                ))
              } 
          </Swiper>
          </div>
        </section>
        </Box>
        
    </div>
  )
}
