import React from "react";
import axios from "axios";

import { GithubImage, UserName } from "components/UserInfo/styles";

import { Loader } from "components/Loader/index";
import CustomError from "components/Error";
import * as Section from "components/PageSection";

export default class UserInfo extends React.Component {
  state = {
    username: null,
    avatarUrl: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/matfabi")
      .then((res) => {
        this.setState({
          username: res.data.login,
          avatarUrl: res.data.avatar_url,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    let content = <Loader />;
    if (!this.state.loading) {
      content = (
        <CustomError error={this.state.error}>
          <Section.Wrapper error={this.state.error}>
            <Section.Content>
              <UserName>{this.state.username}</UserName>
              <GithubImage src={this.state.avatarUrl} alt="Github user icon" />
            </Section.Content>
          </Section.Wrapper>
        </CustomError>
      );
    }
    return <div>{content}</div>;
  }
}
