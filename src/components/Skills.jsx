import React, { useState } from 'react';
import styled from 'styled-components';

function Skills() {
    const [skills1, setSkills1] = useState(false);
    const [skills2, setSkills2] = useState(false);
    const [skills3, setSkills3] = useState(false);
    const [skills4, setSkills4] = useState(false);
    return (
        <>
            <Container>
                <Title>Skills</Title>
                <Subtitle>My Technical Level</Subtitle>
                <Content>
                    <div>
                        <Head onClick={e => setSkills1(!skills1)}>
                            <i class="uil uil-brackets-curly skills__icon"></i>
                            <div>
                                <h1>Frontend Developer</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i style={{transform: skills1? "rotate(180deg)" : "None"}} class="uil uil-angle-down skills__arrow"></i>
                        </Head>
                        {skills1 && (
                            <List>
                                <Data>
                                    <div>
                                        <h3>HTML</h3>
                                        <span>99%</span>
                                    </div>
                                    <Bar>
                                    <Percent style={{width: "99%"}}></Percent>
                                    </Bar>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>CSS</h3>
                                        <span>93%</span>
                                    </div>
                                    <Bar>
                                        <Percent style={{width: "93%"}}></Percent>
                                    </Bar>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>JavaScript</h3>
                                        <span>97%</span>
                                    </div>
                                    <Bar>
                                    <Percent style={{width: "97%"}}></Percent>
                                    </Bar>
                                </Data>
                            </List>
                        )}  
                    </div>
                    <div>
                        <Head onClick={e => setSkills2(!skills2)}>
                        <i class="uil uil-server-network skills__icon"></i>
                            <div>
                                <h1>Backend Developer</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i style={{transform: skills2? "rotate(180deg)" : "None"}} class="uil uil-angle-down skills__arrow"></i>
                        </Head>
                        {skills2 && (
                            <List>
                                <Data>
                                    <div>
                                        <h3>PYTHON</h3>
                                        <span>95%</span>
                                    </div>
                                    <Bar>
                                    <Percent style={{width: "95%"}}></Percent>
                                    </Bar>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>JavaScript</h3>
                                        <span>93%</span>
                                    </div>
                                    <Bar>
                                        <Percent style={{width: "93%"}}></Percent>
                                    </Bar>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>DJANGO</h3>
                                        <span>90%</span>
                                    </div>
                                    <Bar>
                                    <Percent style={{width: "90%"}}></Percent>
                                    </Bar>
                                </Data>
                            </List>
                        )}
                    </div>
                    <div>
                        <Head onClick={e => setSkills3(!skills3)}>
                            <i class="uil uil-swatchbook skills__icon"></i>
                            <div>
                                <h1>Data Scientist</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i style={{transform: skills3? "rotate(180deg)" : "None"}} class="uil uil-angle-down skills__arrow"></i>
                        </Head>
                        {skills3 && (
                            <List>
                                <Data>
                                    <div>
                                        <h3>PYTHON</h3>
                                        <span>99%</span>
                                    </div>
                                    <Bar>
                                    <Percent style={{width: "99%"}}></Percent>
                                    </Bar>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>NUMPY</h3>
                                        <span>93%</span>
                                    </div>
                                    <Bar>
                                        <Percent style={{width: "93%"}}></Percent>
                                    </Bar>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>PANDAS</h3>
                                        <span>97%</span>
                                    </div>
                                    <Bar>
                                    <Percent style={{width: "97%"}}></Percent>
                                    </Bar>
                                </Data>
                            </List>
                        )}
                    </div>
                    <div>
                        <Head onClick={e => setSkills4(!skills4)}>
                        <i class="uil uil-android"></i>
                            <div>
                                <h1>Android Developer</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i style={{transform: skills4? "rotate(180deg)" : "None"}} class="uil uil-angle-down skills__arrow"></i>
                        </Head>
                        {skills4 && (
                            <List>
                                <Data>
                                    <div>
                                        <h3>Java</h3>
                                        <span>85%</span>
                                    </div>
                                    <Bar>
                                    <Percent style={{width: "85%"}}></Percent>
                                    </Bar>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>Kotlin</h3>
                                        <span>5%</span>
                                    </div>
                                    <Bar>
                                        <Percent style={{width: "5%"}}></Percent>
                                    </Bar>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>Android Studio</h3>
                                        <span>97%</span>
                                    </div>
                                    <Bar>
                                    <Percent style={{width: "97%"}}></Percent>
                                    </Bar>
                                </Data>
                            </List>
                        )}
                    </div>
                </Content>
            </Container>
        </>
    )
}

export default Skills;

const Container = styled.div`
    margin: 0 var(--mb-1-5) 0 var(--mb-1-5);
    padding: 6rem 0 2rem;

    @media screen and (max-width: 700px){
        padding: 4rem 0 2rem;
    }
`

const Title = styled.div`
    text-align: center;
    font-size: var(--h1-font-size);
    color: var(--title-color);
`

const Subtitle = styled.div`
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
    column-gap: 2rem;
    padding: 5rem 7rem 5rem 7rem;

    @media screen and (max-width: 900px){
        padding: 3rem 1rem 3rem 1rem;
    }

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
        padding: 0;
    }
`

const Head = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;

    &>i:nth-child(1){
        margin-right: var(--mb-1-5);
        font-size: 2rem;
        color: var(--first-color);
    }

    &>i:nth-child(3){
        margin-left: auto;
        font-size: 2rem;
        color: var(--first-color);
        transition: 0.5s;
    }

    &>div{
        &>h1{
            font-size: var(--h3-font-size);
        }
        &>span{
            font-size: var(--small-font-size);
            color: var(--text-color-light);
        }
    }
`



const List = styled.div`
    margin: 0 2rem 2rem 2rem;
`

const Data = styled.div`
    &>div{
        display: flex;
        justify-content: space-between;

        &>h3{
            font-size: var(--normal-font-size);
            font-weight: var(--font-medium);
        }
    }
`

const Bar = styled.div`
    background-color: var(--first-color-lighter);
    width: 100%;
    height: 0.3rem;
    border-radius: 20px;
    margin-bottom: 1.5rem;
`

const Percent = styled.span`
    width: 80%;
    background-color: var(--first-color);
    border-radius: 20px;
`