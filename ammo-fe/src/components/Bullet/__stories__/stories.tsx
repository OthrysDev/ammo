import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Bullet, { BulletProps } from 'components/Bullet';
import {
    bulletMock,
    xmlBulletMock,
    minimalBulletMock,
} from 'shared/mocks/Bullet.mock';

export default {
    component: Bullet,
    title: 'Components/Bullet',
};

const BulletTemplate: Story<BulletProps> = ({ bullet }) => (
    <Bullet bullet={bullet} />
);

export const Default = BulletTemplate.bind({});
Default.args = {
    bullet: bulletMock,
};

export const XML = BulletTemplate.bind({});
XML.storyName = 'Default with XML bodies';
XML.args = {
    bullet: xmlBulletMock,
};

export const Minimal = BulletTemplate.bind({});
Minimal.storyName = 'Minimal';
Minimal.args = {
    bullet: minimalBulletMock,
};

export const IPhone5 = BulletTemplate.bind({});
IPhone5.storyName = 'iPhone 5/SE - vertical';
IPhone5.args = {
    bullet: bulletMock,
};
IPhone5.parameters = {
    viewport: {
        defaultViewport: 'iPhone5Ver',
    },
};
