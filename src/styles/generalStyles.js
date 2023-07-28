import styled from 'styled-components'

//BUTTONS//

export const PrimaryButton = styled.button`
  width: 100%;
  min-width: 10rem;
  padding: 0.8125rem 1.25rem;
  font-weight: var(--font-weight-4);
  font-size: var(--font-size-3);
  line-height: var(--line-height-6);
  color: var(--color-white);
  gap: 0.625rem;
  background: var(--color-color-primary-1);
  border: 0.125rem solid var(--color-color-primary-1);
  border-radius: 0.5rem;

  @media screen and (min-width: 1024px) {
    max-width: 21.875rem;
  }

  :hover {
    background: var(--color-color-primary-2);
    border: 0.125rem solid var(--color-color-primary-2);
    transition: 0.5s;
  }
`
export const DeleteButton = styled.button`
  width: 3.125rem;
  padding: 0.1875rem 0.5625rem;
  font-weight: var(--font-weight-5);
  font-size: var(--font-size-5);
  line-height: var(--line-height-7);
  color: var(--color-grey-4);
  background: var(--color-grey-1);
  border-radius: 0.125rem;

  :hover {
    color: var(--color-grey-1);
    background: var(--color-grey-4);
    transition: 0.5s;
  }
`

//GRID//

export const DivHeader = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 64rem;
`

export const DivMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 64rem;
  gap: 1.875rem;

  @media screen and (min-width: 1024px) {
    gap: 3.75rem;
  }

  > div:nth-child(1) {
    width: 100%;

    @media screen and (min-width: 1024px) {
      max-width: 22.1875rem;
    }
  }

  > div:nth-child(2) {
    width: 100%;

    @media screen and (min-width: 1024px) {
      max-width: 35rem;
    }
  }
`

//INPUT//

export const Input = styled.input`
  height: 3.125rem;
  width: 100%;
  padding-left: 1rem;
  font-style: normal;
  font-family: var(--font-family-default);
  font-weight: var(--font-weight-5);
  font-size: var(--font-size-3);
  line-height: var(--line-height-4);
  color: var(--color-grey-3);
  background: var(--color-grey-0);
  border: 0.125rem solid var(--color-grey-0);
  border-radius: 0.5rem;

  @media screen and (max-width: 299px) {
    font-size: var(--font-size-4);
  }

  @media screen and (min-width: 1024px) {
    max-width: 21.875rem;
  }

  ::placeholder {
    color: var(--color-grey-2);
  }
`

//SELECT//

export const Select = styled.select`
  height: 3.125rem;
  width: 100%;
  padding-left: 1rem;
  font-family: var(--font-family-default);
  font-weight: var(--font-weight-5);
  font-size: var(--font-size-3);
  line-height: var(--line-height-4);
  color: var(--color-grey-3);
  background: var(--color-grey-0);
  border: 0.125rem solid var(--color-grey-0);
  border-radius: 0.5rem;

  @media screen and (max-width: 299px) {
    font-size: var(--font-size-4);
  }

  @media screen and (min-width: 1024px) {
    max-width: 21.875rem;
  }
`

//TITTLES//

export const TittleFontDefault = `
  font-family: var(--font-family-default);
  font-style: normal;
`

export const H1 = styled.h1`
  ${TittleFontDefault}
  font-weight: var(--font-weight-1);
  font-size: var(--font-size-1);
  line-height: var(--line-height-1);
  color: var(--color-grey-4);
`

export const H2 = styled.h2`
  ${TittleFontDefault}
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-2);
  line-height: var(--line-height-2);
  color: var(--color-grey-4);
`

export const H3 = styled.h3`
  ${TittleFontDefault}
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-3);
  line-height: var(--line-height-3);
  color: var(--color-grey-4);
`

export const H4 = styled.h4`
  ${TittleFontDefault}
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-4);
  line-height: var(--line-height-4);
  color: var(--color-grey-4);
`

export const P = styled.p`
  ${TittleFontDefault}
  font-weight: var(--font-weight-5);
  font-size: var(--font-size-4);
  line-height: var(--line-height-5);
  color: var(--color-grey-2);
`

export const Label = styled.label`
  ${TittleFontDefault}
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-3);
  line-height: var(--line-height-5);
  color: var(--color-grey-4);
`