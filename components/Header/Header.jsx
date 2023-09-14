import React from 'react';
import {
  Container,
  NavContainer,
  Underline,
  Logo
} from './Header Elements';
import LogoIcon from '@/components/Icons/LogoIcon'
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <Container>
      <Logo>
        <LogoIcon width={60} height={60} />
        <hr className='line1' />
        <hr className='line2' />
        <h1>TEMUJ</h1>
      </Logo>
      <NavContainer>
        <Image src={'/images/jobs.gif'} width={70} height={50} />
        {/* <Link href="/" passHref={true} legacyBehavior={true}>
              <div>
                <a>Inicio</a>
                <Underline />
              </div>
            </Link>
            <Link href="/about" passHref={true} legacyBehavior={true}>
              <div>
                <a>Nosotros</a>
                <Underline />
              </div>
            </Link> */}
      </NavContainer>
    </Container>
  );
};

export default Header;