import styled from 'styled-components';
import { global } from '../../globalStyle';

export const HomeDiv = styled.div `
    display: flex;
    flex-direction: column;
    height: 150vh;
    width: 100%;

    align-items: center;

    background: ${global.colors.background};

    background-image: url("../../assets/Home/parede-de-concreto.jpg");
    background-blend-mode: multiply;
`;

export const HeaderDiv = styled.div `
    display: flex;
    flex-diretion: row;
    width: 100%;
    height: 10%;
    align-items: center;
    // background: ${global.colors.amareloSecundario};
`;

export const LogoImg = styled.img `
    width: 30%;
    height:100%;
    margin: 6%;
`;

export const SpaceDiv = styled.div `
    width: 35%;
    height:100%;
    border-radius: 10px;
    margin: 6%;
`;

export const UserDiv = styled.div `
    width: 35%;
    height:100%;
    border-radius:50%;
    margin: 6%;
`;

export const LoginAnchor = styled.a `
    font-family: Verdana, Geneva, sans-serif;
    float: left;
    font-size: 120%;
    // margin: 3px;
    color: ${global.colors.amareloTerceario};
`

export const MenuDiv = styled.div `
    width: 100%;
    height: 10%;
    display: flex;
    // flex-diretion: row;
    flex-direction: column;
`;

export const CarouselDiv = styled.div `
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
`;

export const GameDiv = styled.div `
    width: 150px;
    height: 150px;
    border-width: 10px;
    border-style: solid;
    border-color: black;
    background-color: white;
`;

export const StoreIcon = styled.div `
    width: 100px;
    height: 100px;
    margin: 5%;
    border-width: 4px;
    border-style: solid;
    border-color: black;
    background-color: ${global.colors.amareloTerceario};
`

export const Title = styled.h2 `
    font-family: Verdana, Geneva, sans-serif;
    color: black;
    margin: 5px;
`

export const StoreDiv = styled.div `
    width: 90%;
    height: 20%;
    display: flex;
    flex-direction: column;
    margin: 5%;
    border-radius: 10px;
    background: ${global.colors.amareloTerceario};
`;

export const FooterDiv = styled.div `
    width: 100%;
    height: 10%;
    display: flex;
    flex-diretion: row;
    background: ${global.colors.amareloSecundario};
`;