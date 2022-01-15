import React from 'react'
import styled from 'styled-components'

function Contact() {
    return (
        <>
            <Container id="contact">
                <Title> Contact Me </Title>
                <SubTitle>Get in touch</SubTitle>

                <Content>
                    <Info>
                        <div>
                            <i class="uil uil-phone contact__icon"></i>
                            <div>
                                <h3>Call Me</h3>
                                <span>+013008785</span>
                            </div>
                        </div>

                        <div>
                            <i class="uil uil-envelope contact__icon"></i>
                            <div>
                                <h3>E-Mail</h3>
                                <span>mdrakib32661@gmail.com</span>
                            </div>
                        </div>

                        <div>
                            <i class="uil uil-map-marker contact__icon"></i>
                            <div>
                                <h3>Location</h3>
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </Info>
                    <Input>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text"></input>
                        </div>

                        <div>
                            <label htmlFor="">E-mail</label>
                            <input type="text"></input>
                        </div>

                        <div>
                            <label htmlFor="">Project</label>
                            <input type="text"></input>
                        </div>

                        <div>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" cols="0" rows="8"></textarea>
                        </div>
                        <button>
                            Submit <i class="uil uil-arrow-right button__icon"></i>
                        </button>
                    </Input>
                </Content>
            </Container>
        </>
    )
}

export default Contact;


const Container = styled.div`
    margin-top: 2rem;
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
    margin-top: 5rem;
    padding: 0 8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    @media screen and (max-width: 900px){
        padding: 0 5rem;
    }

    @media screen and (max-width: 768px) {
        padding: 0 5rem;
        grid-template-columns: 1fr;
    }
`

const Info = styled.div`

    &>div{
        
        display: flex;
        align-items: center;
        &>i{
            font-size: 2rem;
            color: var(--first-color);
            margin-right: 10px;
        }

        /* @media screen and (max-width: 768px) { */
            margin-bottom: 2rem;
        /* } */
    }

    @media screen and (max-width: 768px) {
        order: 2;
    }
`

const Input = styled.div`

    &>div{
        background-color: var(--input-color);
        border-radius: .5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;

        &>label{
            font-size: var(---small-font-size);
            color: var(--title-color);
        }

        &>input{
            border: none;
            padding: 10px 2rem;
            border-radius: 5px;
            outline: none;
        }

        &>textarea{
            border: none;
            margin-top: 10px;
            border-radius: 5px;
            outline: none;
            font-family: var(--font-family);
        }
    }

    @media screen and (max-width: 768px) {
        order: 1;
    }

    &>button{
        background-color: var(--first-color);
        color: #fff;
        padding: 0.8rem 2rem;
        border: none;
        font-size: 1.02rem;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        margin-bottom: 20px;

        &>i{
            display: inline-block;
            font-size: 1.02rem;
            transition: 0.4s;
        }

        &:hover{
            &>i{
                transform: translateX(.25rem);
            }
        }
    }
`