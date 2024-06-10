import { useNavigate } from "react-router-dom";
import { Container } from "./style"; 

export function ResultItem({ img, name, desc, id }) {
  const navigate = useNavigate();

  return(
    <Container onClick={() => navigate(`/meal/${id}`)}>
      <img src={img} alt={`image of ${name}`} />

      <div className="text">
        <h1 className="poppins-300-bold">{name + ">"}</h1>

        <span className="roboto-200-regular">{desc}</span>
      </div>
    </Container>
  );
}