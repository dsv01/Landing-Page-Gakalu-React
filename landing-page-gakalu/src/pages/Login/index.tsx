import InputField from "../../components/InputField";
import { HomeDiv, LoginButton, LoginDiv, LoginTitle, LowerLogo, SignupText, SignupDiv, UpperLogo, LinkDiv, SignUp, SkipLogin } from "./style";

import upperLogo from '../../assets/Home/LogoGakalu.png';
// import lowerLogo from '../../assets/Home/LogoGakalu.png';

export default function Login() {
    return (
        <HomeDiv>
            <UpperLogo src={upperLogo}/>

            <LoginDiv>
                <LoginTitle>Login</LoginTitle>
                <InputField placeholder="Insira seu e-mail" icon={1} isConfidential={false}/>
                <InputField placeholder="Insira sua senha" icon={0} isConfidential={true}/>
                <LoginButton>Entrar</LoginButton>
            </LoginDiv>

            <SignupDiv>
                <LinkDiv>
                    <SignupText>Não possui uma conta ?</SignupText>
                    <SignUp href="#">Cadastre-se</SignUp>
                </LinkDiv>
                    <SkipLogin href="#">Pular Login</SkipLogin>
            </SignupDiv>

            {/* <LowerLogo src={lowerLogo}/> */}
        </HomeDiv>
    );
}