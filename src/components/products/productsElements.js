import styled from 'styled-components';

export const ProductsContainer = styled.div`
width:100vw;
min-height:100vh;
//padding: 5rem calc((100vh - 1300px)/2);
background: #150f0f;
color: #A7906B;

`
export const ProductWrapper = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: center;
margin: 0 auto;

`
export const ProductCard = styled.div`
margin:0 2rem;
line-height:2;
width: 300px;
font-weight:bold;
`

export const ProductImg = styled.img`
height:300px;
min-width:300px;
max-width:100%;
box-shadow:5px 5px 1px #A7906B;
object-fit:cover;
`

export const ProductsHeading = styled.h1`
//background-color:#0c0808;
padding-top:6rem;
height:130px;
display: flex;
align-items:center;
justify-content:center;
text-align:center;
font-size: clamp(2rem,2.5vw,3rem);
margin-bottom:5rem;
//border-bottom: 3px solid white;

&:before, &:after{
  //  position: relative;
    content: "";
    width: 30%;
    margin-right:10px;
    margin-left:10px;
    left: 30%;
    display: block;
    //margin-bottom: 10px;
   // margin-top: 10px;
    border-bottom: 5px solid #A7906B;
}

//white-space: nowrap;
//box-shadow:5px 10px 5px #000;

`

export const ProductTitle = styled.h2`
font-weight:400;
font-size:1.5rem;
font-weight:bold;
`

export const ProductInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:1rem;
text-align:center;
`

export const ProductDesc = styled.p`
margin-bottom:1rem;
`

export const ProductPrice = styled.p`
margin-bottom: 1rem;
font-size: 2rem;
`

export const ProductButton = styled.div`
font-size:1rem;
padding:1rem 4rem;
border:none;
background: #A7906B;
color:#150f0f;
transition: 0.2 ease-out;
white-space: nowrap;

&:hover{
    background:#fff;
    transition: 0.2s ease-out;
    cursor:pointer;
    color:#A7906B;
}
`
