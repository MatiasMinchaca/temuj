import Head from 'next/head';
import Image from 'next/image';
import { Main } from '../styles/Globals Elements';
import Header from '@/components/Header/Header';
import {
  Presentation,
  Section1,
  Buttons,
  CardsContainer,
  ServiceCard,
  CircleImage,
  Section2,
  Section3
} from '@/styles/Index Elements';
import { Link, animateScroll as scroll } from "react-scroll";
import WhatsApp from '@/components/WhatsAppButton/WhatsApp';
import FormContact from '@/components/FormContact/FormContact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>TEMUJ - Inicio</title>
        <meta name="description" content="Generated by Matias Minchaca" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TEMUJ.ico" />
      </Head>
      <WhatsApp />
      <Header />
      <Main>
        <Presentation>
          <h1>
            ¡Bienvenido!
          </h1>
          <p>
            Somos TEMUJ, tu socio de confianza en servicios y obras. Con nuestra experiencia y compromiso con la calidad, hacemos realidad tus proyectos de construcción y renovación, uno a la vez.
          </p>
          <Buttons>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {'¿Qué ofrecemos?'}
            </Link>
            <Link
              activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {'Contactanos'}
            </Link>
          </Buttons>
        </Presentation>
        <Section1 id="section1">
          <h2>
            Nuestros servicios
          </h2>
          <CardsContainer>
            <ServiceCard back='true'>
              <CircleImage>
                <Image src='/images/enchufe.png' width={40} height={40} title='enchufe' />
              </CircleImage>
              <p>Electricidad Gral.</p>
            </ServiceCard>
            <ServiceCard back='false'>
              <CircleImage>
                <Image src='/images/pared-de-ladrillo.png' width={40} height={40} title='construccion' />
              </CircleImage>
              <p>Construcción</p>
            </ServiceCard>
            <ServiceCard back='true'>
              <CircleImage>
                <Image src='/images/soldadura.png' width={40} height={40} title='soldadura' />
              </CircleImage>
              <p>Soldadura</p>
            </ServiceCard>
            <ServiceCard back='false'>
              <CircleImage>
                <Image src='/images/plomeria.png' width={40} height={40} title='plomeria' />
              </CircleImage>
              <p>Plomería</p>
            </ServiceCard>
            <ServiceCard back='true'>
              <CircleImage>
                <Image src='/images/ventilador.png' width={40} height={40} title='refrigeracion' />
              </CircleImage>
              <p>Refrigeración</p>
            </ServiceCard>
            <ServiceCard back='false'>
              <CircleImage>
                <Image src='/images/pintura.png' width={40} height={40} title='pintura' />
              </CircleImage>
              <p>Pintura</p>
            </ServiceCard>
            <ServiceCard back='true'>
              <CircleImage>
                <Image src='/images/mesero.png' width={40} height={40} title='mesero' />
              </CircleImage>
              <p>Meseros</p>
            </ServiceCard>
            <ServiceCard back='false'>
              <CircleImage>
                <Image src='/images/limpieza.png' width={40} height={40} title='limpieza' />
              </CircleImage>
              <p>Limpieza</p>
            </ServiceCard>
          </CardsContainer>
          <div className='CC'>
            <h3>
              Las 24 horas del dia.
            </h3>
            <h3>
              Garantia 100% asegurada.
            </h3>
            <h3>
              Servicios de confianza.
            </h3>
          </div>
        </Section1>
        <Section2 id='section2'>
          <div className='letters'>
            <h3>¿Por qué elegirnos?</h3>
            <p>En nuestra empresa, nos enorgullece ofrecer a nuestros valiosos clientes una amplia gama de servicios que incluyen soldadura, refrigeración, electricidad, limpieza y plomería. Nuestra dedicación a la excelencia, la seguridad y la satisfacción del cliente es inquebrantable. Nos comprometemos a proporcionar soluciones integrales y confiables para todas sus necesidades. Puede confiar en nosotros como su socio de confianza en cada proyecto y desafío que enfrente.</p>
            
          </div>
          <div className='images'>
            <Image src={'/images/limpieza1.jpg'} width={200} height={250} />
            <Image src={'/images/limpieza2.jpg'} width={200} height={250} />
            <Image src={'/images/taladro.jpg'} className='tt' width={200} height={250} />
          </div>
        </Section2>
        {/* <Section3 id='section2'>
          <h3>Nuestro objetivo</h3>
          <p>Ser la empresa constructora de referencia a nivel regional liderando el mercado por medio de la responsabilidad y eficiencia, cumpliendo con todos y cada uno de nuestros proyectos encomendados. Lograr que nuestro personal se sienta motivado y orgulloso de pertenecer a nuestra organización, fomentando el control y la calidad en el servicio buscando siempre dar más de sí mismos y con esto lograr la satisfacción del cliente. Una empresa comprometida y admirada por su capacidad de crear valor y de innovar para dar respuesta a las nuevas necesidades sociales.</p>
        </Section3> */}
        <FormContact />
      </Main>
      <Footer />
    </>
  )
}
