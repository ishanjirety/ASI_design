import styled from 'styled-components'
import {
    border,
    space,
    color,
    layout,
    shadow,
    typography,
    grid,
    flexbox,
    position
} from 'styled-system'

export const Td = styled.td<TableTypes>`
    ${color}
    ${space}
    ${layout}
    ${border}
    ${shadow}
    ${typography}
    ${flexbox}
    ${grid}
    ${position}
`

