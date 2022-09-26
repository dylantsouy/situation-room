import { Button, Modal } from '@mui/material';
import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useTranslation } from '../../langs/useTranslation';
import ConfirmButton from '../ConfirmButton/ConfirmButton';

export default function ConfirmModal(props) {
    const { t } = useTranslation('common');
    const { open, handleClose, handlerOk, loading, text } = props;

    const _handleClose = (_, reason) => {
        if (reason !== 'escapeKeyDown' && reason !== 'backdropClick') {
            handleClose();
        }
    };

    return (
        <Modal className='confirmModal-wrapper' open={open} onClose={_handleClose}>
            <div className='container'>
                <div className='content'>{text}</div>
                <div className='footer'>
                    <ConfirmButton variant='contained' onClick={handlerOk} loading={loading} text={t('confirm')} />
                    <Button disabled={loading} onClick={() => _handleClose()} role='cancelButton'>
                        {t('cancel')}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

ConfirmModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handlerOk: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};
