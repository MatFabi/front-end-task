import React from "react";
import axios from "axios";

import { GithubImage, UserName } from "components/UserInfo/styles";
import {Loader} from 'components/Loader/index';
import * as Section from "components/PageSection";

export default class UserInfo extends React.Component {
  state = {
    username: null,
    avatarUrl: null,
    loading:true
  };
  componentDidMount() {
    axios.get("https://api.github.com/users/matfabi").then((res) => {
      this.setState({
        username: res.data.login,
        avatarUrl: res.data.avatar_url,
        loading:false
      });
    });
  }
  render() {
      let content = <Loader />
      if(!this.state.loading){
          content=(<Section.Wrapper>
          <Section.Content>
            <UserName>{this.state.username}</UserName>
            <GithubImage src={this.state.avatarUrl} alt="Github user icon"/>
          </Section.Content>
        </Section.Wrapper>)
      }
    return (
        <div>
            {content}
        </div>
    );
  }
}
