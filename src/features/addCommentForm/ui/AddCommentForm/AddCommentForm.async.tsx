import { lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // В реальных проектах так не делать!
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
