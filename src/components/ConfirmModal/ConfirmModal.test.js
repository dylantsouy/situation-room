import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ConfirmModal from './ConfirmModal';

function renderInit(props) {
    return render(<ConfirmModal {...props} />);
}

afterEach(cleanup);

describe('ConfirmModal', () => {
    it('test ConfirmModal show correctly', async () => {
        const props = {
            handlerOk: jest.fn(),
            handleClose: jest.fn(),
            open: true,
            loading: false,
            text: 'test',
        };
        renderInit(props);
        const el = screen.getByText('test');
        expect(el).toBeVisible();
    });

    it('test ConfirmModal close correctly', async () => {
        const props = {
            handlerOk: jest.fn(),
            handleClose: jest.fn(),
            open: false,
            loading: false,
            text: 'test',
        };
        renderInit(props);
        const el = document.querySelector('.confirmModal-wrapper');
        expect(el).toBeNull();
    });

    it('test ConfirmModal loading correctly', async () => {
        const props = {
            handlerOk: jest.fn(),
            handleClose: jest.fn(),
            open: true,
            loading: true,
            text: 'test',
        };
        renderInit(props);
        const el = document.querySelector('.loading');
        expect(el).toBeVisible();
    });

    it('test ConfirmModal func', async () => {
        const okFn = jest.fn();
        const closeFn = jest.fn();
        const props = {
            handlerOk: okFn,
            handleClose: closeFn,
            open: true,
            loading: false,
            text: 'test',
        };
        renderInit(props);

        // test confirm button
        const confirmBtn = screen.getByRole('confirmButton');
        fireEvent.click(confirmBtn);
        expect(okFn).toHaveBeenCalledTimes(1);

        // test cancel button
        const cancelBtn = screen.getByRole('cancelButton');
        fireEvent.click(cancelBtn);
        expect(closeFn).toHaveBeenCalledTimes(1);
    });
});
