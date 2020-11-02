import React from "react";

import { ErrorMessage } from "./styles";
import { ModalLikeBg } from "components/PageSection";

export default class CustomError extends React.Component {
  state = {
    error: null,
  };

  componentWillMount() {
    if (this.props.error) {
      this.setState({ error: true });
    }
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
