import styled from "styled-components";

export const Wrapper = styled.div`
  // margin: 10px 0;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
    align-items: center;

  h1 {
    // font-weight: bold;
    font-size: 28px;
    color: #5c5c5c;
  }

  @media (max-width: 600px) {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      // font-weight: bold;
      font-size: 20px;
    }
`;
export const WrapperImage = styled.img`
  width: 480px;
  margin: 0 6px;
  margin-top: 5%;
  cursor: pointer;
  justify-content: center;
  justify-items: center;
  justify-self: center;

  &:hover {
    opacity: 0.7;
    cursor: default;
  }

  @media (max-width: 600px) {
    width: 320px;

    margin-top: 60px;
  }
`;
