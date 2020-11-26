import React from 'react';
import initStoryshots, {
    multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import { StylesProvider } from '@material-ui/styles';
import { addDecorator } from '@storybook/react';
import ReactDOM from 'react-dom';

//* Might be deprecated at some point when official packaged is released : https://github.com/enzymejs/enzyme/issues/2429
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//* We need to use enzyme for storybook to handle properly React Portals feature
import { mount, configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
configure({ adapter: new Adapter() });

// To maintain consistency in material generated class names : https://github.com/mui-org/material-ui/issues/9492
const generateClassName = (rule, styleSheet) =>
    `${styleSheet.options.classNamePrefix}-${rule.key}`;

addDecorator((storyFn) => (
    <StylesProvider generateClassName={generateClassName}>
        {storyFn()}
    </StylesProvider>
));

//* Need serializer AND the renderer, see documentation at 'renderer' : https://www.npmjs.com/package/@storybook/addon-storyshots
initStoryshots({
    snapshotSerializers: [createSerializer()],
    test: multiSnapshotWithOptions({
        renderer: mount,
    }),
});
