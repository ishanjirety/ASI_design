type FourPixelGridSystemUnits =
    | '0rem'
    | '0.0625rem'
    | '0.125rem'
    | '0.1875rem'
    | '0.25rem'
    | '0.5rem'
    | '0.75rem'
    | '1rem'
    | '1.25rem'
    | '1.5rem'
    | '1.75rem'
    | '2rem'
    | '2.25rem'
    | '2.5rem'
    | '2.75rem'
    | '3rem'
    | '3.25rem'
    | '3.5rem'
    | '3.75rem'
    | '4rem'
    | '4.25rem'
    | '4.5rem'
    | '4.75rem'
    | '5rem'
    | '5.25rem'
    | '5.5rem'
    | '5.75rem'
    | '6rem'
    | '6.25rem'
    | '6.5rem'
    | '6.75rem'
    | "auto"

type FourPixelGridSystem = FourPixelGridSystemUnits | { "md"?: FourPixelGridSystemUnits, "lg"?: FourPixelGridSystemUnits, "xl"?: FourPixelGridSystemUnits }

type FontSizes = '0.625rem'
    | '0.75rem'
    | '0.875rem'
    | '1rem'
    | '1.25rem'
    | '1.5rem'
    | '2rem'
    | '2.5rem'
    | '3rem'
    | '25%'
    | '50%'
    | '75%'
    | '100%'

type FontSize = FontSizes | { "md"?: FontSizes, "lg"?: FontSizes, "xl"?: FontSizes } // FontSizes according to breakpoints

type FontFamily = 'Roboto'; // Any font family

type FontWeights = 300 | 400 | 500 | 600 | 700; // 

type Zindex = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 10;

type ContentPosition =
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'space-around';

type ItemsPosition =
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end';

type Overflow = 'hidden' | 'auto' | 'scroll' | 'visible';

type Position = 'relative' | 'absolute' | 'sticky' | 'fixed';

type BorderRadius = "0px" | '50%' | '4px' | '8px' | '20px' | '40px' | '50px';

type BorderStyle = 'solid';

type BorderWidth = 1 | 2 | 3 | 'none';

type BreakPoints = { md?: string | FontSize | FourPixelGridSystemUnits, lg?: string | FontSize | FourPixelGridSystemUnits, xl?: string | FontSize | FourPixelGridSystemUnits }

