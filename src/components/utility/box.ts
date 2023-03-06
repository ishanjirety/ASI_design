import styled from 'styled-components'

import {
    layout,
    space,
    border,
    position,
    color,
    flexbox,
    grid,
    typography,
    shadow
} from 'styled-system'

export const Box = styled.div<BoxTypes>`
    ${layout}
    ${space}
    ${border}
    ${position}
    ${color}
    ${flexbox}
    ${grid}
    ${typography}
    ${shadow}
`

