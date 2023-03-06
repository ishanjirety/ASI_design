import styled from 'styled-components'
import {
    border,
    space,
    color,
    layout,
    shadow,
    typography,
    grid,
    flexbox
} from 'styled-system'

export const Th = styled.th<TableTypes>`
    ${color}
    ${space}
    ${layout}
    ${border}
    ${shadow}
    ${typography}
    ${flexbox}
    ${grid}
`
