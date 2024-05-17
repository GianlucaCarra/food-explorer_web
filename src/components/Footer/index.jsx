import { Container, Content, Logo } from "./style"; 

import logo from "../../assets/LogoFooter.svg";

export function Footer() {
  return(
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="Logo of Food Explorer" />

          <h3 className="roboto-500-bold">food explorer</h3>
        </Logo>

        <span className="roboto-200-regular">
          © 2024 - All rights reserved.
        </span>
      </Content>
    </Container>
  );
}