type BoxTypes = {
    childern?: React.ReactNode | JSX.Element | null;

    // Disabled
    disabled?: boolean;

    // Margins
    ml?: FourPixelGridSystem;
    mt?: FourPixelGridSystem;
    mr?: FourPixelGridSystem;
    mb?: FourPixelGridSystem;
    my?: FourPixelGridSystem;
    mx?: FourPixelGridSystem;

    // Padding
    p?: FourPixelGridSystem;
    pt?: FourPixelGridSystem;
    pb?: FourPixelGridSystem;
    pl?: FourPixelGridSystem;
    pr?: FourPixelGridSystem;
    py?: FourPixelGridSystem;
    px?: FourPixelGridSystem;

    // Size
    width?: string;
    height?: string;
    maxWidth?: string;
    minWidth?: string;
    maxHeight?: string;
    minHeight?: string;

    // Display
    display?: string;

    // Border
    border?: string;
    borderWidth?: BorderWidth;
    borderColor?: string;
    borderStyle?: BorderStyle;
    borderRadius?: BorderRadius;
    borderTop?: string;
    borderBottom?: string;
    borderRight?: string;
    borderLeft?: string;

    // Position
    position?: Position;
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;

    // Color
    color?: string;
    bg?: string;
    backgroundImage?: string;

    // Layout
    flexWrap?: string;
    flexDirection?: string;
    flex?: string;
    flexGrow?: string;
    flexShrink?: string;
    flexBasis?: string;

    justifyContent?: ContentPosition;
    justifySelf?: ItemsPosition;
    justifyItems?: ItemsPosition;
    alignContent?: ContentPosition;
    alignSelf?: ItemsPosition;
    alignItems?: ItemsPosition;

    gridGap?: string;
    gridColumn?: string | number;
    gridRow?: string | number;
    gridAutoFlow?: string;
    gridAutoColumns?: string;
    gridAutoRows?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridTemplateAreas?: string;
    gridRowGap?: FourPixelGridSystem | BreakPoints;
    gridColumnGap?: number | string | BreakPoints;

    // Typography
    lineHeight?: string;
    fontWeight?: FontWeights;
    fontFamily?: FontFamily;
    fontSize?: FontSize;
    textAlign?: string;

    // Shadow
    boxShadow?: string;

    // Utility
    zIndex?: Zindex;
    overflow?: Overflow | BreakPoints;
    overflowX?: Overflow | BreakPoints;
    overflowY?: Overflow | BreakPoints;
    ref?: any;

    opacity?: string;
    visibility?: string;
    cursor?: string;



    // Others 
    shouldHover?: boolean;

    //position
    right?: string;
    left?: string;
    bottom?: string;
    top?: string;
};
