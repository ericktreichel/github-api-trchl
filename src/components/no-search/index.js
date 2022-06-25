import React from "react";
import * as S from "./styled";
import git1 from "./gitpng1.png";
import git2 from "./gitpng2.png";

/*
function NoSearch() {
  return (
    <S.Wrapper>
      <h1>Enter a username and click "Search".</h1>
      <S.WrapperImage
        src={"./gitpng1.png"}
        alt="Github Logo"
        width="40%"
        height="40%"
      />
    </S.Wrapper>
  );
};
*/
function NoSearch() {
  return (
    <S.Wrapper>
      <h1>Enter a username and click "Search".</h1>
      <S.WrapperImage src={git2} />
    </S.Wrapper>
  );
}

export default NoSearch;
