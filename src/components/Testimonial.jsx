import React from 'react';
import styled from 'styled-components';

import image1 from '../img/testimonial1.jpg';
import image2 from '../img/testimonial4.jpg';
import image3 from '../img/testimonial3.jpg';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function Testimonial() {
    return (
        <>
            <Container>
                <Title> Testimonial </Title>
                <Subtitle> What people say about me </Subtitle>
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
                                <Header>
                                    <div>
                                        <div>
                                            <img src={image1} alt="" />
                                            <div>
                                                <h3>Sagor Ahammed Munna</h3>
                                                <p>Client</p>
                                            </div>
                                        </div>

                                        <div>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                        </div>
                                    </div>
                                </Header>
                                <span>
                                    I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
                                </span>
                            </Slide>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Slide>
                                <Header>
                                    <div>
                                        <div>
                                            <img src={image2} alt="" />
                                            <div>
                                                <h3>Fahimun Islam Lamia</h3>
                                                <p>Client</p>
                                            </div>
                                        </div>

                                        <div>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                        </div>
                                    </div>
                                </Header>
                                <span>
                                    I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
                                </span>
                            </Slide>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Slide>
                                <Header>
                                    <div>
                                        <div>
                                            <img src={image3} alt="" />
                                            <div>
                                                <h3>Nushera Tajrin</h3>
                                                <p>Client</p>
                                            </div>
                                        </div>

                                        <div>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                            <i class="uil uil-star testmonial-icon-star"></i>
                                        </div>
                                    </div>
                                </Header>
                                <span>
                                    I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
                                </span>
                            </Slide>
                        </SwiperSlide>
                        
                    </Swiper>
                </Content>
            </Container>
        </>
    )
}

export default Testimonial;

const Container = styled.div`
    padding: 4rem 0 3rem;
    @media screen and (max-width: 768px) {
        padding: 2rem 0 2rem;
    }
    color: var(--text-color);
`

const Title = styled.h1`
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
    padding: 0 15rem;

    @media screen and (max-width: 900px){
        padding: 0 10rem;
    }

    @media screen and (max-width: 700px){
        padding: 0 5rem;
    }

    @media screen and (max-width: 500px){
        padding: 0 3rem;
    }
`

const Slide = styled.div`
    margin-bottom: 2rem;
`

const Header = styled.div`
    &>div{
        display: flex;
        justify-content: space-between;

        &>div{
            display: flex;
            &>img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            &>div{
                margin-left: 20px;

            }
            &>i{
                color: var(--first-color);
                font-size: 1.2rem;
            }
        }
    }
    margin-bottom: 20px;
`
