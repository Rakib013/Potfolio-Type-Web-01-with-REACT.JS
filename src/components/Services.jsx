import React, { useState } from 'react';
import styled from 'styled-components';

function Services() {
    const [isPage1, setIsPage1] = useState(false);
    const [isPage2, setIsPage2] = useState(false);
    const [isPage3, setIsPage3] = useState(false);

    return (
        <>
            <Container>
                <Title>Services</Title>
                <SubTitle>My Services</SubTitle>

                <Content>
                    <>
                        <Box>
                            <i class="uil uil-web-grid services__icon"></i>
                            <h3 class="services__title">Frontend <br/> Developer</h3>
                            <span onClick={e => setIsPage1(!isPage1)}>
                                View More
                                <DIT><i class="uil uil-arrow-right button__icon"></i></DIT>
                            </span>

                        </Box>

                        {isPage1 && (
                            <Page>
                                <PageContent>
                                    <h4>Frontend Developer</h4>
                                    <i onClick={e => setIsPage1(!isPage1)} className="uil uil-times"></i>

                                    <ul>
                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop the user Interface</p>
                                        </li>

                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop the user Interface Functionality</p>
                                        </li>

                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop User Interface With React.js</p>
                                        </li>

                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop blah blah things</p>
                                        </li>
                                    </ul>

                                </PageContent> 
                            </Page>
                        )}

                    </>

                    <>
                        <Box>
                            <i class="uil uil-arrow services__icon"></i>
                            <h3 class="services__title">Backend <br/> Developer</h3>
                            <span onClick={e => setIsPage2(!isPage2)}>
                                View More
                                <DIT><i class="uil uil-arrow-right button__icon"></i></DIT>
                            </span>
                        </Box>

                        {isPage2 && (
                            <Page>
                                <PageContent>
                                    <h4>Backend Developer</h4>
                                    <i onClick={e => setIsPage2(!isPage2)} className="uil uil-times"></i>

                                    <ul>
                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop backend with Django</p>
                                        </li>

                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop blah blah blah things</p>
                                        </li>

                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop blah blah blah things</p>
                                        </li>

                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop blah blah blah things</p>
                                        </li>
                                    </ul>

                                </PageContent> 
                            </Page>
                        )}
                    </>

                    <>
                        <Box>
                            <i class="uil uil-server services__icon"></i>
                            <h3 class="services__title">AI <br/> Analyst</h3>
                            <span onClick={e => setIsPage3(!isPage3)}>
                                View More
                                <DIT><i class="uil uil-arrow-right button__icon"></i></DIT>
                            </span>
                        </Box>

                        {isPage3 && (
                            <Page>
                                <PageContent>
                                    <h4>AI Analyst</h4>
                                    <i onClick={e => setIsPage3(!isPage3)} className="uil uil-times"></i>

                                    <ul>
                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop the blah blah things</p>
                                        </li>

                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop the blah blah things</p>
                                        </li>

                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop the blah blah things</p>
                                        </li>

                                        <li>
                                            <i class="uil uil-check-circle services__modal-icon"></i>
                                            <p>I develop the blah blah things</p>
                                        </li>
                                    </ul>

                                </PageContent> 
                            </Page>
                        )}
                    </>
                </Content>
            </Container>
        </>
    )
}

export default Services;

const Container = styled.div`
    padding: 4rem 0 3rem;
    @media screen and (max-width: 768px) {
        padding: 2rem 0 2rem;
    }
    color: var(--text-color);
`

const Title = styled.h1`
    text-align: center;
    color: var(--title-color);
    font-size: var(--h1-font-size);
`

const SubTitle = styled.span`
    text-align: center;
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);

    @media screen and (max-width: 768px) {
        margin-bottom: var(--mb-1);
    }
`

const Content = styled.div`
    padding: 5rem;
    margin: 0 var(--mb-1-5) 0 var(--mb-1-5);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 3rem;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 3rem;
    }
`

const DIT = styled.div`
    display: inline-block;
    transition: 0.4s;
    font-size: 1.2rem;
`

const Box = styled.div`
    position: relative;
    background-color: var(--container-color);
    padding: 3.5rem .5rem 1.25rem 1.5rem;
    border-radius: .5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

    &>i{
        display: block;
        font-size: 1.5rem;
        color: var(--first-color);
        margin-bottom: var(--mb-1);
    }

    &>h3{
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-medium);
    }

    &>span{
        display: block;
        margin-top: 10px;
        color: var(--first-color);
        cursor: pointer;

        &:hover{
            background-color: transparent;
            color: var(--first-color-alt);
            ${DIT} {
                color: var(--first-color-alt);
                transform: translateX(.25rem);
            }
        }
    }
`


const Page = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .15);
    z-index: var(--z-modal);
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
`


const PageContent = styled.div`
    position: relative;
    padding: 1.5rem;
    background-color: var(--container-color);
    border-radius: 0.5rem;
    transition: 0.4s;

    &>h4{
        font-size: var(--h2-font-size);
    }

    &>i{
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        color: var(--first-color);
        cursor: pointer;
    }

    &>ul{
        margin-top: 20px;
        &>li{
            display: flex;
            margin-bottom: 10px;
            align-items: center;
            font-size: 1.05rem;

            &>p{
                margin-left: 8px;
            }
        }
    }
`