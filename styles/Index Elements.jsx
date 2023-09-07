import styled from 'styled-components';

export const Presentation = styled.section`
    width: 100%;
    height: 91vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @keyframes expand {
        0% {
            box-shadow: 0 0px 0px black;
        }
        20% {
            box-shadow: 0 0px 2px black;
        }
        30% {
            box-shadow: 0 0px 3px black;
        }
        40% {
            box-shadow: 0 0px 4px black;
        }
        50% {
            box-shadow: 0 0px 5px black;
        }
        60% {
            box-shadow: 0 0px 6px black;
        }
        70% {
            box-shadow: 0 0px 7px black;
        }
        80% {
            box-shadow: 0 0px 8px black;
        }
        90% {
            box-shadow: 0 0px 9px black;
        }
        100% {
            box-shadow: 0 0px 10px black;
        }
    }
    &:before {
        content: "";
        position: absolute;
        height: 100%; 
        width: 100%;
        background: url('/images/welder.jpg');
        background-size: cover;
        background-position: center;
        z-index: -1;
    }
    &::after{
        content: "";
        background-color: #00000054;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 0;
        top: 0;
        filter: blur(2px);
    }
    h1{
        color: white;
        font-size: 50px;
        text-align: center;
        text-shadow: 0 2px 5px black;
        z-index: 2;
    }
    p{
        z-index: 2;
        color: white;
        text-align: center;
        font-size: 21px;
        text-shadow: 0 2px 5px black;
        line-height: 27px;
    }
`;

export const Buttons = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    a{
        cursor: pointer;
        z-index: 3;
        color: white;
        font-size: 20px;
        background-color: var(--SecundaryColor);
        display: grid;
        padding: 10px;
        box-shadow: 0 0 6px #0000007a;
        border-radius: 5px;
        text-shadow: 0 2px 5px black;
    }
`;

export const Section1 = styled.section`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding-top: 20px;
    h2{
        font-weight: 500;
        text-decoration: 1px underline #474141;
        color: #474141;
    }
    .CC{
        display: flex;
        flex-direction: row;
        
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: wrap;
        h3{
            width: 236px;
            text-align: center;
            margin-top: 10px;
            color: var(--SecundaryColor);
            text-decoration: 1px underline var(--SecundaryColor);
        }
    }
`;

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 120px;
    gap: 10px;
    background-color: ${({back}) => back == 'true' ? '#de4503' : '#e6f1fc'};
    color:  ${({back}) => back == 'true' ? 'white' : 'black'};
    text-shadow: ${({back}) => back == 'true' ? '0 2px 5px #000000b0' : '0 2px 5px #ffffff'};
    font-weight: 700;
    border: 1px dotted black;
`;

export const CircleImage = styled.div`
    padding: 5px;
    width: 60px;
    border-radius: 50%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a13303;
    img{
        filter: invert(1);
    }
`;

export const Section2 = styled.section`
    width: 100%;
    height: 500px;
`;