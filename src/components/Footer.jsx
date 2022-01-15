import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <>
            <Container>
                <Content>
                    <div>
                        <div>
                            <h1>Rakib</h1>
                            <span>Full StackDeveloper</span>
                        </div>

                        <ul>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>

                        <div class="footer__socials">
                            <a href="#facebook">
                                <i class="uil uil-facebook-f"></i>
                            </a>
                            <a href="#facebook">
                                <i class="uil uil-instagram"></i>
                            </a>
                            <a href="#facebook">
                                <i class="uil uil-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p class="footer__copy">
                            &#169; Self-Taught. All right reserved
                        </p>
                    </div>
                </Content>
            </Container>
        </>
    )
}

export default Footer;

const Container = styled.footer`
    padding-top: 2rem;
    display: grid;
    margin: 0 0 -50px 0;

    @media screen and (max-width: 500px) {
        margin: 0;
    }
`

const Content = styled.div`
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem 3rem;
    display: flex;
    flex-direction: column;

    &>div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        &>div:first-child{
            &>h1{
                font-size: var(--h1-font-size);
                margin-bottom: var(--mb-0-25);
                color: #fff;
            }

            &>span{
                font-size: var(--small-font-size);
                color: #fff;
            }
        }

        &>ul{
            margin-left: 100px;
            order: 3;
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            margin-bottom: 10px;

            &>li{
                margin-bottom: 15px;
                &>a{
                    color: #fff;
                }
            }

            @media screen and (max-width: 750px){
                margin-left: 70px;
            }

            @media screen and (max-width: 650px){
                margin-left: 0;
                order: 2;
            }
        }

        &>div:last-child{
            order: 2;
            display: flex;
            justify-content: space-between;
            margin-right: 20px;

            &>a{
                color: #fff;
                font-size: 1.5rem;
            }

            @media screen and (max-width: 650px){
                order: 3;
            }
        }

        @media screen and (max-width: 650px) {
            grid-template-columns: 1fr;
        }
    }

    &>div:last-child{
        margin-top: 50px;
        &>p{
            font-size: var(--small-font-size);
            color: #fff;
        }
    }
`
