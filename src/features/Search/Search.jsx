import React from 'react'
import { useTranslation } from 'react-i18next';

import { useState,useEffect } from 'react';
import client from "../../client";
import { useDispatch } from 'react-redux';
import { addToFav } from '../../slices/FavSlice';
import {  useSearchParams } from 'react-router-dom';
import './Search.css'
import { Box } from '@mui/system';
export default function Search() {
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
  let value1 = '';
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleGoHome = () => {
    console.log(places.length);
  };
  function addtoFav(place) {
    dispatch(addToFav(place))
  }
  const [searchParam,setSearchparam] = useSearchParams();
  const filter = searchParam.get('filter');
  function setFilter(filter)
  {
    if(filter==='')
    setSearchparam({filter:''})
    else
    setSearchparam({filter})
      
  }
  return (
        <div>
      <div >
        <Box className='search'
          sx={{
            bgcolor: "background.default",
              color: "text.primary",
          }}
        >
          <div className='container'>
          <div className='form'>
            <form className='' onSubmit={(e) => {
            e.preventDefault();
              handleGoHome()
          }}>
              <div className='searchbox flex justify-between overflow-hidden text'>
                <input type="text"
                  placeholder='ابحث عن المنطقة'
                  onChange={(e) => {
                    value1 = e.target.value
                    setFilter(value1)
                  }}
                  className='block w-full flex-1 '
                />
                <button className='btn' >
                  <span className='span1'><span className='span2'></span> </span>
                  <span className='span-text '>{t('ابحث')}</span>
                </button>
              </div>
            </form>
            </div>
          <div className='row'>
              <p>
                  {t('نتيجة البحث ')} : {value1===''?'all':value1}
              </p>
              
            </div>
          <div className='row'>
            {
        places &&
        places.filter(p=> !filter || p.name.includes(filter)).map((place) => (
          <div className='col-lg-4 col-md-6 col-sm-12' 
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
          </div>
        ))
      }
          </div>
        </div>
        </Box>
      </div>
    </div>
  )
}
