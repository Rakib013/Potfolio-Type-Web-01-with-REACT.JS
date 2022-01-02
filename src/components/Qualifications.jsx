import React, {useState} from 'react';
import styled from 'styled-components';

function Qualifications() {
    const [isWk, setIsWk] = useState(false);
    const [isEdu, setIsEdu] = useState(true);
    return (
        <>
            <Container>
                <Title>Qualification</Title>
                <Subtitle>My Personal Journey</Subtitle>

                <Content>
                    <Head>
                        <div onClick={e => (
                            setIsWk(false),
                            setIsEdu(true)
                        )}>
                            <i class="uil uil-graduation-cap qualification-icon"></i>Education
                        </div>

                        <div onClick={e => (
                            setIsWk(true),
                            setIsEdu(false)
                        )}>
                        <i class="uil uil-briefcase-alt qualification-icon"></i>Work
                        </div>
                    </Head>

                    <Section>
                        {isEdu && (
                            <List>
                                <Data>
                                    <div>
                                        <h3>Computer Science And Engineering</h3>
                                        <span>East West University</span>

                                        <div class="qualification__calender">
                                            <i class="uil uil-calendar-alt"></i>
                                            2009 - 2014
                                        </div>
                                    </div>

                                    <div>
                                        <Round></Round>
                                        <Line></Line>
                                    </div>
                                </Data>

                                <Data>
                                    <div></div>
                                    <div>
                                        <Round></Round>
                                        <Line></Line>
                                    </div>

                                    <div>
                                        <h3>Web Development</h3>
                                        <span>StackOverflow</span>

                                        <div class="qualification__calender">
                                            <i class="uil uil-calendar-alt"></i>
                                            2009 - 2014
                                        </div>
                                    </div>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>Data Scientist</h3>
                                        <span>Facebook</span>

                                        <div class="qualification__calender">
                                            <i class="uil uil-calendar-alt"></i>
                                            2009 - 2014
                                        </div>
                                    </div>

                                    <div>
                                        <Round></Round>
                                        <Line></Line>
                                    </div>
                                </Data>

                                <Data>
                                    <div></div>

                                    <div>
                                        <Round></Round>
                                    </div>

                                    <div>
                                        <h3>Software Engineer</h3>
                                        <span>Google</span>

                                        <div class="qualification__calender">
                                            <i class="uil uil-calendar-alt"></i>
                                            2009 - 2014
                                        </div>
                                    </div>
                                </Data>
                            </List>
                        )}
                        
                        {isWk && (
                            <List>
                                <Data>
                                    <div>
                                        <h3>Scientist</h3>
                                        <span>Oxfoard University</span>

                                        <div class="qualification__calender">
                                            <i class="uil uil-calendar-alt"></i>
                                            2009 - 2014
                                        </div>
                                    </div>

                                    <div>
                                        <Round></Round>
                                        <Line></Line>
                                    </div>
                                </Data>

                                <Data>
                                    <div></div>
                                    <div>
                                        <Round></Round>
                                        <Line></Line>
                                    </div>

                                    <div>
                                        <h3>Web Developer</h3>
                                        <span>StackOverflow</span>

                                        <div class="qualification__calender">
                                            <i class="uil uil-calendar-alt"></i>
                                            2009 - 2014
                                        </div>
                                    </div>
                                </Data>

                                <Data>
                                    <div>
                                        <h3>Data Analyst</h3>
                                        <span>Netflix</span>

                                        <div class="qualification__calender">
                                            <i class="uil uil-calendar-alt"></i>
                                            2009 - 2014
                                        </div>
                                    </div>

                                    <div>
                                        <Round></Round>
                                        <Line></Line>
                                    </div>
                                </Data>

                                <Data>
                                    <div></div>

                                    <div>
                                        <Round></Round>
                                    </div>

                                    <div>
                                        <h3>Software Engineer</h3>
                                        <span>Facebook</span>

                                        <div class="qualification__calender">
                                            <i class="uil uil-calendar-alt"></i>
                                            2009 - 2014
                                        </div>
                                    </div>
                                </Data>
                            </List>
                        )}
                    </Section>
                </Content>
            </Container>
        </>
    )
}

export default Qualifications;

const Container = styled.div`
    padding: 4rem 0 3rem;
    @media screen and (max-width: 768px) {
        padding: 2rem 0 2rem;
    }
`

const Title = styled.h1`
    text-align: center;
    color: var(--title-color);

    font-size: var(--h1-font-size);
`

const Subtitle = styled.span`
    text-align: center;
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);

    @media screen and (max-width: 768px) {
        margin-bottom: var(--mb-1);
    }
`

const Content = styled.div`
    margin: 0 var(--mb-1-5) 0 var(--mb-1-5);
`

const Head = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2);

    &>div{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        cursor: pointer;
        transition: 0.2s;

        &>i{
            font-size: var(--h1-font-size);
            margin-right: 4px;
        }

        &:hover{
            color: var(--first-color);
        }
    }
`

const Section = styled.div`
    display: grid;
    grid-template-columns: .5fr;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: .9fr;
    }
`


const List = styled.div`

`

const Data = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;

    &>div:nth-child(1){
        &>h3{
            font-size: var(--normal-font-size);
        }

        &>span{
            display: inline-block;
            font-size: var(---small-font-size);
            margin-bottom: var(--mb-1);
        }
    }

    &>div:nth-child(3){
        &>h3{
            font-size: var(--normal-font-size);
        }

        &>span{
            display: inline-block;
            font-size: var(---small-font-size);
            margin-bottom: var(--mb-1);
        }
    }
`


const Round = styled.span`
    display: inline-block;
    background-color: var(--first-color);
    height: 13px;
    width: 13px;
    border-radius: 50%;
    margin-right: 2rem;

    @media screen and (max-width: 768px) {
        margin-right: 1rem;
    }
`

const Line = styled.span`
    display: block;
    background-color: var(--first-color);
    width: 1px;
    height: 100%;
    transform: translate(6px, -7px);
`
