import styled from 'styled-components'
import {
    border,
    space,
    color,
    layout,
    shadow,
    typography,
    flexbox,
    grid
} from 'styled-system'

export const Tr = styled.tr<TableTypes>`
    ${color}
    ${space}
    ${layout}
    ${border}
    ${shadow}
    ${typography}
    ${flexbox}
    ${grid}
`

