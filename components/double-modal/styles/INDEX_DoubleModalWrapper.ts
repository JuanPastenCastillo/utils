import styled, { css } from "styled-components"

const sharedStylesForModal = () => css`
  display: block;
  position: fixed;
  z-index: 2;
`
type Props = {
  firstOpen?: boolean
  secondOpen?: boolean
}

export const INDEX_DoubleModalWrapper = styled.section<Props>`
  display: grid;
  justify-content: center;

  div {
    display: none;

    box-shadow: 1px 2px 2px white;

    font-size: 24px;

    span {
      font-weight: 900;
    }

    &:nth-of-type(1) {
      ${({ firstOpen }) =>
        firstOpen &&
        css`
          border: 2px solid crimson;
          background-color: crimson;

          ${sharedStylesForModal()}

          left: 20%;
          top: 20%;
        `}
    }

    &:nth-of-type(2) {
      ${({ secondOpen }) =>
        secondOpen &&
        css`
          border: 2px solid green;
          background-color: green;

          ${sharedStylesForModal()}

          right: 20%;
          top: 20%;
        `}
    }
  }

  ${({ firstOpen, secondOpen }) =>
    firstOpen || secondOpen
      ? css`
          &:before {
            content: "";
            position: fixed;
            inset: 0;
            z-index: 1;
            background-color: gray;
            opacity: 0.25;
          }
        `
      : null}
`
