import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Layout from 'components/Layout';

export default {
    component: Layout,
    title: 'Components/Layout',
};

const LayoutTemplate: Story = () => <Layout />;

export const Default = LayoutTemplate.bind({});

export const IPhone5 = LayoutTemplate.bind({});
IPhone5.storyName = 'iPhone 5/SE - vertical';
IPhone5.parameters = {
    viewport: {
        defaultViewport: 'iPhone5Ver',
    },
};
