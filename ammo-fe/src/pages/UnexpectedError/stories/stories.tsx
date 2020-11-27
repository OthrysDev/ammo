import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import UnexpectedError from 'pages/UnexpectedError';

export default {
    title: 'Pages/UnexpectedError',
    component: UnexpectedError,
};

const UnexpectedErrorTemplate: Story = () => <UnexpectedError />;

export const Default = UnexpectedErrorTemplate.bind({});
Default.storyName = 'UnexpectedError';
