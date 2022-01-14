import React from 'react';
import image1 from '../img/portfolio1.jpg';
import image2 from '../img/portfolio2.jpg';
import image3 from '../img/portfolio3.jpg';
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function Portfolio() {
    return (
        <>
            <Container>
                <Title>Portfolio</Title>
                <SubTitle>Most Recent Work</SubTitle>

                <Content>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        cssMode
                        loop
                        pagination={{ clickable: true }}
                    >
                        
                        <SwiperSlide>
                            <Slide>
                                <img src={image1} alt="portfolio1" />
                                <Data>
                                    <h3>Modern Website</h3>
                                    <p>Website adaptable to all devices, with ui components and animated interactions.</p>
                                    <button>
                                        Demo <i class="uil uil-arrow-right button__icon"></i>
                                    </button>
                                </Data>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide>
                                <img src={image2} alt="portfolio1" />
                                <Data>
                                    <h3>Facebook Clone</h3>
                                    <p>Website adaptable to all devices, with ui components and animated interactions.</p>
                                    <button>
                                        Demo <i class="uil uil-arrow-right button__icon"></i>
                                    </button>
                                </Data>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide>
                                <img src={image3} alt="portfolio1" />
                                <Data>
                                    <h3>Database Design</h3>
                                    <p>Website adaptable to all devices, with ui components and animated interactions.</p>
                                    <button>
                                        Demo <i class="uil uil-arrow-right button__icon"></i>
                                    </button>
                                </Data>
                            </Slide>
                        </SwiperSlide>
                        
                    </Swiper>
                </Content>
            </Container>
        </>
    )
}

export default Portfolio;

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
    padding: 0;

    @media screen and (min-width: 1200px) {
        padding: 0 15rem;
    }
`

const Slide = styled.div`
    padding: 0 5rem 5rem 5rem;
    display: flex;
    align-items: center;

    &>img{
        width: 400px;
        border-radius: 15px;

        @media screen and (max-width: 800px) {
            width: 300px;
            border-radius: 5px;
        }
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 0 3rem 1.5rem 3rem;
    }
`




const Data = styled.div`
    margin-left: 3rem;

    &>p{
        margin-bottom: 1.5rem;
    }

    &>button{
        border: 2px solid #0a66c2;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        background-color: #0a66c2;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.4s;

        &>i{
            display: inline-block;
            transition: 0.4s;
        }

        &:hover{
            &>i{
                transform: translateX(.25rem);
            }
        }
    }

    @media screen and (max-width: 900px) {
        text-align: center;
        margin: 1rem;
    }
`