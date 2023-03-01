
import React from 'react'
import { Navigation, Pagination, EffectFade , A11y } from 'swiper';
import './Section3.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { useState,useEffect } from 'react';
import client from "../../../client";
import { useTranslation,Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addToFav } from '../../../slices/FavSlice';
import { Box } from '@mui/system';


export default function Section3() {
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
  
  const dispatch = useDispatch();
  function addtoFav(place) {
    dispatch(addToFav(place))
  }


  return (
    <div>
      
      <section className=''>
        <Box className="section3 sec"
      sx={{
        bgcolor: "background.paper",
          color: "text.primary",
      }}
    >
        <div className='container'>
          <div className='sec_title'>
            <h1>
              {t('العقارات المميزة')}
            </h1>
          </div>
    <Swiper 
      // install Swiper modules
      modules={[ Pagination,  A11y, ]}
      spaceBetween={50}
      breakpoints={len}    
      pagination={{ clickable: true }}
    >
      {
        places &&
        places.map((place) => (
          <SwiperSlide 
          key={place.slug.current}
          >
            <div className='box'>
                  <div className='img'>
                    <img src={place.mainImage.asset.url}  alt="" />
                    <div className='place'>
                      <span>: {t(place.city)} </span>
                      <span>:{place.cutomers}</span>
                    </div>
                  </div>
                  
                    <div className='text'>
                    <a href="#!">
                      <div><h2>{place.name} </h2></div>
                    </a>
                    </div>
                  <div className='details'>
                    <div className='text'> {t('عدد الغرف')} : {[place.rooms]}  || {t('الحمامات')} : {[place.bathrooms]}  
                    </div>
                <button className='btn' onClick={() => {
                  addtoFav(place)
                  
                    }}>
                      <span className='span1'><span className='span2'></span> </span>
                      <span className='span-text '> {t('حفظ الاعلان')}</span>
                    </button>
                  </div>
                </div>
          </SwiperSlide>
        ))
      }
    
      
        </Swiper>
          </div>
          </Box>
    </section>
  </div>
  );
};
