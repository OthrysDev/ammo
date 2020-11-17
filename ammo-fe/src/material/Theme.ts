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
    },
    overrides: {
        //* Example of Input customisation
        // MuiOutlinedInput: {
        //     input: {
        //         padding: '7px 14px',
        //     },
        // },
        // MuiInputLabel: {
        //     outlined:{
        //         transform: 'translate(14px, 10px) scale(1)'
        //     }
        // }
    },
});

// const darkTheme = createMuiTheme({
//     palette: {
//         type: 'dark',
//     }
// });

export default theme;
