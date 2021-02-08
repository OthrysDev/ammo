import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Script, { ScriptProps } from 'components/Script';
import { bulletMock, xmlBulletMock } from 'shared/mocks/Bullet.mock';

export default {
    component: Script,
    title: 'Components/Script',
};

const ScriptTemplate: Story<ScriptProps> = ({ index, bullet }: ScriptProps) => (
    <Script index={index} bullet={bullet} />
);

export const Default = ScriptTemplate.bind({});
Default.storyName = 'Script';
Default.args = {
    index: 0,
    bullet: bulletMock,
};

export const XML = ScriptTemplate.bind({});
XML.storyName = 'Script with XML body';
XML.args = {
    index: 1,
    bullet: xmlBulletMock,
};
