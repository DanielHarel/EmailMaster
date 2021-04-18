import { createMuiTheme } from '@material-ui/core/styles';


const blue1 = "#bedcfa";
const blue2 = "#98acf8";
const purple1 = "#b088f9";
const purple2 = "#da9ff9";



export default createMuiTheme({
    palette: {
        primary: {
            main: purple1
        },
        secondary: {
            main: blue1
        },
        blue1: {
            main: blue1
        },
        blue2: {
            main: blue2
        },
        purple1: {
            main: purple1
        },
        purple2: {
            main: purple2
        },
    },
    typography: {
        h1: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: '3.5rem',
            lineHeight: '1.5'
        },
        h4: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: '2.5rem',
            lineHeight: '1.5'
        },
        h6: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: '1.5'
        }
    }
    
});