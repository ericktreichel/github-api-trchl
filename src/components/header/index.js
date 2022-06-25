import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setusernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };
  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Type the username you're looking for..."
          onChange={(event) => setusernameForSearch(event.target.value)}
        />
        <button type="submit" id="search" onClick={submitGetUser}>
          <span>Search</span>
        </button>
      </S.Wrapper>
    </header>
  );
}

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    document.getElementById("search").click();
  }
});

export default Header;
