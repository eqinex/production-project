import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // В реальных проектах так не делать!
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
