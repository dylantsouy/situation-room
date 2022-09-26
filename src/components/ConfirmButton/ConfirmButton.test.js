import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ConfirmButton from './ConfirmButton';

function renderInit(props) {
    return render(<ConfirmButton {...props} />);
}

afterEach(cleanup);

describe('ConfirmButton', () => {
    it('test ConfirmButton show correctly', async () => {
        renderInit({ text: 'test' });
        const el = screen.getByText('test');
        expect(el).toBeVisible();
    });

    it('test ConfirmButton loading correctly', async () => {
        renderInit({ text: 'test', loading: true });
        const el = document.querySelector('.loading');
        expect(el).toBeVisible();
    });

    it('test ConfirmButton func', async () => {
        const testFn = jest.fn();
        const props = {
            onClick: testFn,
            text: 'test',
        };

        renderInit(props);
        const el = screen.getByRole('confirmButton');
        fireEvent.click(el);
        fireEvent.click(el);
        expect(testFn).toHaveBeenCalledTimes(2);
    });

    it('toMatchSnapshot', () => {
        const tree = renderer
            .create(<ConfirmButton variant='outlined' text='test' color='secondary' type='submit' />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
