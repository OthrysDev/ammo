import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import MainPannel from 'components/MainPannel';

export default {
    component: MainPannel,
    title: 'Components/MainPannel',
};

const MainPannelTemplate: Story = () => <MainPannel />;

export const Default = MainPannelTemplate.bind({});
Default.storyName = 'MainPannel';
