import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // В реальных проектах так не делать!
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
