import { Container } from "./style"; 

export function Button({ filepath, text, disabled, ...rest }) {
  return(
    <Container className={`poppins-100-medium ${disabled ? 'disabled' : ''}`} {...rest} >
      {filepath && <img src={filepath} alt="" />}

      {text}
    </Container>
  );
}