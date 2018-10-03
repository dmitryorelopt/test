import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div``;

export class NotFound extends Component {
  render() {
    const { className } = this.props;
    return (
      <Wrapper className={className}>
        <Link to="/">На главную</Link>
      </Wrapper>
    );
  }
}
