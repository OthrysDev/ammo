import { createMuiTheme } from '@material-ui/core/styles';

//* Need help customizing the colors ? ----> https://material-ui.com/customization/color/#color-tool

const theme = createMuiTheme({
    palette: {
        primary: {
            // Primary color
            light: '#FFFFFF',
            main: '#FFFFFF',
            dark: '#FFFFFF',
        },
        secondary: {
            // Secondary color
            light: '#FFFFFF',
            main: '#FFFFFF',
            dark: '#FFFFFF',
        },
    },
    typography: {
        // Specify your fonts here, docs : https://material-ui.com/customization/typography/
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
