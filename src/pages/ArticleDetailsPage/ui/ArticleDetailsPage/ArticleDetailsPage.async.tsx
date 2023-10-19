import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // В реальных проектах так не делать!
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));
