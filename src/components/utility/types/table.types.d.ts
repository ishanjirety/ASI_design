type TableTypes = {
    // Border
    border?: string;
    borderWidth?: BorderWidth;
    borderRightWidth?: BorderWidth;
    borderRightColor?: string;
    borderColor?: string;
    borderStyle?: BorderStyle;
    borderRadius?: BorderRadius;
    borderTop?: string;
    borderBottom?: string;
    borderRight?: string;
    borderLeft?: string;

    // Padding
    p?: FourPixelGridSystem;
    pt?: FourPixelGridSystem;
    pb?: FourPixelGridSystem;
    pl?: FourPixelGridSystem;
    pr?: FourPixelGridSystem;
    py?: FourPixelGridSystem;
    px?: FourPixelGridSystem;

    // Margins
    ml?: FourPixelGridSystem;
    mt?: FourPixelGridSystem;
    mr?: FourPixelGridSystem;
    mb?: FourPixelGridSystem;
    my?: FourPixelGridSystem;
    mx?: FourPixelGridSystem;

    // Size
    width?: string | { md?: string, lg?: string, xl?: string };
    height?: string | { md?: string, lg?: string, xl?: string };
    maxWidth?: string | { md?: string, lg?: string, xl?: string };
    minWidth?: string | { md?: string, lg?: string, xl?: string };

    // Display
    display?: string;

    // Color
    color?: string;
    bg?: string;

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
    gridRowGap?: FourPixelGridSystem;
    gridColumnGap?: number | string;

    // Typography
    lineHeight?: string;
    fontWeight?: FontWeights;
    fontFamily?: FontFamily;
    fontSize?: FontSize;
    textAlign?: string;
    boxShadow?: string;

    // Overflow
    overflow?: string;
    position?: Position;

    // Cursor
    cursor?: string
};
