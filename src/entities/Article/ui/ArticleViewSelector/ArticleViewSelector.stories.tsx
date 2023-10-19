import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleView } from 'entities/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const NotSelected = Template.bind({});
NotSelected.args = {};

export const SelectedTile = Template.bind({});
SelectedTile.args = {
    view: ArticleView.TILE,
};

export const SelectedList = Template.bind({});
SelectedList.args = {
    view: ArticleView.LIST,
};
