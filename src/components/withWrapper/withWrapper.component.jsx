import React from "react";

import {StyledWithWrapper} from "./withWrapper.styles";

const withWrapper = (WrappedComponent) => {
  class WithWrapper extends React.Component {
    render() {
      return (
        <StyledWithWrapper as={WrappedComponent} {...this.props} />
      )
    }
  }
  return WithWrapper;
}

export default withWrapper;