import styled, {keyframes} from "styled-components";

const slider = keyframes`
  0% {transform:translateX(-100%);}
  100% {transform:translateX(0%);}  
`

export const SpaceBetween = styled.div`
  margin:22rem;
`
export const SliderWrapper = styled.div`  
  height:24rem;
  overflow:hidden;
  left:0;
  margin-top: 2rem;
  width:100%;
  display:flex;
  position:absolute;

  &::before, &::after {
    content:"";    
    height:20rem;
    width:10rem;
    position:absolute;
    z-index:1;
  }
  &::before{
    left:0;
    background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  }
  &::after{
    right:0;
    background: linear-gradient(to left, white 0%, rgba(255, 255, 255, 0) 100%);
  }
`
export const Slide = styled.div`
  height:20rem;
  display:flex;
  align-items:center;
  animation: ${slider} 14s linear infinite;
  `
export const SliderImg = styled.img`
  border-radius: 1rem;
  height:20rem;
  margin 0 0.75rem;
`
