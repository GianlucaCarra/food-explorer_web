import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: header;

  position: fixed;
  top: 0;
  z-index: 4;
  
  width: 100%;
  height: 104px;

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

  #exit {
    cursor: pointer;
    transition: .4s;

    &:hover {
      filter: brightness(0.8);
      transition: .4s;
    }
  }
`

export const Logo = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  background-color: transparent;
  cursor: pointer;

  > img {
    height: 30px;
    width: 30px;
  }

  h2 {
    white-space: nowrap;
    
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
  }

  span {
    white-space: nowrap;
    margin-top: -5px;
    color: ${({ theme }) => theme.COLOR.CAKE_200};
  }

  .role {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 580px;

  display: flex;
  flex-direction: column;

  position: relative;

  .search {
    display: flex;
    align-items: center;

    width: 100%;

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

    .withResults {
      border-radius: 5px 5px 0 0; 
    }
  }
`;

export const Results = styled.div`
  width: 100%;
  max-height: 400px;
  height: max-content;

  overflow: scroll;
  position: absolute;
  top: 100%;

  border-radius: 0 0 5px 5px;

  background-color: ${({ theme }) => theme.COLOR.DARK_900};
`;
