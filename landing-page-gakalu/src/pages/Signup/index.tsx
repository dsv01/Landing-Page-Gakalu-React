import InputField from "../../components/InputField";
import { HomeDiv, SignupButton, LoginDiv, SignupTitle, LowerLogo, LoginText, SignupDiv, UpperLogo, LinkDiv, Login, SkipLogin } from "./style";

import upperLogo from '../../assets/Home/LogoGakalu.png';
// import lowerLogo from '../../assets/Home/LogoGakalu.png';

export default function Signup() {
    return (
        <HomeDiv>
            <UpperLogo src={upperLogo}/>

            <SignupDiv>
                <SignupTitle>Signup</SignupTitle>
                <InputField placeholder="Insira seu nome" icon={1} isConfidential={false}/>
                <InputField placeholder="Insira seu e-mail" icon={1} isConfidential={false}/>
                <InputField placeholder="Insira sua senha" icon={0} isConfidential={true}/>
                <InputField placeholder="Confirme sua senha" icon={0} isConfidential={true}/>
                <SignupButton>Entrar</SignupButton>
            </SignupDiv>

            <LoginDiv>
                <LinkDiv>
                    <LoginText>Já possuo uma conta</LoginText>
                    <Login href="#">Login</Login>
                </LinkDiv>
                    <SkipLogin href="#">Pular Signup</SkipLogin>
            </LoginDiv>

            {/* <LowerLogo src={lowerLogo}/> */}
        </HomeDiv>
    );
}