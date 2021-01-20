import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Script, { ScriptProps } from 'components/Script';
import { bulletMock } from 'shared/mocks/Bullet.mock';

export default {
    component: Script,
    title: 'Components/Script',
};

const ScriptTemplate: Story<ScriptProps> = ({
    bullet,
    previousScriptLength,
}: ScriptProps) => (
    <Script bullet={bullet} previousScriptLength={previousScriptLength} />
);

export const Default = ScriptTemplate.bind({});
Default.storyName = 'Script';
Default.args = {
    bullet: bulletMock,
    previousScriptLength: 0,
};
