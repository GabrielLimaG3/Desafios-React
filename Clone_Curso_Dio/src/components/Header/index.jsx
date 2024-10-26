/* eslint-disable no-unused-vars */
import Button from "../Button"
import {useNavigate, Link} from "react-router-dom"
import {
    Wrapper,
    BuscaInputContainer,
    Container,
    Menu,
    MenuRight,
    Column,
    Input,
    Img,
    UserPicture,
    Row
} from "./style"

const Header = (autenticado) => {
    

    const navigater = useNavigate()
    return(
        <Wrapper>
            <Container>
                <Row>
                    <Link to={"/"}><Img src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" alt="" /></Link>
                    {!autenticado ? (
                        <>
                            <BuscaInputContainer>
                                <Input placeholder="Busca..."/>
                            </BuscaInputContainer>
                            <Menu href="#">Live Code</Menu>
                            <Menu href="#">Global</Menu>
                        </>
                    ) : null}
                   
                </Row>
                <Row>
                    {!autenticado ? (
                        <>
                            <UserPicture src="https://avatars.githubusercontent.com/u/126430100?s=96&v=4"/>
                        </>
                    ) : (
                    <>
                        <Link to={"/"}><MenuRight>Home</MenuRight></Link>
                        <Button onClick={()=>{navigater("/login")}} title="Entrar"/>
                        <Button onClick={()=>{navigater("/cadastro")}} title="Cadastrar"/>
                    </>)
                    }
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header