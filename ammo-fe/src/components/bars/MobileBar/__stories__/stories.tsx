import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import MobileBar from 'components/bars/MobileBar';

export default {
    component: MobileBar,
    title: 'Components/bars/MobileBar',
};

const MobileBarTemplate: Story = () => <MobileBar />;

export const Default = MobileBarTemplate.bind({});
Default.storyName = 'MobileBar';
Default.parameters = {
    viewport: {
        defaultViewport: 'iPhone5Ver',
    },
};
