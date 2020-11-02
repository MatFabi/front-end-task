import React from "react";

import { SliderWrapper, Slide, SliderImg, SpaceBetween } from "./styles";

export const Slider = () => {
  const slidesToShow = 6;
  const repeats = 2;

  const slidesImgRefs = (() => {
    let arr = [];
    for (let i = 0; i < slidesToShow; i++) {
      arr.push(require(`./assets/photos/slide-${(i % slidesToShow) + 1}.jpg`));
    }
    return arr;
  })();

  const slidesComponents = (() => {
    let arr = [];
    for (let i = 0; i < repeats; i++) {
      arr.push(
        <Slide key={i}>
          {slidesImgRefs.map((el, index) => (
            <SliderImg key={"" + i + index} src={el} />
          ))}
        </Slide>
      );
    }
    return arr;
  })();

  return (
    <React.Fragment>
      <SliderWrapper>{slidesComponents}</SliderWrapper>
      <SpaceBetween />
    </React.Fragment>
  );
};
