import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom'
 
export const SidebarContainer =styled.aside`
 position:fixed;
z-index:999;
width:100%;
height:100%;
// background:#0d0d0d;
background: #5f2c82;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #49a09d, #5f2c82);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #49a09d, #5f2c82); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display:grid;
align-items:center;

top:0;
left:0;
transition:0.3s ease-in-out;
 
opacity: ${({isOpen})=> (isOpen ? '100%': '0')};
top: ${({isOpen})=> (isOpen ? '0': '-150%')};
 
  
 
`;

export const CloseIcon =styled(FaTimes)`
color:#fff;

`;



export const Icon=styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;

`;

export const SidebarWrapper=styled.div`
color:#fff;
margin-top:100px;

`

export const SidebarLink=styled(LinkR)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
text-decoration:none;
color:#fff;
cursor:pointer;

&:hover {
    color:#01bf71;
    transition:0.2s ease-in-out;
}

`;
export const SidebarMenu =styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,100px);
text-align:center;
@media screen and(max-width:480px){
    grid-template-rows:repeat(6,60px);
}

`


