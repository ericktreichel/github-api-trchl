import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 550px) {
    // width: 40%;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 190px;
  margin-left: 12px;
  h1 {
    font-size: 26px;
    font-weight: bold;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }

  @media (max-width: 550px) {
    margin-top: 15px;
    width: 60%;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dfdfdf;
  margin: 0px;
  border-radius: 6px;
  background-color: #c0c4c625;
  div {
    margin: 12px;
    text-align: center;
  }

  @media (max-width: 550px) {
    margin-left: -63%;
    margin-top: 25px;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #214593;
    font-weight: bolder;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 170px;
  margin: 0 6px;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    border-radius: 45%;
  }

  @media (max-width: 550px) {
    width: 120px;
    margin-top: 15px;
  }
`;
