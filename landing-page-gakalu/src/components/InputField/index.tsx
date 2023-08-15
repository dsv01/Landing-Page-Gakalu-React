import { InputArea, InputDiv, InputIcon } from "./style";

import profileIcon from '../../assets/Home/User_Icon.svg'
import lockIcon from '../../assets/Home/Vector.svg'
import { type } from "os";

type atributos = {
    placeholder: string,
    icon: number,
    isConfidential: boolean;
}

export default function InputField( {placeholder, icon, isConfidential}: atributos) {
    return (
        <InputDiv>
            <InputIcon src={icon===1? profileIcon:lockIcon}/>
            {/* <InputArea placeholder={`${placeholder}`}/> */}
            {
                isConfidential?(
                    <InputArea placeholder={`${placeholder}`} type="password"/>) :(
                    <InputArea placeholder={`${placeholder}`}/>
                    )
            }
        </InputDiv>
    );
}