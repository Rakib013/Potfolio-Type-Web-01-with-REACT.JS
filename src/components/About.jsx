import React from 'react';
import styled from 'styled-components';
import image from '../img/profile.jpg';

function About() {
    return (
        <>
            <Container>
                <Title>About</Title>
                <SubTitle>My Introduction</SubTitle>
                <Content>
                    <Img>
                        <img src={image} alt="" />
                    </Img>
                    <Data>
                        <Desc>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio adipisci a architecto ratione amet corporis consequatur.
                        </Desc>

                        <InfoBar>
                            <div>
                                <span>02+</span>
                                <span>Years Experiencs</span>
                            </div>
                            <div>
                                <span>20+</span>
                                <span>Completed Project</span>
                            </div>
                            <div>
                                <span>05+</span>
                                <span>Companies Worked</span>
                            </div>
                        </InfoBar>

                        <Button>
                            Download CV <i class="uil uil-download-alt button-icon"></i>
                        </Button>
                    </Data>
                </Content>
            </Container>
        </>
    )
}

export default About;


const Container = styled.div`
    margin: 0 var(--mb-1-5) 0 var(--mb-1-5);
    padding: 6rem 0 2rem;
`

const Title = styled.div`
    color: var(--title-color);
    font-size: var(--h1-font-size);
    text-align: center;
`

const SubTitle = styled.div`
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: 4rem;
    text-align: center;

    @media screen and (max-width: 800px){
        margin-bottom: var(--mb-3);
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5rem 10rem 5rem 10rem;
    grid-gap: 10%;

    @media screen and (max-width: 900px){
        padding: 3rem 1rem 3rem 1rem;
    }

    @media screen and (max-width: 600px){
        padding: 0;
        grid-template-columns: 1fr;
    }
`

const Img = styled.div`
    &>img{
        width: 300px;
        height: 300px;
        border-radius: 50%;

        @media screen and (max-width: 800px){
            width: 200px;
            height: 200px;
            border-radius: 0.5rem;
            justify-self: center;
        }

        @media screen and (max-width: 600px){
            width: 300px;
            height: 300px;
            border-radius: 0.5rem;
            justify-self: center;
        }
    }
    justify-self: center;
`

const Data = styled.div`
    display: flex;
    flex-direction: column;
`

const Desc = styled.div`
    text-align: center;
    margin-bottom: var(--mb-2-5);
`

const InfoBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2-5);

    &>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        span:nth-child(1){
            color: var(--title-color);
            font-size: var(--h1-font-size);
        }

        span:nth-child(2){
            text-align: center;
        }


    }
`

const Button = styled.div`
    display: inline-block;
    border: none;
    background-color: var(--first-color);
    color: #fff;
    padding: 1rem;
    border-radius: .5rem;
    font-weight: var(--font-medium);
    transition: 0.3s;
    font-size: 1rem;
    width: 180px;
    text-align: center;

    &:hover{
        cursor: pointer;
        background-color: var(--first-color-alt);
        &>i{
            color: #ff00d4;
        }
    }

    @media screen and (max-width: 800px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }
`

