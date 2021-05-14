import styled from 'styled-components'

export const Header = styled.img`
  width: 100%;
`

export const Content = styled.div`
  padding: 15px;
  background: #333333;
  min-height: 150px;
  transition: background 0.3s ease;
`

export const Title = styled.h2`
  color: #ffdf02;
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 53px;
  margin: 0;
`

export const Wrapper = styled.div`
  background: #c4c4c4;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 8px solid #767676;
  transition: filter 0.3s ease, border-color 0.3s ease;

  &:hover {
    filter: drop-shadow(0px 5px 20px #ffdf02);
    border-color: #ffdf02;

    ${Content} {
      background: black;
    }
  }
`
