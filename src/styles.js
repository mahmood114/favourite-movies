import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #222;
        color: white;
        
        font-weight: bolder;
    }
`;

export const Title = styled.h1`
    text-align: center;
    
`;

export const Text = styled.h3`
    /* color: white;
    padding-left: 10px; */
`;

export const Date = styled.p`
    font-style: italic;
    text-align: center;
    margin: 0;
`;

export const Image = styled.img`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    width: inherit;
    z-index: -1;
`;

export const MovieWrapper = styled.div`
    display: inline-block;
    margin: 30px;

    border-radius: 10px;
    width: 262.5px;
    height: 375px;
    overflow:hidden;
    position: relative;
    transition: all 0.3s;
    
    h3 {
        color: transparent;
    }
    
    :hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background: linear-gradient(180deg, rgba(2,0,36,0.9990371148459384) 0%, rgba(1,0,16,0) 50%, rgba(0,0,0,0) 100%, rgba(0,212,255,0) 100%);
        
        h3 {
            color: white;
            padding-left: 10px;
        }
    }
`;

export const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const DetailWrapper = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;

    span {
        font-weight: bold;
        font-size: 1.1em;
    }

    img {
        width: 40%;
        float: left;
        margin-right: 20px;
        
    }
    
    p {vertical-align: middle;}
`;