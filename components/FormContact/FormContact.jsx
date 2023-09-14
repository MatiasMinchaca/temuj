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
    let {message, setMessage} = useState(true);

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

        const result = await response.json()
        console.log(response.ok)
        if(response.ok){
            setMessage(true)
        }
    };

    return (
        <Container >
            <div class="contact-box">
                <div className="contact-links">
                    <h2>CONTACTO</h2>
                    <div className="links">
                        <div className="link">
                            <a><InstagramIcon width={40} height={40} fill={'#fafafa11'} /></a>
                        </div>
                        <div className="link">
                            <a><FacebookIcon width={40} height={40} fill={'#ffffff'} /></a>
                        </div>
                        <div className="link">
                            <a><WhatsAppIcon width={40} height={40} fill={'#ffffff'} /></a>
                        </div>
                    </div>
                </div>
                <div className="contact-form-wrapper">
                    <form  action="https://formspree.io/f/xvojqzej" method="POST" onSubmit={handleSubmit}>
                        <div className="form-item">
                            <input type="text" name="name" id="name" required />
                            <label>Nombre:</label>
                        </div>
                        <div className="form-item">
                            <input type="email" name="email" id="email" required />
                            <label>Email:</label>
                        </div>
                        <div className="form-item">
                            <textarea className="" name="message" id="message" required></textarea>
                            <label>Mensaje:</label>
                        </div>
                        <button className="submit-btn" {...message ? 'disabled' : ''}>Send</button>
                        <p className={message == true ? 'active' : 'disabled'}>Tu mensaje lo recibimos correctamente, nos podremos en contacto lo antes posible, gracias.</p>
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