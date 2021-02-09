import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Error, { ErrorProps } from 'pages/errors/Error';

export default {
    title: 'Pages/errors/Error',
    component: Error,
};

const ErrorTemplate: Story<ErrorProps> = ({
    title,
    content,
    button,
    onReset,
}: ErrorProps) => (
    <Error title={title} content={content} button={button} onReset={onReset} />
);

export const Default = ErrorTemplate.bind({});
Default.storyName = 'Error';
Default.args = {
    title: 'Default.Title',
    content: 'Default.Content',
    button: 'Default.Button',
    onReset: (): null => null,
};
