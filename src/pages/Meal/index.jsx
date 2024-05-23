import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container, Content, Back, Info, Tags } from "./style"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { ButtonQuant } from "../../components/ButtonQuant";

import caretLeft from "../../assets/CaretLeft.svg";

export function Meal() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return(
    <Container>
      <Header />

      <Content>
        <Back onClick={() => navigate(-1)} >
          <img src={caretLeft} />

          <span className="poppins-300-bold" >back</span>
        </Back>

        <Info>
          <img src="https://github.com/gianlucacarra.png" alt="Meal photo" />

          <div className="meal-infos">
            <div className="text">
              <h1 className="poppins-500-medium" >Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>

              <h2 className="poppins-300-regular" >e aspernatur aperiam!Lorem ipsum dolor sit amet consectetur </h2>
            </div>

            <Tags>
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
              <Tag text="teste" />
            </Tags>

            {
              user.role === USER_ROLE.ADMIN ?
              <div className="quant-add-admin">
                <Button text={`Edit meal`} />
              </div> :

              <div className="quant-add">
                <ButtonQuant />
                
                <Button text={`add ∙ $ ${price}`} />
              </div>
            }
          </div>
        </Info>
      </Content>
      
      <Footer />
    </Container>
  );
}