import styled, { keyframes } from "styled-components";

const scaleout = keyframes`
0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
`;
export const BouncingCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin: 6.25rem 0;
  background-color: ${({ theme }) => theme.color.veryDarkGray};
  border-radius: 100%;
  animation: ${scaleout} 1s infinite ease-in-out;
`;
