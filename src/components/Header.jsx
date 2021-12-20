import React, {useState} from 'react';
import styled from 'styled-components';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Container>
                <Content>
                    <a href="#home">Rakib</a>
                    <Menu open={isOpen ? true : false}>
                        <ul>
                            <li>
                                <i class="uil uil-estate nav__icon"></i>Home
                            </li>
                            <li>
                                <i class="uil uil-user nav__icon"></i>About
                            </li>
                            <li>
                                <i class="uil uil-file-alt nav__icon"></i>Skills
                            </li>
                            <li>
                                <i class="uil uil-briefcase-alt nav__icon"></i>Services
                            </li>
                            <li>
                                <i class="uil uil-scenery nav__icon"></i>Portfolio
                            </li>
                            <li>
                                <i class="uil uil-message nav__icon"></i>Contact Me
                            </li>
                        </ul>
                        <AppClose onClick={e => setIsOpen(!isOpen)} close={isOpen ? true : false}><i class="uil uil-times"></i></AppClose>
                    </Menu>
                    <Moon><i class="uil uil-moon change-theme" id="theme-button"></i></Moon>
                    <App><i onClick={e => setIsOpen(!isOpen)} class="uil uil-apps"></i></App>
                </Content>
            </Container>
        </>
    )
}

export default Header;

const Container = styled.div`
    width: 100%;
    left: 0;
    position: fixed;
    z-index: var(--z-fixed);
    background-color: var(--body-color);

    @media screen and (max-width: 600px){
        width: 100%;
        left: 0;
        bottom: 0;
        position: fixed;
        z-index: var(--z-fixed);
        background-color: var(--body-color);
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
    padding: 1rem 5rem;

    &>a{
        /* font-weight: 300; */
        cursor: pointer;
        color: var(--title-color);
        transition: 0.2s;
        text-decoration: none;

        &:hover{
            color: var(--first-color);
        }
    }

    @media screen and (max-width: 800px){
        padding: 1rem 1rem;
    }

    @media screen and (max-width: 600px){
        background-color: var(--body-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3rem;
    }

`

const Moon = styled.div`
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--title-color);
    transition: 0.2s;

    &:hover{
        color: var(--first-color);
    }

    @media screen and (max-width: 800px){
        font-size: 1.2rem;
    }

    @media screen and (max-width: 600px){
        display: none;
    }
`

const App = styled.div`
    display: none;
    &:hover{
        color: var(--first-color);
    }

    @media screen and (max-width: 600px){
        display: block;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--title-color);
        transition: 0.2s;
    }
`

const AppClose = styled.div`
    display: ${props => props.close ? 'block' : 'none'};
    font-size: 2rem;
    position: fixed;
    right: 3rem;
    bottom: 1rem;
    color: var(--title-color);
    cursor: pointer;

    &:hover{
        color: var(--first-color);
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    &>ul{
        display: flex;
        list-style: none;

        &>li{
            margin: 0 10px;
            cursor: pointer;
            color: var(--title-color);
            transition: 0.2s;
            font-size: var(--small-font-size);
            &>i{
                display: none;
            }

            &:hover{
                color: var(--first-color);
            }

            @media screen and (max-width: 800px){
                font-size: 1rem;
            }

            @media screen and (max-width: 600px){
                display: flex;
                flex-direction: column;
                align-items: center;
                &>i{
                    display: inline-block;
                }
            }
        }
        @media screen and (max-width: 600px){
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 600px){
        position: fixed;
        bottom: ${props => props.open ? '0' : '-100%'};
        left: 0;
        width: 100%;
        background-color: var(--body-color);
        padding: 1.5rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: .3s;
    }
`