
import React, { useState,useEffect } from 'react'
import './Section1.css'

import Section2 from '../Sections/Section2/Section2';
import Section3 from '../Sections/Section3/Section3';
import Section4 from '../Sections/Section4/Section4';
import { useTranslation,Trans } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Search from '../Search/Search';
import client from '../../client';
import { useDispatch } from 'react-redux';
import { addToFav } from '../../slices/FavSlice';
import Section1 from '../Sections/Section1/Section1';

export default function Home() {
  // const { t,i18n } = useTranslation();
  
  //   const [places,setplaces] =useState(null);
  //   useEffect(() => {
  //   client
  //     .fetch(
  // `
  // *[_type == "place"] {
  //       id,
  //       slug,
  //       name,
  //       city,
  //       rooms,
  //       cutomers,
  //       bathrooms,
  //       mainImage{
  //         asset->{
  //           _id,
  //           url
  //         }
  //       }
  //     }  
  // `)
  // .then((data) => setplaces(data))
  // .catch(console.error)
    
  // },[]);


  // let value1 = '';
  // let search = true;


  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />      
    </div>
    
  )
}

  //  <div>
  //     <section className='home'>
  //       <div className='overlay'></div>
  //       <div className='content'>
  //         <h1>
  //           {t('ابحث عن بيتك الجديد')}
  //         </h1>
  //         <form className='' onSubmit={(e) => {
  //           e.preventDefault();
  //             setFilter(value1);
  //             search = !search;
  //             console.log(search);
  //         }}>
  //           <div className='bg-white flex justify-between overflow-hidden text'>
  //             <input type="text"
  //               placeholder='ابحث عن المنطقة'
  //               className='block w-full flex-1 '
  //               onChange={(e)=> value1=e.target.value}
  //             />
  //             <button className='btn' >
  //               <span className='span1'>
  //                 <span className='span2'></span>
  //               </span>
  //               <span className='span-text '>
                  
  //                   {t('ابحث')}
  //               </span>
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //       </section>
        
  //   </div>


          //   <div className='row'>
          //   {
          //     places &&
          //     places.filter(p => !filter || p.name.includes(filter)).map((place) => (
          //       <div className='col-lg-4 col-md-6 col-sm-12'
          //         key={place.slug.current}
          //       >
          //         <div className='box'>
          //           <div className='img'>
          //             <img src={place.mainImage.asset.url} alt="" />
          //             <div className='place'>
          //               <span>: {t(place.city)} </span>
          //               <span>:{place.cutomers}</span>
          //             </div>
          //           </div>
                  
          //           <div className='text'>
          //             <a href="#!">
          //               <div><h2>{place.name} </h2></div>
          //             </a>
          //           </div>
          //           <div className='details'>
          //             <div className='text'> {t('عدد الغرف')} : {[place.rooms]}  || {t('الحمامات')} : {[place.bathrooms]}
          //             </div>
          //             <button className='btn' onClick={() => {
          //               addtoFav(place)
                  
          //             }}>
          //               <span className='span1'><span className='span2'></span> </span>
          //               <span className='span-text '> {t('حفظ الاعلان')}</span>
          //             </button>
          //           </div>
          //         </div>
          //       </div>
          //     ))
          //   }
          // </div>