import React from 'react';
import styled from 'styled-components';
import image from './0.png';

function Home() {
    return (
        <>
            <Container>
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
                            Contact Me <i class="uil uil-message button__icon"></i>
                        </Button>
                    </Data>
                </Content>
            </Container>
        </>
    )
}

export default Home;

const Container = styled.div`
`

const Content = styled.div``

const Socials = styled.div``

const Social = styled.a``

const IMG = styled.div`
    &>svg{
        width: 200px;
        fill: var(--first-color);
    }
`

const Data = styled.div``

const Title = styled.h1``

const SubTitle = styled.h3``

const Description = styled.p``

const Button = styled.button``