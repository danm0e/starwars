import styled from 'styled-components'
import { palette } from '../../assets/styles/colors'
import { theme } from '../../assets/styles/theme'

const backgroundColor = palette.grey.light
const titleColor = palette.primary
const borderColor = palette.grey.dark

const fontFamily = theme.fontFamily

export const Wrapper = styled.div`
  background: ${backgroundColor};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 8px solid ${borderColor};
  transition: filter 0.3s ease, border-color 0.3s ease;

  &:hover {
    filter: drop-shadow(0px 5px 20px ${titleColor});
    border-color: ${titleColor};
    background: black;
  }
`

export const Header = styled.img`
  width: 100%;
`

export const Content = styled.div`
  padding: 15px;
  min-height: 150px;
  transition: background 0.3s ease;
`

export const Title = styled.h2`
  color: ${titleColor};
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 53px;
  margin: 0;
`
