import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  z-index: 4;
  
  width: 100%;

  padding: 28px;

  background-color: ${({ theme }) => theme.COLOR.DARK_600};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  width: 100%;
  max-width: 1122px;

  > img {
    height: 32px;
    width: 32px;
  }

  .button-w {
    max-width: 250px;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    height: 30px;
    width: 30px;
  }

  > h2 {
    white-space: nowrap;
    
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 580px;

  position: relative;

  > img {
    position: absolute;

    height: 24px;
    width: 24px;

    margin: 10px;
  }

  > input {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px 16px 12px 44px;
    border-radius: 5px;
    width: 100%;

    color: ${({ theme }) => theme.COLOR.LIGHT_200};

    background-color: ${({ theme }) => theme.COLOR.DARK_900};
  }
`;
