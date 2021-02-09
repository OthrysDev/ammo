import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ReconnectionToast from 'components/ReconnectionToast';

export default {
    component: ReconnectionToast,
    title: 'Components/ReconnectionToast',
};

const ReconnectionToastTemplate: Story = () => <ReconnectionToast />;

export const Default = ReconnectionToastTemplate.bind({});
Default.storyName = 'ReconnectionToast';
