import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 32px;
  border-radius: 5px;

  width: 100%;
  height: fit-content;
  white-space: nowrap;

  color: ${({ theme }) => theme.COLOR.LIGHT_100};
  background-color: ${({ theme }) => theme.COLOR.TOMATO_100};

  transition: .4s;

  img {
    height: 32px;
    width: 32px;
  }

  &:hover {
    cursor: pointer;

    filter: brightness(.8);

    transition: .4s;
  }

  &.disabled {
    background-color: ${({ theme }) => theme.COLOR.TOMATO_400};
    cursor: not-allowed;

    &:hover {
      cursor: not-allowed;
      filter: none;
      transition: none;
    }
  }
`
