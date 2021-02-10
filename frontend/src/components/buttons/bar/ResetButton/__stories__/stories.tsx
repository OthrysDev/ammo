import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ResetButton from 'components/buttons/bar/ResetButton';

export default {
    component: ResetButton,
    title: 'Components/buttons/bar/ResetButton',
};

const ResetButtonTemplate: Story = () => <ResetButton />;

export const Default = ResetButtonTemplate.bind({});
Default.storyName = 'ResetButton';
