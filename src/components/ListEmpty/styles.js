import styled from 'styled-components'

export const EmptyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 6rem;
  width: 100%;
  margin: 1rem 0rem;

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
  }
`