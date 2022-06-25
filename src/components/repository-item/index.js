import React from "react";
import * as S from "./styled";

function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full Name:</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
}

export default RepositoryItem;
