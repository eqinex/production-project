import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: 2,
        text: 'Hello Dante, i am a Vergil',
        user: {
            id: 2,
            username: 'Vitalik',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: 2,
        text: 'Hello Dante, i am a Vergil',
        user: {
            id: 2,
            username: 'Vitalik',
        },
    },
    isLoading: true,
};
