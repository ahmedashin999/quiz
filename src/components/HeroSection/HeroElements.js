import styled from 'styled-components';
import {Link } from 'react-router-dom'
export const HeroContainer =styled.div`
// background: #0c0c0c;
background: #5f2c82;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #49a09d, #5f2c82);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #49a09d, #5f2c82); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
 height:700px;
position:relative;
z-index:1;



`;

// export const HeroBg=styled.div`
// position:absolute;
// top:0;
// right:0;
// bottom:0;
// left:0;
// width:100%;
// height:100%;
// overflow:hidden;


// `
export const ImageBg=styled.img`
width:100%;
height:100%:
-o-object-fit:cover;
0bject-fit:cover;
background:#232a34;
background-position:center;

`

export const HeroContent =styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding:8px 24px;
display:flex;
flex-direction:column;
align-items:center;

`
export const HeroH3 =styled.h3`
color:#fff;
font-size:28px;
text-align:center;

@media screen  and(max-width: 768px){
    font-size:20px;

}
@media screen  and(max-width: 480px){
    font-size:16px;
}
`

export const HeroH2=styled.h2`
color:#fff;
margin-top:5px;
font-size:40px;
text-align:center;
max-width:600px;

@media screen  and(max-width: 768px){
    font-size:30px;

}
@media screen  and(max-width: 480px){
    font-size:25px;}
`
export const HeroH4=styled.h4`

color:#fff;
margin-top:-5px;
font-size:25px;
text-align:center;
max-width:600px;

@media screen  and(max-width: 768px){
    font-size:20px;

}
@media screen  and(max-width: 480px){
    font-size:16px;}
`
export const HeroP=styled.p`
color:#fff;
margin-top:5px;
font-size:14px;
text-align:center;
max-width:600px;

`
export const HeroBtnWrapper = styled.div`
margin-top:20px;
display:flex;
flex-direction:row;
align-items:center;

`

export const Button =styled(Link)`
 border-radius: 50px;
//  background: ${({primary})=>(primary ?'#01bf71':'#010606' )};
background: #EC6F66;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F3A183, #EC6F66);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F3A183, #EC6F66); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

 white-space:nowrap;
 padding:${({big})=>(big ? '14px 48px': '12px 30px')};
 color:${({dark})=>(dark ? '#010606':'#fff')};
font-size:20px; 
outline:none;
border:none;
cursor:pointer;
display:flex;
margin-right:5px;
justify-content:center;
align-items:center;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover {
    transition:all o.2s ease-in-out;
    // background:  ${({primary})=>(primary ?'#fff':'#01bf71' )}
    opacity:0.8;
}

`