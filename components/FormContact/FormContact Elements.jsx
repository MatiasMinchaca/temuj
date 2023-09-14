import styled from "styled-components";

export const Container = styled.div`
    background-color: #6a9ac4;
    display: flex;
    justify-content: center;
    align-items: center;
    .contact-box {
    width: clamp(100px, 90%, 1000px);
    margin: 80px 50px;
    display: flex;
    flex-wrap: wrap;
    }

    .contact-links, .contact-form-wrapper {
    width: 50%;
    padding: 8% 5% 10% 5%;
    }


    .contact-links {
    background-color: #1f2e43;
    background:
        radial-gradient(
        circle at 55% 92%, #426691 0 12%, transparent 12.2%
        ), 
        radial-gradient(
        circle at 94% 72%, #426691 0 10%, transparent 10.2%
        ), 
        radial-gradient(
        circle at 20% max(78%, 350px), #263a53 0 7%, transparent 7.2%
        ), 
        radial-gradient(
        circle at 0% 0%, #263a53 0 40%, transparent 40.2%
        ), 
        #1f2e43;
    border-radius: 10px 0 0 10px;
    }

    .contact-form-wrapper {
    background-color: #ffffff8f;
    border-radius: 0 10px 10px 0;
    }

    @media only screen and (max-width: 800px) {
    .contact-links, .contact-form-wrapper {
        width: 100%;
    }
    
    .contact-links {
        border-radius: 10px 10px 0 0;
    }
    
    .contact-form-wrapper {
        border-radius: 0 0 10px 10px;
    }
    }

    @media only screen and (max-width: 400px) {
    .contact-box {
        width: 95%;
        margin: 8% 5%;
    }
    }

    h2 {
    font-family: 'Arimo', sans-serif;
    color: #fff;
    font-size: clamp(30px, 6vw, 60px);
    letter-spacing: 2px;
    text-align: center;
    transform: scale(.95, 1);
    }

    .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 50px;
    }

    .link {
    margin: 10px;
    cursor: pointer;
    }

    img {
    width: 45px;
    height: 45px;
    filter: 
        hue-rotate(220deg)
        drop-shadow(2px 4px 4px #0006);
    transition: 0.2s;
    user-select: none;
    }

    img:hover {
    transform: scale(1.1, 1.1);
    }

    img:active {
    transform: scale(1.1, 1.1);
    filter: 
        hue-rotate(220deg)
        drop-shadow(2px 4px 4px #222)
        sepia(0.3);
    }

    .form-item {
    position: relative;
    }

    label, input, textarea {
    font-family: 'Poppins', sans-serif;
    }

    label {
    position: absolute;
    top: 10px;
    left: 2%;
    color: #999;
    font-size: clamp(14px, 1.5vw, 18px);
    pointer-events: none;
    user-select: none;
    }

    input, textarea {
    width: 100%;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 12px;
    font-size: clamp(15px, 1.5vw, 18px);
    }

    input:focus+label, 
    input:valid+label, 
    textarea:focus+label, 
    textarea:valid+label {
    font-size: clamp(13px, 1.3vw, 16px);
    color: #777;
    top: -20px;
    transition: all .225s ease;
    }

    .submit-btn {
    background-color: #fd917e;
    filter: drop-shadow(2px 2px 3px #0003);
    color: #fff;
    font-family: "Poppins",sans-serif;
    font-size: clamp(16px, 1.6vw, 18px);
    display: block;
    padding: 12px 20px;
    margin: 2px auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    transition: 0.2s;
    }

    .submit-btn:hover {
    transform: scale(1.1, 1.1);
    }

    .submit-btn:active {
    transform: scale(1.1, 1.1);
    filter: sepia(0.5);
    }

    @media only screen and (max-width: 800px) {
    h2 {
        font-size: clamp(40px, 10vw, 60px);
    }
    }

    @media only screen and (max-width: 400px) {
    h2 {
        font-size: clamp(30px, 12vw, 60px);
    }
    
    .links {
        padding-top: 30px;
    }
    
    img {
        width: 38px;
        height: 38px;
    }
    }
    form{
        position: relative;
    }
    .disabled{
        display: none;
    }
    .active{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 250px;
        font-size: 21px;
        border: 1px solid green;
        background-color: lightgreen;
        padding: 20px;
        color: black;
        border-radius: 10px;
        letter-spacing: 1pt;
    }
`;

export const Redes = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        text-decoration: underline;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    background-color: #e6f1fc;
    box-shadow: 0 1px 4px #00000047;
    input{
        width: 100%;
        height: 35px;
        border-radius: 4px;
        border: none;
        box-shadow: 0 1px 2px #00000091;
        padding-left: 5px;
        &:focus-visible{
            outline: none;
        }
    }
    .submit{
        background-color: #de4503;
        color: white;
        cursor: pointer;
        padding: 0;
        letter-spacing: 1pt;
        text-shadow: 0 2px 6px #00000091;
    }
    textarea{
        width: 100%;
        height: 95px;
        border-radius: 4px;
        border: none;
        box-shadow: 0 1px 2px #00000091;
        padding-left: 5px;
        &:focus-visible{
            outline: none;
        }
    }
    
`;