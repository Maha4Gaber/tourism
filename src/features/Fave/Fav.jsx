import React from 'react'
import './Fav.css';

import { useTranslation,Trans } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFav } from '../../slices/FavSlice';


export default function Fav() {
  const Fav_places = useSelector(state => state.fav.places);
  const dispatch = useDispatch();

  const { t,i18n } = useTranslation();
  return (
    <div className='fave'>
      <div className='container'>
        {
          Fav_places &&
          Fav_places.map((place) => (
            <div key={place.slug.current} className='box'>
              
              <div className='img'>
              <img src={place.mainImage.asset.url}  alt="" />
              </div>
              <div className='details'>
                <div><h2>{place.name} </h2></div>
                <div className='place'>
                  <span> : {t(place.city)} </span>
                  <span> : {place.cutomers}</span>
                </div>
                <div className='detail'>
                  <div className='text'> 
                    <span>{t('عدد الغرف')} :  {[place.rooms]}
                    </span>
                      <span>{t('الحمامات')}   :    {[place.bathrooms]}
                    </span>
                    </div>
                      
                </div>
                <div className='butn'>
                <button className='btn'
                        onClick={() => {
                          dispatch(removeFromFav(place));
                      }}
                      >
                    <span className='span1'><span className='span2'></span> </span>
                      <span className='span-text '>{t('حذف')} </span>                        
                      </button>
                </div>
              </div>             
            </div>
          ))
    }
      </div>
    </div>
  );
};
