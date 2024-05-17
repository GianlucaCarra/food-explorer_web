import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  bottom: 0;
  z-index: 3;

  width: 100%;

  padding: 24px;
  margin-top: 54px;

  background-color: ${({ theme }) => theme.COLOR.DARK_600};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1122px;

  span {
    color: ${({ theme }) => theme.COLOR.LIGHT_200};
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  color: ${({ theme }) => theme.COLOR.LIGHT_700};

  img {
    height: 30px;
    width: 30px;
  }

  h2 {
    white-space: nowrap;
    
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
  }
`;