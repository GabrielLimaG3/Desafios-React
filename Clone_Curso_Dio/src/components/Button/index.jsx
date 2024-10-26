/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ButtonContainer } from "./styles"

const Button = (prop) => {
    return(
        <ButtonContainer type={prop.type}  variant={prop.variant} onClick={prop.onClick}>
            {prop.title}
        </ButtonContainer>
    )
}

export default Button