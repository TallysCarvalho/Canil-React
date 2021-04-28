import styled from 'styled-components'
import ImgBg from '../../images/huskywpp2.jpg'

export const CorpoContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7),
rgba(0,0,0,0.1)),url(${ImgBg});
height:100vh;
background-position: center;
background-size:cover;
`
export const CorpoContent = styled.div`
height: calc(100vh -80px);
max-height:100%;
width:100vh;
padding:0rem calc((100vw - 1300px) / 2);


`

export const CorpoItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: flex-start;
height:100vh;
max-height:100%;
padding:0 2rem;
width: 650px;
color: #fff;
text-transform:uppercase;
line-height:1;
font-weight:bold;

@media screen and (max-width:650px){
   width:100vw;
    //padding:0;
    margin:0;
}
`

export const CorpoH1 = styled.h1`
font-size: clamp(2.5rem,10vw,5rem);
//box-shadow: 3px 5px #696969;
letter-spacing:3px;
opacity: 0;
animation: moveBanners 1s 0.5s forwards;

@keyframes moveBanners{
    0%{
        transform: translateY(10rem) rotateY(-30deg);
    }
    100%{
        transform: translateY(0rem) rotateY(0);
        opacity: 1;
    }

    
}


`


export const CorpoP = styled.p`
font-size:clamp(2rem,2.5vw,3rem);
margin-bottom:2rem;
opacity: 0;
animation: moveBanners 1s 0.7s forwards;

@keyframes moveBanners{
    0%{
        transform: translateY(10rem) rotateY(-30deg);
    }
    100%{
        transform: translateY(0rem) rotateY(0);
        opacity: 1;
    }
    
}
@media screen and (max-width:650px){
    word-wrap:  normal;
}
`

export const CorpoBtn = styled.button`
font-size: 1.4rem;
padding: 1rem 4rem;
border: none;
background:#1C1C1C;
color:#fff;
transition: 0.2s ease-out;
opacity: 0;
animation: moveBanners 1s 0.9s forwards;

@media screen and (max-width:650px){
   
    margin-left:150px;
}

&:hover{
    background:#E8E8E8;
    transition: 0.2s ease-out;
    cursor: pointer;
    color:#000;

    
}

@keyframes moveBanners{
    0%{
        transform: translateY(10rem) rotateY(-30deg);
    }
    100%{
        transform: translateY(0rem) rotateY(0);
        opacity: 1;
    }
}
`


