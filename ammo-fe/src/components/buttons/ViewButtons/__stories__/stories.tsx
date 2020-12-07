import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import {
    BulletsViewButton,
    ScriptsViewButton,
} from 'components/buttons/ViewButtons';

export default {
    component: BulletsViewButton,
    title: 'Components/buttons/ViewButtons',
};

const BulletsViewButtonTemplate: Story = () => <BulletsViewButton />;
export const BulletsViewBtn = BulletsViewButtonTemplate.bind({});
BulletsViewBtn.storyName = 'BulletsViewButton';

const ScriptsViewButtonTemplate: Story = () => <ScriptsViewButton />;
export const ScriptsViewBtn = ScriptsViewButtonTemplate.bind({});
ScriptsViewBtn.storyName = 'ScriptsViewButton';
