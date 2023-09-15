import React from 'react';
import { Container } from './WhatsApp Elements';
import Image from 'next/image';

const WhatsApp = () => {
    return (
        <Container>
            <a href="https://api.whatsapp.com/send?phone=5493873637283" _blank='wpp'>
                <Image src={'/images/whatsapp.png'} width={50} height={50} alt='whatsapp' />
            </a>
        </Container>
    );
};

export default WhatsApp;