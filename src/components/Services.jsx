import React from 'react';
import styled from 'styled-components';

function Services() {
    return (
        <>
            <Container>
                <Title>Services</Title>
                <SubTitle>My Services</SubTitle>

                <Content>
                    <Box>
                        <i class="uil uil-web-grid services__icon"></i>
                        <h3 class="services__title">Ui/Ux <br/> Designer</h3>
                        <span>
                            View More
                            <i class="uil uil-arrow-right button__icon"></i>
                        </span>
                    </Box>

                    <Box>
                        <i class="uil uil-web-grid services__icon"></i>
                        <h3 class="services__title">Ui/Ux <br/> Designer</h3>
                        <span>
                            View More
                            <i class="uil uil-arrow-right button__icon"></i>
                        </span>
                    </Box>

                    <Box>
                        <i class="uil uil-web-grid services__icon"></i>
                        <h3 class="services__title">Ui/Ux <br/> Designer</h3>
                        <span>
                            View More
                            <i class="uil uil-arrow-right button__icon"></i>
                        </span>
                    </Box>
                </Content>
            </Container>
        </>
    )
}

export default Services;

const Container = styled.div`
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
`

const Content = styled.div``

const Box = styled.div``