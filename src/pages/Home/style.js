import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1122px;

  margin: 0 auto;

  .sliders {
    display: flex;
    flex-direction: column;
    gap: 46px;

    width: 100%;

    margin-top: 64px;
  }
`;

export const Banner = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: relative;

  padding: 100px;
  margin-top: 270px;
  border-radius: 8px;

  width: 100%;

  color: ${({ theme }) => theme.COLOR.LIGHT_300};
  background: linear-gradient(to bottom left, #091E26, #00131C);

  img {
    position: absolute;
    bottom: -14px;
    left: -90px;
  }
  
  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;