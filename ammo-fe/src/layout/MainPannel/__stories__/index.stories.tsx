import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import MainPannel, { MainPannelProps } from 'layout/MainPannel';
import {
    generateMockBullet,
    generateMockBullets,
} from 'layout/MainPannel/__stories__/mocks/IBullet.mock';

export default {
    component: MainPannel,
    title: 'MainPannel',
};

const MainPannelTemplate: Story<MainPannelProps> = ({ bullets }) => {
    return <MainPannel bullets={bullets} />;
};

export const Empty = MainPannelTemplate.bind({});
Empty.args = {};

export const Default = MainPannelTemplate.bind({});
Default.args = {
    bullets: [generateMockBullet(0)],
};

export const Rich = MainPannelTemplate.bind({});
Rich.args = {
    bullets: generateMockBullets(10),
};
