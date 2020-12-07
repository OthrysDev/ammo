import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Bar from 'components/bars/Bar';

export default {
    component: Bar,
    title: 'Components/bars/Bar',
};

const BarTemplate: Story = () => <Bar />;

export const Default = BarTemplate.bind({});
Default.storyName = 'Bar';
