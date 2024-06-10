import { Container } from "./style"; 

export function Button({ filepath, text, disabled, ref, className, ...rest }) {
  return(
    <Container ref={ref} className={`poppins-100-medium ${disabled ? 'disabled' : ''} ${className}`} disabled={disabled} {...rest} >
      {filepath && <img src={filepath} alt="" />}

      {text}
    </Container>
  );
}