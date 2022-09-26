import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Loading from './Loading';
import renderer from 'react-test-renderer';

function renderInit(color, size) {
    return render(<Loading color={color || 'primary'} size={size} />);
}

afterEach(cleanup);

describe('Loading', () => {
    it('test loading show correctly', async () => {
        renderInit();
        const el = document.querySelector('.loading');
        expect(el).toBeVisible();
    });

    it('toMatchSnapshot', () => {
        const tree = renderer.create(<Loading />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
