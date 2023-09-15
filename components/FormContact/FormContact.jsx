import React, { useState } from 'react';
import {
    Container,
    Form,
    Redes
} from './FormContact Elements';
import WhatsAppIcon from '../Icons/WhatsAppIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import FacebookIcon from '../Icons/FacebookIcon';

const FormContact = () => {
    const [message, setMessage] = useState('disabled');

    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json'
            }
        })

        const result = await response.json();

        if(response.ok){
            setMessage('active')
        }
    };

    return (
        <Container id='contact-section'>
            <div className="contact-box">
                <div className="contact-links">
                    <h2>CONTACTO</h2>
                    <div className="links">
                        <div className="link">
                            <a href='https://www.instagram.com/temuj_srl/?igshid=MWZjMTM2ODFkZg%3D%3D'><InstagramIcon width={40} height={40} fill={'#fafafa11'} /></a>
                        </div>
                        <div className="link">
                            <a href='https://www.facebook.com/profile.php?id=61550838815749&mibextid=ZbWKwL'><FacebookIcon width={40} height={40} fill={'#ffffff'} /></a>
                        </div>
                        <div className="link">
                            <a href='https://api.whatsapp.com/send?phone=5493873637283'><WhatsAppIcon width={40} height={40} fill={'#ffffff'} /></a>
                        </div>
                    </div>
                </div>
                <div className="contact-form-wrapper">
                    <form  action="https://formspree.io/f/mgejzkoy" method="POST" onSubmit={handleSubmit}>
                        <div className="form-item">
                            <input type="text" name="name" id="name" required />
                            <label>Nombre:</label>
                        </div>
                        <div className="form-item">
                            <input type="email" name="email" id="email" required />
                            <label>Correo Electronico:</label>
                        </div>
                        <div className="form-item">
                            <input type="number" name="phone" id="phone" required />
                            <label>Celular:</label>
                        </div>
                        <div className="form-item">
                            <textarea className="" name="message" id="message" required></textarea>
                            <label>Mensaje:</label>
                        </div>
                        <button className="submit-btn" >Enviar</button>
                        <p className={message == 'active' ? 'active' : 'disabled'}>Tu mensaje lo recibimos correctamente, nos podremos en contacto lo antes posible, gracias.</p>
                    </form>
                </div>
            </div>
            {/* <Redes>
                <a href='https://www.facebook.com/friends/requests/?profile_id=61550608679688'>
                    <InstagramIcon width={40} height={40} fill={'#de4503'}/>
                    Instagram: @Temuj
                </a>
                <a href='https://www.facebook.com/friends/requests/?profile_id=61550608679688'>
                    <FacebookIcon width={40} height={40} fill={'#de4503'}/>
                    Facebook: Temuj
                </a>
                <a href=''>
                    <WhatsAppIcon width={40} height={40} fill={'#de4503'}/>
                    Celular: 3873693495
                </a>
            </Redes>
            <Form>
                <h3>Escribenos</h3>
                <input type='text' name="name" placeholder='Nombre' className='name' required />
                <input type='text' name="email" placeholder='Correo electronico' className='email' required />
                <textarea name="message" id="" cols="30" rows="10" className='message' placeholder='Mensaje'></textarea>
                <input type="submit" value="Enviar" className='submit' />
            </Form> */}
        </Container>
    );
};

export default FormContact;