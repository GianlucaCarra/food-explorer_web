import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  
  overflow: scroll;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1122px;

  margin: 0 auto;
`;

export const Back = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  margin: 24px 0 0 10px;

  color: ${({ theme }) => theme.COLOR.LIGHT_300};

  transition: .4s;

  &:hover {
    cursor: pointer;

    filter: brightness(.8);

    transition: .4s;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 42px;

  > img {
    align-self: flex-start;
    width: 390px;
    height: 390px;

    border-radius: 50%;

    object-fit: cover;
    object-position: center;
  }

  .meal-infos {
    max-width: 670px;

    .text {
      display: flex;
      flex-direction: column;
      gap: 24px;

      color: ${({ theme }) => theme.COLOR.LIGHT_300};
    }
  }

  .quant-add {
    display: flex;
    gap: 34px;

    max-width: 50%;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  margin: 24px 0 48px 0;
`;