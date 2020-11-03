import React from "react";

import { ErrorMessage } from "./styles";
import { ModalLikeBg } from "components/PageSection";

export default class CustomError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: this.props.error };
  }

  render() {
    if (this.state.error) {
      return (
        <ModalLikeBg>
          <ErrorMessage>
            Something went wrong, please try again later
          </ErrorMessage>
        </ModalLikeBg>
      );
    }
    return this.props.children;
  }
}
