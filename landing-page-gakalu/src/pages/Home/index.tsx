import {HomeDiv, HeaderDiv, LogoImg, SpaceDiv, UserDiv, 
    MenuDiv, CarouselDiv, StoreDiv, FooterDiv, LoginAnchor, GameDiv, StoreIcon, Title} from "./style";

import Carousel from "../../components/Carousel"

import LogoGakalu from "../../assets/Home/LogoGakalu.png"

import {Link} from "react-router-dom";

const listMenu = [<LoginAnchor href="#">Login</LoginAnchor>,
                    <LoginAnchor href="#">Pagos</LoginAnchor>,
                    <LoginAnchor href="#">Em Alta</LoginAnchor>,
                    <LoginAnchor href="#">Recomendados</LoginAnchor>];

const listGame = [<GameDiv></GameDiv>,
                    <GameDiv></GameDiv>,
                    <GameDiv></GameDiv>,
                    <GameDiv></GameDiv>]

const listStoreIcon = [<StoreIcon></StoreIcon>,
                        <StoreIcon></StoreIcon>,
                        <StoreIcon></StoreIcon>,
                        <StoreIcon></StoreIcon>]

export default function Home()
{
    return(
        <HomeDiv>
            <HeaderDiv>
                <LogoImg src={LogoGakalu}></LogoImg>
                <SpaceDiv></SpaceDiv>
                <UserDiv>
                    <LoginAnchor href="./Login">Login</LoginAnchor>
                    <LoginAnchor href="./Signup">Signup</LoginAnchor>
                </UserDiv>
            </HeaderDiv>
            <MenuDiv>
                <Carousel items={listMenu}></Carousel>
            </MenuDiv>
            <CarouselDiv>
                <Carousel items={listGame}></Carousel>
                <Title>Ação</Title>
                <Carousel items={listGame}></Carousel>
                <Title>Aventura</Title>
                <Carousel items={listGame}></Carousel>
                <Title>Corrida</Title>
            </CarouselDiv>
            <StoreDiv>
                <Title>Lojas Recomendadas</Title>
                <Carousel items={listStoreIcon}></Carousel>
            </StoreDiv>
            <FooterDiv>
                <Title>&copy;2023 Gakalu Marketplace. Todos os direitos reservados</Title>
            </FooterDiv>
        </HomeDiv>
    )
}