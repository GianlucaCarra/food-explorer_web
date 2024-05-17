import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.COLOR.LIGHT_400}
`;

export const InputField = styled.input`
  width: 348px;

  padding: 16px 14px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLOR.LIGHT_200};

  background-color: ${({ theme }) => theme.COLOR.DARK_900};

  &:placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: 0%;
    text-decoration: none;

    color: ${({ theme }) => theme.COLOR.LIGHT_500};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLOR.LIGHT_100};
  }

  &:invalid {
    outline: 1px solid ${({ theme }) => theme.COLOR.TOMATO_200};
  }
`;
