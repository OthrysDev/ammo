import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import NotFound from 'pages/NotFound';

export default {
    title: 'Pages/NotFound',
    component: NotFound,
};

const NotFoundTemplate: Story = () => {
    return <NotFound />;
};

export const Default = NotFoundTemplate.bind({});
