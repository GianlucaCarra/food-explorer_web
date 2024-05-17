import { Container, Content, Logo, SearchBar } from "./style"; 

import { Button } from "../Button";

import logo from "../../assets/Logo.svg";
import search from "../../assets/Search.svg";
import receipt from "../../assets/Receipt.svg";
import signOut from "../../assets/SignOut.svg";

export function Header() {
  const orders = 0;
  
  return(
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="Logo of Food Explorer" />

          <h2 className="roboto-500-bold">food explorer</h2>
        </Logo>

        <SearchBar>
          <img src={search} alt="Magnify glass" />

          <input className="roboto-300-regular" type="text" placeholder="Search for recipes or ingredients"/>
        </SearchBar>

        <div className="button-w">
          <Button filepath={receipt} text={"Orders (" + orders + ")"}/>
        </div>

        <img src={signOut} alt="Exit" />
      </Content>
    </Container>
  );
}