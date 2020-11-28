import { createMuiTheme } from '@material-ui/core/styles';

//* Need help customizing the colors ? ----> https://material-ui.com/customization/color/#color-tool

const theme = createMuiTheme({
    palette: {
        primary: {
            // Primary color - Dark tones
            light: '#640D14',
            main: '#38040E',
            dark: '#250902',
        },
        secondary: {
            // Secondary color - Lighter tones (mostly for fonts)
            light: '#FF7780',
            main: '#AD2831',
            dark: '#800E13',
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
                color: '#AD2831 !important',
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
