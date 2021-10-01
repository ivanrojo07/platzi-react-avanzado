import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
    0% {
        filter: blur(5px);
        opacity: 0;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }
`
const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const animation = props =>
  css`
    ${pulse} ${props.animationLength} infinite alternate;
  `


const fadeIn = ({ time = '2s', type = 'ease' } = { }) => {
    return css`animation: ${time} ${fadeInKeyFrames} ${type};`
}

export { animation, fadeIn }
