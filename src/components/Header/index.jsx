import { useNavigate } from "react-router-dom";

import { Container, Content, Logo, SearchBar } from "./style"; 
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Button } from "../Button";

import logo from "../../assets/Logo.svg";
import search from "../../assets/Search.svg";
import receipt from "../../assets/Receipt.svg";
import signOutL from "../../assets/SignOut.svg";

export function Header() {
  const orders = 0;
  const { signOut, user, role } = useAuth();
  const navigate = useNavigate();
  
  return(
    <Container>
      <Content>
        {
          role === USER_ROLE.ADMIN ?
          <Logo onClick={() => navigate("/")}>
            <img src={logo} alt="Logo of Food Explorer" />

            <div className="role">
              <h2 className="roboto-500-bold">food explorer</h2>
              <span className="roboto-100-regular">admin</span>
            </div>
          </Logo> :

          <Logo onClick={() => navigate("/")}>
            <img src={logo} alt="Logo of Food Explorer" />

            <h2 className="roboto-500-bold">food explorer</h2>
          </Logo>
        }

        <SearchBar>
          <img src={search} alt="Magnify glass" />

          <input className="roboto-300-regular" type="text" placeholder="Search for recipes or ingredients"/>
        </SearchBar>

        {
          role === USER_ROLE.ADMIN ?
          <div className="button-w">
            <Button onClick={() => navigate("/new-meal")} text={"New meal"}/>
          </div> :

          <div className="button-w">
            <Button onClick={() => navigate("/")} filepath={receipt} text={"Orders (" + orders + ")"}/>
          </div>
        }

        <img src={signOutL} alt="Exit" id="exit" onClick={signOut}/>
      </Content>
    </Container>
  );
}