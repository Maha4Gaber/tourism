import React from 'react'
import './Section1.css'
import { useTranslation,Trans } from 'react-i18next';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Section1() {


  const { t,i18n } = useTranslation();
  const navigate = useNavigate();
  let c = 0;
  let value1 = '';

  return (
    <div>
      <section className='home'>
        <div className='overlay'></div>
        <div className='content'>
          <h1>
            {t('ابحث عن بيتك الجديد')}
          </h1>
          <form className='' onSubmit={(e) => {
            e.preventDefault();
          }}>
            <div className=' m-auto '>
              
              <Link className='btn'  to={'/search'} >
                <span className='span1'>
                  <span className='span2'></span>
                </span>
                <span className='span-text '>
                  
                    {t('ابحث')}
                </span>
              </Link>
            </div>
            
          </form>
        </div>
      </section>
    </div>
  )
}
