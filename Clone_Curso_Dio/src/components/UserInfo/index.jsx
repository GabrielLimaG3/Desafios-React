/* eslint-disable no-unused-vars */
import {
    Container,
    NameText,
    Process,
    UserPicture,
    
} from "./styles"

const UserInfo = (prop) => {
    return(
        <Container>
            <UserPicture src={prop.image}/>
            <div>
                <NameText>{prop.name}</NameText>
                <Process percentual={prop.percentual}/>
            </div>
        </Container>
    )
}


export default UserInfo