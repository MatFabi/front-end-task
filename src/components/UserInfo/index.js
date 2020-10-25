import React from "react";
import axios from "axios";

import { GithubImage, UserName } from "components/UserInfo/styles";
import * as Section from "components/PageSection";

export default class UserInfo extends React.Component {
  state = {
    username: null,
    avatarUrl: null,
  };
  componentDidMount() {
    axios.get("https://api.github.com/users/matfabi").then((res) => {
      this.setState({
        username: res.data.login,
        avatarUrl: res.data.avatar_url,
      });
    });
  }
  render() {
    return (
      <Section.Wrapper>
        <Section.Content>
          <Section.Header>
            <UserName>{this.state.username}</UserName>
            <GithubImage src={this.state.avatarUrl} alt="Github user icon" />
          </Section.Header>
        </Section.Content>
      </Section.Wrapper>
    );
  }
}
