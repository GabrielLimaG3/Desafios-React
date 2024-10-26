/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {IconContainer,InputText,InputContainer,ErrorText} from "./styled"
import { useForm, Controller } from "react-hook-form";


const Input = (prop) => {
    return(
        <>
            <InputContainer>
            {prop.leftIcon ? (<IconContainer>{prop.leftIcon}</IconContainer>) : null}
                <Controller
                    name={prop.name}
                    control={prop.control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field}/>}/>
            </InputContainer>
            {prop.error ? <ErrorText>{prop.error}</ErrorText> : null}
        </>
    )
}

export default Input