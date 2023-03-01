import { Box } from '@mui/material';
import React from 'react'
import { useTranslation,Trans } from 'react-i18next';

import './Section4.css'
export default function Section4() {
  
  const { t,i18n } = useTranslation();
  return (
    <div>
      <Box
              sx={{
                bgcolor: "background.default",
                color: "text.primary",
              }}
            >
      <section className='section4 sec'>
        <div className='container'>
          <div className='sec_title'>
            <h1> {t('هل أنت مستعد أن تنمو مع الأفضل في السوق العقاري؟')}</h1>
          </div>
          <div className='box'>
            <p>{t('دعونا نتحدث عن مستقبلك')} </p>
            <h5>
              {t('اكتشف ما يمكن أن تقدمه لك العلامة التجارية العقارية الرائدة في العالم')} </h5>
            <button className='btn'>
              <span className='span1'><span className='span2'></span> </span>
              <span className='span-text '> {t('اتصل بنا')} </span>
            </button>
          </div>
        </div>
        </section>
      </Box>
    </div>
  )
}
