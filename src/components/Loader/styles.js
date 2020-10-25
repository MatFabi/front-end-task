import styled, {keyframes} from "styled-components";

const scaleout = keyframes`
0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
`
export const LoaderBG = styled.div`
// display:flex;
position:absolute;
width:100%;
height:100%;
background:rgba(0, 0, 0, 0.1);
`;

export const BouncingCircle = styled.div`
width: 40px;
height: 40px;
margin: 100px auto;
background-color: #333;
border-radius: 100%; 
animation: ${scaleout} 1.0s infinite ease-in-out;
`;


