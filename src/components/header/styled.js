import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4px;
  margin-left: 65%;
  min-width: 30%;
  display: flex;

  input {
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
    height: 40px;
    padding: 8px;
    background-color: #c0c4c625;
  }

  button {
    background-color: #225ed8;
    padding: 8px 12px;
    margin: 0 12px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.3);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }

  @media (max-width: 700px) {
    margin-left: 4%;
    width: 95%;
  }
`;
