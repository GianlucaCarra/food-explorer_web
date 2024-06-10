import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
  transition: .4s;
  background-color: ${({ theme }) => theme.COLOR.DARK_200};

  border-top: 1px solid ${({ theme }) => theme.COLOR.DARK_900};

  > img {
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 50%;
  }

  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    text-align: left;

    color: ${({ theme }) => theme.COLOR.LIGHT_300};
  }

  span {
    text-align: left;
    max-width: 210px;

    color: ${({ theme }) => theme.COLOR.LIGHT_400};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.6);
    transition: .4s;
  }
`