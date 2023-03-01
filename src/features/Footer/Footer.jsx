import React from 'react'
import './Footer.css'
import { useTranslation,Trans } from 'react-i18next';
import { Box } from '@mui/system';

export default function Footer() {
  const { t,i18n } = useTranslation();

  return (
    <div>
      <div className='footer'>
        <Box
        sx={{
        bgcolor: "background.red",
          color: "text.primary",
      }}
        >
          <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div classNam='content'>
              <h2>{t('عن الشركة')} </h2>
              <p>
                {t('نفخر بتقديم خدماتنا الاستشارية والبيعية في مجال الاستثمار والتطوير العقاري لأكثر من 30.000 عميل في مصر خلال السنوات الست الماضية، وذلك منذ انطلاقنا في عام 2333.')}
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div classNam='content'>
              <h2> {t('تواصل معنا')} </h2>
              <ul>
                <li>
                  <a href="">
                    {t('مركز قريش التجارى , شارع قريش , السعودية')}  
                  </a>
                </li>
                <li>
                  <a href="">
                    #3456
                  </a>
                </li>
                <li>
                  <a href="">
                    #.COM
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-4'>
            <div classNam='content'>
              <h2>{t('روابط مهمة')}  </h2>
              <ul>
              <li>
                  <a href="">
                      {t('حجوزات ترافل')}
                    </a>
                </li>
                <li>
                  <a href="">
                    {t('مشروعات تجارية')}
                  </a>
                </li>
                <li>
                  <a href="">
                    {t('مشروعات ساحلية')}
                  </a>
                </li>
                <li>
                  <a href="">
                    {t('تواصل معنا')}                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </Box>
      </div>
    </div>
  )
}

