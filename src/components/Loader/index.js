import React from "react";

import { BouncingCircle } from "./styles";
import { ModalLikeBg } from "components/PageSection";

export const Loader = () => (
  <ModalLikeBg>
    <BouncingCircle />
  </ModalLikeBg>
);
