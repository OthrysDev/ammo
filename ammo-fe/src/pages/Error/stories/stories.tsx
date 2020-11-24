import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Error, { ErrorProps } from 'pages/Error';

export default {
    title: 'Pages/Error',
    component: Error,
};

const ErrorTemplate: Story<ErrorProps> = ({
    title,
    content,
    button,
}: ErrorProps) => {
    return <Error title={title} content={content} button={button} />;
};

export const Default = ErrorTemplate.bind({});
Default.args = {
    title: 'Default title',
    content: 'Default content',
    button: 'Default button',
};
