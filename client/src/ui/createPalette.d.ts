import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {    
        blue1?: PaletteColorOptions;
        blue2?: PaletteColorOptions;
        purple1?: PaletteColorOptions;
        purple2?: PaletteColorOptions;
    }
}