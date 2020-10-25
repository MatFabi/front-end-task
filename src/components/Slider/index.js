import React from "react";
import slide1 from "./assets/photos/slide-1.jpg";
import slide2 from "./assets/photos/slide-2.jpg";
import slide3 from "./assets/photos/slide-3.jpg";
import slide4 from "./assets/photos/slide-4.jpg";
import slide5 from "./assets/photos/slide-5.jpg";
import slide6 from "./assets/photos/slide-6.jpg";
import {SliderWrapper, Slide, SliderImg, SpaceBetween} from './styles';

export const Slider = () => (
  <React.Fragment>
    <SliderWrapper>
      <Slide>
        <SliderImg src={slide1} />
        <SliderImg src={slide2} />
        <SliderImg src={slide3} />
        <SliderImg src={slide4} />
        <SliderImg src={slide5} />
        <SliderImg src={slide6} />
      </Slide>
      <Slide>
        <SliderImg src={slide1} />
        <SliderImg src={slide2} />
        <SliderImg src={slide3} />
        <SliderImg src={slide4} />
        <SliderImg src={slide5} />
        <SliderImg src={slide6} />
      </Slide>
    </SliderWrapper>
    <SpaceBetween />
  </React.Fragment>
);
