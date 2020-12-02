import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import RecorderButton from 'components/RecorderButton';

export default {
    component: RecorderButton,
    title: 'Components/RecorderButton',
};

const RecorderButtonTemplate: Story = () => <RecorderButton />;

export const Default = RecorderButtonTemplate.bind({});
Default.storyName = 'RecorderButton';
