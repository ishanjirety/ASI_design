import styled from 'styled-components'
import {
    color,
    layout,
    space,
    border,
    flexbox,
    position,
    typography,
    grid
} from 'styled-system'

export const Button = styled.button<ButtonTypes>`
    ${color}
    ${layout}
    ${space}
    ${border}
    ${position}
    ${typography}
    ${flexbox}
    ${grid}
`
