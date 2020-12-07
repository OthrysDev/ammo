import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Bullet, { BulletProps } from 'components/Bullet';
import { bulletMock, minimalBulletMock } from 'shared/mocks/Bullet.mock';

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
    bullet: bulletMock,
};

export const Minimal = BulletTemplate.bind({});
Minimal.storyName = 'Minimal';
Minimal.args = {
    bullet: minimalBulletMock,
};
