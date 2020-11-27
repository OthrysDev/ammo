import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Bullet, { BulletProps } from 'components/Bullet';
import { generateMockBullet } from 'components/Bullet/__stories__/mocks/IBullet.mock';

export default {
    component: Bullet,
    title: 'Components/Bullet',
};

const BulletTemplate: Story<BulletProps> = ({ bullet }) => (
    <Bullet bullet={bullet} />
);

export const Default = BulletTemplate.bind({});
Default.storyName = 'Bullet';
Default.args = {
    bullet: generateMockBullet(),
};
