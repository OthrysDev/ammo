import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Home from 'pages/Home';

export default {
    title: 'Pages/Home',
    component: Home,
};

const HomeTemplate: Story = () => <Home />;

export const Default = HomeTemplate.bind({});

export const IPhone5 = HomeTemplate.bind({});
IPhone5.storyName = 'iPhone 5/SE - vertical';
IPhone5.parameters = {
    viewport: {
        defaultViewport: 'iPhone5Ver',
    },
};
