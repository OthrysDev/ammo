import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Script, { ScriptProps } from 'components/Script';

export default {
    component: Script,
    title: 'Components/Script',
};

const ScriptTemplate: Story<ScriptProps> = () => <Script />;

export const Default = ScriptTemplate.bind({});
Default.storyName = 'Script';
// Default.args = {
//     previousScriptLength: 0,
// };
