import styled from 'styled-components'
import {
    border,
    layout,
    color,
    position,
    typography,
    space
} from 'styled-system'

export const Text = styled.p<TextTypes>`
    ${border}
    ${layout}
    ${color}
    ${position}
    ${typography}
    ${space}
`
