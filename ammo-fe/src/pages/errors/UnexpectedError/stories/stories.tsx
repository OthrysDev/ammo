import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import UnexpectedError from 'pages/errors/UnexpectedError';

export default {
    title: 'Pages/errors/UnexpectedError',
    component: UnexpectedError,
};

const UnexpectedErrorTemplate: Story = () => <UnexpectedError />;

export const Default = UnexpectedErrorTemplate.bind({});
Default.storyName = 'UnexpectedError';
