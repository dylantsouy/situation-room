import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { useTranslation } from '../../langs/useTranslation';
import { Button } from '@mui/material';

export default function Page404() {
    const { t } = useTranslation('common');
    const navigate = useNavigate();
    const goHome = () => {
        navigate(-1);
    };
    return (
        <>
            <div className='page404-wrapper'>
                <div className='title'>404</div>
                <div className='subtitle'>{t('text404')}</div>

                <Button variant='contained' onClick={() => goHome()}>
                    {t('takeMeBack')}
                </Button>
            </div>
        </>
    );
}
