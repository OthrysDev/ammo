import React from 'react';
import initStoryshots, {
    multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import { StylesProvider } from '@material-ui/styles';
import { addDecorator } from '@storybook/react';

// To maintain consistency in material generated class names : https://github.com/mui-org/material-ui/issues/9492
const generateClassName = (rule, styleSheet) =>
    `${styleSheet.options.classNamePrefix}-${rule.key}`;
addDecorator((storyFn) => (
    <StylesProvider generateClassName={generateClassName}>
        {storyFn()}
    </StylesProvider>
));

// To make material Fade / Grow animations work
jest.mock('@material-ui/core/Fade', () => 'Fade');
jest.mock('@material-ui/core/Grow', () => 'Grow');

initStoryshots({
    test: multiSnapshotWithOptions({}),
});
