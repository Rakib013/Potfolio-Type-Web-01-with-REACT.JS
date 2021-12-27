import React from 'react';
import styled from 'styled-components';

function Skills() {
    return (
        <>
            <Container>
                <Title>Skills</Title>
                <Subtitle>My Technical Level</Subtitle>
                <Content>
                    <div>
                        <Head>
                            <i class="uil uil-brackets-curly skills__icon"></i>
                            <div>
                                <h1>Frontend Developer</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i  class="uil uil-angle-down skills__arrow"></i>
                        </Head>
                        <List>
                            <Data>
                                <div>
                                    <h3>HTML</h3>
                                    <span>90%</span>
                                </div>
                                <Bar>
                                    <Percent></Percent>
                                </Bar>
                            </Data>
                        </List>
                    </div>
                    <div>
                        <Head>
                        <i class="uil uil-server-network skills__icon"></i>
                            <div>
                                <h1>Backend Developer</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i class="uil uil-angle-down skills__arrow"></i>
                        </Head>
                        {/* <List>
                            <Data>
                                <div>
                                    <h3>HTML</h3>
                                    <span>90%</span>
                                </div>
                                <Bar>
                                    <Percent></Percent>
                                </Bar>
                            </Data>
                        </List> */}
                    </div>
                    <div>
                        <Head>
                            <i class="uil uil-swatchbook skills__icon"></i>
                            <div>
                                <h1>Data Scientist</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i class="uil uil-angle-down skills__arrow"></i>
                        </Head>
                        {/* <List>
                            <Data>
                                <div>
                                    <h3>HTML</h3>
                                    <span>90%</span>
                                </div>
                                <Bar>
                                    <Percent></Percent>
                                </Bar>
                            </Data>
                        </List> */}
                    </div>
                    <div>
                        <Head>
                        <i class="uil uil-android"></i>
                            <div>
                                <h1>Android Developer</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i class="uil uil-angle-down skills__arrow"></i>
                        </Head>
                        {/* <List>
                            <Data>
                                <div>
                                    <h3>HTML</h3>
                                    <span>90%</span>
                                </div>
                                <Bar>
                                    <Percent></Percent>
                                </Bar>
                            </Data>
                        </List> */}
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

    &>div{
        display: flex;
        flex-direction: column;
        justify-content: center;
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



const List = styled.div``

const Data = styled.div`
    &>div{
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
    }
`

const Bar = styled.div``

const Percent = styled.span``