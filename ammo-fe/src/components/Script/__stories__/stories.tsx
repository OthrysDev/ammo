import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Script, { ScriptProps } from 'components/Script';
import { bulletMock, xmlBulletMock } from 'shared/mocks/Bullet.mock';

export default {
    component: Script,
    title: 'Components/Script',
};

const ScriptTemplate: Story<ScriptProps> = ({
    index,
    bullet,
    previousScriptLength,
}: ScriptProps) => (
    <Script
        index={index}
        bullet={bullet}
        previousScriptLength={previousScriptLength}
    />
);

export const Default = ScriptTemplate.bind({});
Default.storyName = 'Script';
Default.args = {
    index: 0,
    bullet: bulletMock,
    previousScriptLength: 0,
};

export const XML = ScriptTemplate.bind({});
XML.storyName = 'Script with XML body';
XML.args = {
    index: 1,
    bullet: xmlBulletMock,
    previousScriptLength: 0,
};
