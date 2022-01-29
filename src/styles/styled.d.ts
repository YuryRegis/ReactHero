import 'styled-components'


declare module 'styled-components' {
    
    interface Spacing {
        s: number;
        m: number;
        l: number;
        ml: number;
        xl: number;
    }

    interface Metrics {
        body: number;
        title: number;
        counter: number;
    }

    export interface DefaultTheme {
    title: string;
    spacing: Spacing;
    colors: {
            textAlternative: string;
            background: string;
            white: string;
            text: string;
        };
    font: {
            bold: string;
            light: string;
            regular: string;
        };
    metrics: Metrics;
    }
}