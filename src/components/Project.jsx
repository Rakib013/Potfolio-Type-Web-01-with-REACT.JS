import React from 'react';
import styled from 'styled-components';
import image from '../img/0.png';

function Project() {
    return (
        <>
            <Container>
                <Card>
                    <Data>
                        <h2>You have a new project.</h2>
                        <p>Contact me now and get a 30% discount on our new project.</p>
                        <button>
                            Contact Me <i class="uil uil-arrow-right button__icon"></i>
                        </button>
                    </Data>
                    <img src={image} alt="" />
                </Card>
            </Container>
        </>
    )
}

export default Project;

const Container = styled.div`
    padding: 5rem 18rem;
    
    @media screen and (max-width: 1100px) {
        padding: 3rem 1rem;
    }
`

const Card = styled.div`
    border-radius: 20px;
    display: flex;
    background-color: var(--first-color-second);
    padding-top: 3rem;
    justify-content: space-between;

    &>img{
        width: 200px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 1.5rem;
        border-radius: 10px;
    }
`

const Data = styled.div`
    margin-left: 20px;
    &>h2{
        font-size: var(--h2-font-size);
        margin-bottom: var(--mb-0-75);
        color: #fff;
    }

    &>p{
        margin-bottom: var(--mb-1-5);
        color: #fff;
    }

    &>button{
        background-color: #fff;
        color: var(--first-color);
        border: none;
        padding: 1rem;
        font-size: 1.05rem;
        border-radius: .5rem;
        font-weight: var(--font-medium);
        transition: 0.3s;
        display: flex;
        align-items: center;
        cursor: pointer;

        &>i{
            margin-left: 0.5rem;
            font-size: 1.3rem;
            transition: 0.4s;
            display: inline-block;
        }

        &:hover{
            &>i{
                transform: translateX(.25rem);
            }
        }
    }

    @media screen and (max-width: 600px) {
        margin-left: 7px;
    }
`