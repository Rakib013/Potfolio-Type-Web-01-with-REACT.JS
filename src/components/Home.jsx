import React from 'react';
import styled from 'styled-components';
import image from '../img/0.png';

function Home() {
    return (
        <>
            <Container id="home">
                <Content>
                    <Socials>
                        <Social>
                            <i class="uil uil-linkedin-alt"></i>
                        </Social>
                        <Social>
                        <i class="uil uil-dribbble"></i>
                        </Social>
                        <Social>
                        <i class="uil uil-github-alt"></i>
                        </Social>
                    </Socials>

                    <IMG>
                        <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                <image className='home__blob-img' x="12" y="18" xlinkHref={image}/>
                            </g>
                        </svg>
 
                    </IMG>

                    <Data>
                        <Title>
                            Hi, I am Rakib
                        </Title>
                        <SubTitle>
                            FullStack Developer
                        </SubTitle>
                        <Description>
                            High level experience in web design and development knowledge, producing quality work.
                        </Description>
                        <Button>
                            Contact Me <i class="uil uil-message"></i>
                        </Button>
                    </Data>
                </Content>
                <Scroll>
                    <a href="#home">
                        <i class="uil uil-mouse-alt"></i>
                        <span class="home__scroll-name">Scroll Down</span>
                        <i class="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </Scroll>
            </Container>
        </>
    )
}

export default Home;

const Container = styled.div`
    margin: 0 var(--mb-1-5) 0 var(--mb-1-5);
    padding: 6rem 0 4rem;

    @media screen and (max-width: 800px){
        padding: 4rem 0 2rem;
    }
`

const Content = styled.div`
    display: grid;
    padding: 5rem 10rem 5rem 10rem;
    grid-template-columns: max-content 1fr 1fr;
    column-gap: 2rem;
    align-items: center;

    @media screen and (max-width: 900px){
        padding: 4rem 2rem 2rem 2rem;
    }

    @media screen and (max-width: 600px){
        padding: 0;
        grid-template-columns: .5fr 3fr;
    }   
`

const Socials = styled.div`
    display: flex;
    flex-direction: column;
`

const Social = styled.a`
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 1rem;
    &:hover{
        color: var(--first-color);
    }
`

const IMG = styled.div`
    order: 1;
    margin-left: auto;
    &>svg{
        width: 350px;
        @media screen and (max-width: 1000px){
            width: 270px;
        }
        @media screen and (max-width: 800px){
            width: 200px;
        }
        fill: var(--first-color);
    }
    @media screen and (max-width: 600px){
        order: 0;
        margin-left: 2rem;
    }
`

const Data = styled.div`
    @media screen and (max-width: 600px){
        margin-top: 2rem;
        grid-column: 1/3;
        display: flex;
        flex-direction: column;
    }
`

const Title = styled.h1`
    font-size: var(--big-font-size);
`

const SubTitle = styled.h3`
    font-size: var(--h3-font-size);
    color: var(--text-color);
    margin-bottom: var(--mb-0-75);
    font-weight: var(--font-medium);
`

const Description = styled.p`
    margin-bottom: var(--mb-2);
`

const Button = styled.button`
    display: inline-block;
    border: none;
    background-color: var(--first-color);
    color: #fff;
    padding: 1rem;
    border-radius: .5rem;
    font-weight: var(--font-medium);
    transition: 0.3s;
    font-size: 1rem;

    &>i{
        display: inline-block;
        transition: 0.4s;
    }

    &:hover{
        cursor: pointer;
        background-color: var(--first-color-alt);

        &>i{
            transform: translateX(0.25rem);
        }
    }

    @media screen and (max-width: 800px){
        width: 100%;
    }

    @media screen and (max-width: 600px){
        width: 70%;
    }
`

const Scroll = styled.div`
    padding: 0 5.5rem 2rem 8.5rem;

    &>a{
        transition: 0.4s;
        display: flex;
        align-items: center;
        font-size: var(--h4-font-size);
        color: var(--title-color);
        font-weight: var(--font-medium);
        margin-right: var(--mb-0-25);
        display: inline-block;

        &>i{
            color: var(--first-color);
            font-size: 1.5rem;
        }

        &:hover{
            cursor: pointer;
            transform: translateY(.25rem);
        }

    }
    @media screen and (max-width: 600px){
        display: none;
    }
`