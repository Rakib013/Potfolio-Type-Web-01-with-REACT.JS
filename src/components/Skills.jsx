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
                            <i class="uil uil-angle-down skills__arrow"></i>
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
                            <i class="uil uil-swatchbook skills__icon"></i>
                            <div>
                                <h1>Data Scientist</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i class="uil uil-angle-down skills__arrow"></i>
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
                        <i class="uil uil-android"></i>
                            <div>
                                <h1>Android Developer</h1>
                                <span>More than 2 Years</span>
                            </div>
                            <i class="uil uil-angle-down skills__arrow"></i>
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
                </Content>
            </Container>
        </>
    )
}

export default Skills;

const Container = styled.div`
    margin: 0 var(--mb-1-5) 0 var(--mb-1-5);
    padding: 6rem 0 2rem;
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

const Content = styled.div``

const Head = styled.div`
    display: flex;
    align-items: center;
`

const List = styled.div``

const Data = styled.div`
    &>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const Bar = styled.div``

const Percent = styled.span``