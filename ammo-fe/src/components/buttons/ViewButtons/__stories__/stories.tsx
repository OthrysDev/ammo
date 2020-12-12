import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import {
    BulletsViewButton,
    ScriptsViewButton,
} from 'components/buttons/ViewButtons';

export default {
    component: BulletsViewButton,
    title: 'Components/buttons/ViewButtons',
};

const BulletsViewButtonTemplate: Story = () => (
    <BulletsViewButton onClick={action('onClick')} />
);
export const BulletsViewBtn = BulletsViewButtonTemplate.bind({});
BulletsViewBtn.storyName = 'BulletsViewButton';

const ScriptsViewButtonTemplate: Story = () => (
    <ScriptsViewButton onClick={action('onClick')} />
);
export const ScriptsViewBtn = ScriptsViewButtonTemplate.bind({});
ScriptsViewBtn.storyName = 'ScriptsViewButton';
