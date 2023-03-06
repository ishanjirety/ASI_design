import styled from 'styled-components'
import { border, position } from 'styled-system'

export const Image = styled.img<ImageTypes>`
    ${border}
    ${position}
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    box-sizing:border-box;
`

