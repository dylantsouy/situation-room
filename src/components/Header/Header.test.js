import React from 'react';
import Header from './Header';
import ReactDOM from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

function renderInit(props) {
    ReactDOM.createRoot(container).render(
        <MemoryRouter initialEntries={[props.path]}>
            <Header {...props} />
        </MemoryRouter>
    );
}

let container;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    document.body.removeChild(container);
    container = null;
});

describe('Header', () => {
    it('test login page show correctly', async () => {
        act(() => {
            renderInit({ login: true, path: '/login' });
        });

        expect(container.querySelector('.langSelect-wrapper')).toBeVisible();
        expect(container.querySelector('[role="logoutButton"]')).toBeNull();
    });

    it('test main page show correctly', async () => {
        act(() => {
            renderInit({ login: false, path: '/' });
        });

        expect(container.querySelector('.page').textContent).toBe('首頁');
        expect(container.querySelector('.langSelect-wrapper')).toBeVisible();
        expect(container.querySelector('[role="logoutButton"]').textContent).toBe('登出');
    });

    it('test user page show correctly', async () => {
        act(() => {
            renderInit({ login: false, path: '/user' });
        });

        expect(container.querySelector('.page').textContent).toBe('使用者');
    });

    it('test user page show correctly', async () => {
        act(() => {
            renderInit({ login: false, path: '/location' });
        });

        expect(container.querySelector('.page').textContent).toBe('場域');
    });

    it('test user page show correctly', async () => {
        act(() => {
            renderInit({ login: false, path: '/files' });
        });

        expect(container.querySelector('.page').textContent).toBe('檔案清單');
    });

    it('toMatchSnapshot', () => {
        const tree = renderer
            .create(
                <MemoryRouter initialEntries={['/']}>
                    <Header login={false} />
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
