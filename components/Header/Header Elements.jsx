import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    box-shadow: 0 1px 1px #7705055e;
    align-items: flex-end;
`;

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    img{
        filter: drop-shadow(0 2px 3px #5502028f);
    }
    a{
        color: var(--Black);
        cursor: pointer;
        font-weight: 700;
        height: 30px;
        letter-spacing: 0.8pt;
        text-align: center;
        padding-top: 4px;
    }
    div{
        &:hover hr {
            background-color: var(--Black);
            width: 100%;
            opacity: 1;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative; 
    user-select: none;
    .line1{
        position: absolute;
        width: 75px;
        height: 3px;
        background-color: #770505;
        left: 58px;
        top: 28px;
        border-radius: 5px;
    }
    .line2{
        position: absolute;
        width: 70px;
        height: 3px;
        background-color: #770505;
        left: 52px;
        top: 53px;
        border-radius: 5px;
    }
    h1{
        font-family: 'Josefin Sans', sans-serif;
        font-size: 25px;
        position: absolute;
        top: 54%;
        left: 50px;
        color: #770505;
    }
`;

export const Underline = styled.hr`
    width: 0%;
    height: 2px;
    background-color: transparent;
    transition: width 0.3s ease-in-out;
    opacity: 0;
`;