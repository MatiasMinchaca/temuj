import React from 'react';
import { Container } from './WhatsApp Elements';
import Image from 'next/image';

const WhatsApp = () => {
    return (
        <Container>
            <a href="https://api.whatsapp.com/send?phone=+5493873693495">
                <Image src={'/images/WhatsApp.png'} width={50} height={50} alt='whatsapp' />
            </a>
        </Container>
    );
};

export default WhatsApp;