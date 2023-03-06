type ButtonTypes = {

    // Background
    bg?: string;

    // Padding
    px?: FourPixelGridSystem;
    py?: FourPixelGridSystem;
    pl?: FourPixelGridSystem
    p?: FourPixelGridSystem;

    // Margins
    ml?: FourPixelGridSystem;
    mr?: FourPixelGridSystem;
    mt?: FourPixelGridSystem;
    mb?: FourPixelGridSystem;
    my?: FourPixelGridSystem

    // Width and height
    minWidth?: string;
    width?: string;
    height?: string;
    maxWidth?: string
    maxWidth?: string
    maxHeight?: string
    minHeight?: string

    // Display properties
    display?: string;
    justifyContent?: ContentPosition;
    alignItems?: ItemsPosition;
    gridColumnGap?: string;
    gridRapGap?: string;

    // Border
    border?: string;
    borderRadius?: BorderRadius;
    borderColor?: string;
    borderWidth?: BorderWidth;


    // Typography
    textAlign?: string;
    fontStyle?: string;
    fontFamily?: FontFamily;
    fontWeight?: FontWeights;
    fontSize?: FontSize;

    // Position
    position?: Position;
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;

    overflow?: string
    opacity?: string;
};
