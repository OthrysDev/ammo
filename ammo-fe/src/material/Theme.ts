import { createMuiTheme } from '@material-ui/core/styles';
import Palette from 'material/Palette';

//* Need help customizing the colors ? ----> https://material-ui.com/customization/color/#color-tool

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#fff',
        },
    },
    typography: {
        // Specify your fonts here, docs : https://material-ui.com/customization/typography/
        fontFamily: 'Arial',
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        subtitle1: {},
        subtitle2: {},
        body1: {},
        body2: {},
        button: {},
        caption: {},
        overline: {},
    },
    overrides: {
        MuiCircularProgress: {
            colorPrimary: {
                color: `${Palette.RED_LIGHT} !important`,
            },
        },
        MuiSnackbarContent: {
            root: {
                minWidth: '0 !important',
            },
        },
    },
});

// const darkTheme = createMuiTheme({
//     palette: {
//         type: 'dark',
//     }
// });

export default theme;
