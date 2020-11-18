import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Bullet, { BulletProps } from 'components/Bullet';
import { generateMockBullet } from 'components/MainPannel/__stories__/mocks/IBullet.mock';

export default {
    component: Bullet,
    title: 'Bullet',
};

const BulletTemplate: Story<BulletProps> = ({ bullet }) => {
    return <Bullet bullet={bullet} />;
};

export const Default = BulletTemplate.bind({});
Default.args = {
    bullet: generateMockBullet(),
};