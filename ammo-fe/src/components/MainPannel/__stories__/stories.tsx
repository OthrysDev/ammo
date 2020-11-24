import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import MainPannel, { MainPannelProps } from 'components/MainPannel';
import {
    generateMockBullet,
    generateMockBullets,
} from 'components/Bullet/__stories__/mocks/IBullet.mock';

export default {
    component: MainPannel,
    title: 'Components/MainPannel',
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
