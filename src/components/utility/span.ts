import styled from 'styled-components'
import {
    border,
    layout,
    color,
    position,
    typography,
    space
} from 'styled-system'

export const Span = styled.span<TextTypes>`
    ${border}
    ${layout}
    ${color}
    ${position}
    ${typography}
    ${space}
    font-family :'Rubik', sans-serif
`

