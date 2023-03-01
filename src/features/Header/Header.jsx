import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useTranslation,Trans } from 'react-i18next';
import Theme from '../Theme/Theme';
import { Box } from '@mui/system';


const lngs = {
  en: { nativeName: 'En' },
  ar: { nativeName: 'Ar' }
};

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Box  sx={{
          bgcolor: "background.paper",
          color: "text.primary",
      }}
      >
        <header className='d-flex'   >
        <nav className='d-flex  '>
          <Link to={'/'}>
            <div className='d-flex pl-8 cursor-pointer icon '>
              <div className='imag'></div>
              <h1  className='text-2xl'>{t('حجوزاتي عقارات')}</h1>              
            </div>
          </Link>
          <div className='links hidden flex-1 items-center justify-center space-x-8 md:flex'>
            <Link to={'/fav'} className='pl-8 link'> {t('المفضلة')}</Link>
            
          </div>     
          
        </nav>
        <div className='lang'>
            {Object.keys(lngs).map((lng) => (
              <button key={lng}
                style={
                  {
                    fontWeight: i18n.resolvedLanguage === lng
                      ? 'bold' : 'normal'
                  }
                }
                type="submit"
                className='btn'
                onClick={() => {
                  i18n.changeLanguage(lng);
                  if(lng==="en")
                  {
                    // document.getElementById('body').classList.add('left');
                  }
                  else
                  {
                    // document.getElementById('body').classList.remove('left');
                    }
                }}>
                {lngs[lng].nativeName}
              </button>
            ))}
          
        </div>
        <Theme />
          <br />
      </header>
      </Box>
    </div>
  )
}




