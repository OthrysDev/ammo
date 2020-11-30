import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Home from 'pages/Home';

export default {
    title: 'Pages/Home',
    component: Home,
};

const HomeTemplate: Story = () => <Home />;

export const Default = HomeTemplate.bind({});
Default.storyName = 'Home';
